<template>
    <div class="topline">
        <topline>
            <template #headline>
                <div class="icon">
                    <icon name="home"/>
                </div>
            </template>
            <template #content>
                <ul class="stories">
                    <li v-for="story in stories" :key="story.id" class="stories-item">
                        <story-user-item :avatar="story.avatar" :username="story.username" @onPress="handlePress(story.id)"/>
                    </li>
                </ul>
                <div class="c-feed">
                    <toggler @onToggle="toggle"/>
                    <div class="comments" v-if="shown">
                        <ul class="comments-list">
                            <li class="comments-item" v-for="n in 5" :key="n">
                                <comment text="Some text" username="User 1"/>
                            </li>
                        </ul>
                    </div>
                </div>
            </template>
        </topline>
    </div>
</template>
<script>
import { topline } from '../../components/topline'
import { icon } from '../../icons'
import { storyUserItem } from '../../components/storyUserItem'
import { toggler } from '../../components/toggler'
import { comment } from '../../components/comment'
import stories from './data.json'

export default {
  name: 'feeds',
  components: {
    topline,
    icon,
    storyUserItem,
    toggler,
    comment
  },
  data () {
    return {
      stories,
      shown: false
    }
  },
  methods: {
    toggle (isOpened) {
      this.shown = isOpened
    }
  }
}
</script>

<style lang="scss" scoped src="./feeds.scss"></style>
