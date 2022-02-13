<template>
    <div class="user_page">
        <div class="topline">
            <topline>
                <template #headline>
                <div class="c-menu">
                    <header-menu></header-menu>
                </div>
                </template>
            </topline>
        </div>
        <div class="user_page__left_block">
            <div class="user_page__title">My profile</div>
            <div class="user_page__profile">
                <avatar
                class="user_avatar"
                :avatar="userData.avatar_url"
                :size="size"/>
                <div class="user_page__info">
                    <div class="user_page__login">{{userData.login}}</div>
                    <div class="user_page__counts">
                        <div class="user_page__repos" @click="changeFollowing">
                            <span class="user_page__number">{{userRepos.length}}</span> repositories
                        </div>
                        <div class="user_page__followings" @click="changeFollowing">
                            <span class="user_page__number">{{userFollowing.length}}</span> followings
                        </div>
                    </div>
                    <div class="user_page__name">{{userData.name}}</div>
                </div>
            </div>
        </div>
        <div class="user_page__right_block" v-if="!showFollowing">
            <div class="user_page__top">
             <div class="user_page__title">Repositories</div>
             <div class="user_page__count">{{userRepos.length}}</div>
            </div>
             <div class="user_page__container mt-8">
                      <ul class="user_page__repos_list">
                          <li
                          v-for="{
                            id,
                            name,
                            description,
                            stargazers_count,
                            forks
                          } in userRepos" :key="id" class="posts__item">
                                <card :title="name" :text="description" :stars="stargazers_count" :forks="forks" />
                          </li>
                      </ul>
                </div>
        </div>
        <div class="user_page__right_block" v-if="showFollowing">
            <div class="user_page__top">
                <div class="user_page__title">Followings</div>
                <div class="user_page__count">{{userFollowing.length}}</div>
            </div>
            <div class="user_page__container mt-8">
                <ul class="user_page__following_list">
                          <li
                          v-for="{
                            id,
                            avatar_url,
                            login,
                            type
                          } in userFollowing" :key="id" class="posts__item">
                                <user :src="avatar_url" :name="login" :type="type" :size="userSize"/>
                                <!-- @click="$emit(data.following.status ? 'onUnFollow' :'onFollow', data.id)" -->
                                <x-button
                                :theme="'green'"
                                :btnText="'Unfollow'">{{'Unfollow'}}</x-button>
                          </li>
                      </ul>
            </div>
        </div>
    </div>
</template>
<script>
// import { mapActions, mapGetters, mapState } from 'vuex'
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { topline } from '../../components/topline'
import { headerMenu } from '../../components/headerMenu'
import { avatar } from '../../components/avatar'
import { card } from '../../components/card'
import { user } from '../../components/user'
export default {
  name: 'user_page',
  components: {
    topline,
    headerMenu,
    avatar,
    card,
    user
  },
  props: {
    size: {
      type: String,
      default: "l"
    },
    userSize: {
      type: String,
      default: "m"
    }
  },
  data() {
    return {
      showFollowing: false
    }
  },
  setup() {
    const { dispatch, state } = useStore()
    onMounted(() => {
      dispatch("following/getUserFollowings")
      dispatch("repos/getUserRepos")
    })
    // const currentInstance = getCurrentInstance()
    // const userData = computed(() => {
    //   console.log(currentInstance.proxy.$store.state);
    //   return currentInstance.proxy.$store.state.user.data
    // })
    // console.log(currentInstance.proxy.$store.state.starred.data)
    return {
      userData: computed(() => state.user.data),
      userFollowing: computed(() => state.following.data),
      userRepos: computed(() => state.repos.data)
    }
  },
  methods: {
    changeFollowing() {
      this.showFollowing = !this.showFollowing
    }
  }
//   props: {
//     src: {
//       type: String,
//       default: "https://picsum.photos/200/300"
//     },
//     size: {
//       type: String,
//       default: "L"
//     },
//     user: {
//       type: Object
//     }
//   },
//   computed: {
//     ...mapState({
//       user: (state) => state.user.data
//     }),
//     ...mapGetters({
//       hasUser: "user/hasUser"
//     })
//   },
//   methods: {
//     ...mapActions({
//       getUser: "user/getUser"
//     })
//   },
//   async created() {
//     await this.getUser()
//   }
}
</script>

<style lang="scss" src="./user.scss" scoped></style>
