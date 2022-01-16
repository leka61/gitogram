<template>
  <div class="post">
    <div class="post__user mb-16 mt-16">
      <user :src="avatarUrl" :name="username"/>
    </div>
    <div class="post__card mb-16">
      <slot name="card"/>
    </div>
    <div class="c-feed">
      <toggler class="mb-10" @onToggle="toggle"/>
      <div class="comments" v-if="shown">
        <ul class="post__comment comment__list">
          <li class="comment__item mb-6" v-for="item in 5" :key="item">
            <comment text="Some text" username="User 1"/>
          </li>
        </ul>
      </div>
    </div>
    <div class="c-date">
      <span>15 MAY</span>
    </div>
  </div>
</template>

<script>
import { user } from '../../components/user'
import { toggler } from '../../components/toggler'
import { comment } from '../../components/comment'
export default {
  components: {
    user,
    toggler,
    comment
  },
  props: {
    avatarUrl: {
      type: String,
      default: "https://picsum.photos/300/300"
    },
    username: {
      type: String,
      default: "User Loft"
    }
  },
  data() {
    return {
      shown: false
    }
  },
  methods: {
    toggle(isOpened) {
      this.shown = isOpened
    }
  }
}
</script>

<style src="./post.scss" lang="scss"></style>
