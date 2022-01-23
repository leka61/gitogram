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
                    <li v-for="story in items" :key="story.id" class="stories-item">
                        <story-user-item :avatar="story.owner.avatar_url" :username="story.owner.login" @onPress="handlePress(story.id)"/>
                    </li>
                </ul>
            </template>
        </topline>
        <baseline>
          <template #posts>
                <div class="posts-container mt-8">
                      <ul class="posts__list">
                          <li v-for="item in items" :key="item.id" class="posts__item">
                              <post :avatar-url="item.owner.avatar_url" :username="item.owner.login">
                                <template #card>
                                  <card :title="item.name" :text="item.description" :stars="item.stargazers_count" :forks="item.forks_count" />
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
import * as api from '../../api'

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
  data() {
    return {
      stories,
      shown: false,
      posts: [],
      items: []
    }
  },
  methods: {
    toggle(isOpened) {
      this.shown = isOpened
    }
  },
  async created() {
    try {
      const { data } = await api.trendings.getTrendings()
      this.items = data.items
    } catch (error) {
      console.log(error)
    }
    /// console.log(stories)
    this.posts = stories
  }
}
</script>

<style lang="scss" scoped src="./feeds.scss"></style>
