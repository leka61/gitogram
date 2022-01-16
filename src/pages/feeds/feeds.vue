<template>
    <div class="topline">
        <topline>
            <template #headline>
              <div class="c-menu">
                <menu/>
              </div>

                <!-- <div class="icon">
                    <icon name="home"/>
                </div> -->
            </template>
            <template #stories>
                <ul class="stories">
                    <li v-for="story in stories" :key="story.id" class="stories-item">
                        <story-user-item :avatar="story.avatar" :username="story.username" @onPress="handlePress(story.id)"/>
                    </li>
                </ul>
            </template>
            <template #content>
                <div class="posts-container">
                      <ul class="posts__list">
                          <li v-for="item in posts" :key="item.id" class="posts__item">
                              <post :avatar-url="item.avatar" :username="item.username">
                                <template #card>
                                  <card :title="item.title" />
                                </template>
                              </post>
                          </li>
                      </ul>
                </div>
                <!-- <div class="c-feed">
                    <toggler @onToggle="toggle"/>
                    <div class="comments" v-if="shown">
                        <ul class="comments-list">
                            <li class="comments-item" v-for="n in 5" :key="n">
                                <comment text="Some text" username="User 1"/>
                            </li>
                        </ul>
                    </div>
                </div> -->
            </template>
        </topline>
    </div>
    <div class="baseline">
    </div>
</template>
<script>
import { topline } from '../../components/topline'
// import { icon } from '../../icons'
import { storyUserItem } from '../../components/storyUserItem'
// import { toggler } from '../../components/toggler'
// import { comment } from '../../components/comment'
import { post } from '../../components/post'
import { card } from '../../components/card'
import stories from './data.json'

export default {
  name: 'feeds',
  components: {
    topline,
    // icon,
    storyUserItem,
    // toggler,
    // comment,
    post,
    card
  },
  data() {
    return {
      stories,
      shown: false,
      posts: []
    }
  },
  methods: {
    toggle(isOpened) {
      this.shown = isOpened
    }
  },
  created() {
    console.log(stories)
    this.posts = stories
  }
}
</script>

<style lang="scss" scoped src="./feeds.scss"></style>
