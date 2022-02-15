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
        <div class="user_page__content">
          <div class="user_page__left_block">
            <div class="user_page__left_block1">
              <div class="user_page__top mt-40">
                <div class="user_page__title mb-28"><h2>My profile</h2></div>
              </div>
              <div class="user_page__profile">
                  <avatar
                  class="user_avatar mr-20"
                  :avatar="userData.avatar_url"
                  :size="size"/>
                  <div class="user_page__info">
                      <div class="user_page__login"><h2>{{userData.login}}</h2></div>
                      <div class="user_page__counts mb-8">
                          <div class="user_page__repos user_page__counts_tab mr-10" @click="setActive('repositoriesTab')" :class="{ active: isActive('repositoriesTab') }">
                              <span class="user_page__number">{{userRepos.length}}</span> <span class="user_page__number_text">repositories</span>
                          </div>
                          <div class="user_page__followings user_page__counts_tab" @click="setActive('followingTab')" :class="{ active: isActive('followingTab') }">
                              <span class="user_page__number">{{userFollowing.length}}</span> <span class="user_page__number_text">followings</span>
                          </div>
                      </div>
                      <div class="user_page__name">{{userData.name}}</div>
                  </div>
              </div>
              </div>
          </div>
          <div class="user_page__right_block ml-75" id="repositoriesTab" :class="{ 'active show': isActive('repositoriesTab') }">
              <div class="user_page__top mt-40 mb-18">
                <div class="user_page__title"><h2>Repositories</h2></div>
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
                            } in userRepos" :key="id" class="mb-18">
                                  <card :title="name" :text="description" :stars="stargazers_count" :forks="forks" />
                            </li>
                        </ul>
                  </div>
          </div>
          <div class="user_page__right_block ml-75" id="followingTab" :class="{ 'active show': isActive('followingTab') }">
              <div class="user_page__top mt-40 mb-18">
                  <div class="user_page__title"><h2>Followings</h2></div>
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
                            } in userFollowing" :key="id" class="posts__item mb-32">
                                  <user :src="avatar_url" :name="login" :type="type" :size="userSize"/>
                                  <x-button
                                  class="user_page__btn"
                                  :theme="'green'"
                                  @click="unFollowUser(login, id)"
                                  :btnText="'Unfollow'">{{'Unfollow'}}</x-button>
                            </li>
                        </ul>
              </div>
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
import { button } from '../../components/button'
export default {
  name: 'user_page',
  components: {
    topline,
    headerMenu,
    avatar,
    card,
    user,
    xButton: button
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
      activeItem: 'repositoriesTab'
    }
  },
  setup() {
    const { dispatch, state } = useStore()
    onMounted(() => {
      dispatch("following/getUserFollowings")
      dispatch("repos/getUserRepos")
    })
    return {
      userData: computed(() => state.user.data),
      userFollowing: computed(() => state.following.data),
      userRepos: computed(() => state.repos.data),
      unFollowUser: (username, id) => dispatch('following/unFollowUser', { username, id })
    }
  },
  methods: {
    isActive(menuItem) {
      return this.activeItem === menuItem
    },
    setActive(menuItem) {
      this.activeItem = menuItem
    }
  }
}
</script>

<style lang="scss" src="./user.scss" scoped></style>
