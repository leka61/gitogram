<template>
    <div class="topline">
        <topline>
            <template #headline>
              <div class="c-menu mb-45">
                <header-menu></header-menu>
              </div>
            </template>
            <template #content>
                <ul class="stories">
                    <li
                    v-for="{ id, owner } in trendings"
                    :key="id"
                    class="stories-item">
                        <story-user-item
                          :avatar="owner.avatar_url"
                          :username="owner.login"
                          @onPress="$router.push({ name: 'Stories', params: { initialSlide: id } })"/>
                    </li>
                </ul>
            </template>
        </topline>
        <baseline>
          <template #posts>
                <div class="posts-container mt-8">
                      <ul class="posts__list">
                          <li
                          v-for="{
                            id,
                            name,
                            owner,
                            description,
                            stargazers_count,
                            forks,
                            issues,
                            created_at
                          } in starred" :key="id" class="posts__item">
                              <post
                              :avatar-url="owner.avatar_url"
                              :username="owner.login"
                              :issues="issues?.data"
                              :date="new Date(created_at)"
                              :loading="issues?.loading"
                              @loadContent="loadIssues({ id, owner: owner.login, repo: name })">
                                <template #card>
                                  <card :title="name" :text="description" :stars="stargazers_count" :forks="forks" />
                                </template>
                              </post>
                          </li>
                      </ul>
                </div>
            </template>
        </baseline>
    </div>
</template>

<script>
import { topline } from '../../components/topline'
import { baseline } from '../../components/baseline'
import { storyUserItem } from '../../components/storyUserItem'
import { post } from '../../components/post'
import { card } from '../../components/card'
import { headerMenu } from '../../components/headerMenu'
import stories from './data.json'
// import * as api from '../../api'
import { mapActions, mapGetters, mapState } from 'vuex'

export default {
  name: 'feeds',
  components: {
    topline,
    storyUserItem,
    post,
    card,
    headerMenu,
    baseline
  },
  computed: {
    ...mapState({
      trendings: (state) => state.trendings.data,
      starred: (state) => state.starred.data
    }),
    ...mapGetters(["getUnstarredOnly"])
  },
  methods: {
    ...mapActions({
      fetchTrendings: "trendings/fetchTrendings",
      fetchStarred: "starred/fetchStarred",
      fetchIssues: "starred/fetchIssuesForRepo"
    }),
    loadIssues({ id, owner, repo }) {
      this.fetchIssues({ id, owner, repo })
    },
    toggle(isOpened) {
      this.shown = isOpened
    },
    storyPress(p) {
    }
  },
  emits: ['onPress', 'loadContent'],
  data() {
    return {
      stories,
      shown: false,
      posts: [],
      items: []
    }
  },
  // async created() {
  //   try {
  //     const { data } = await api.trendings.getTrendings()
  //     this.items = data.items
  //   } catch (error) {
  //     console.log(error)
  //   }

  //   this.posts = stories
  // },
  async mounted() {
    await this.fetchTrendings()
    await this.fetchStarred({ limit: 3 })
  }
}
</script>

<style lang="scss" src="./feeds.scss" scoped></style>
