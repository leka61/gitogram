<template>
  <div class="post">
    <div class="post__user mb-16 mt-16">
      <user :src="avatarUrl" :name="username"/>
    </div>
    <div class="post__card mb-16">
      <slot name="card"/>
    </div>
    <div class="c-feed">
      <toggler class="mb-10" @click="$emit('loadContent')" @onToggle="toggle"/>
      <div class="comments" v-if="shown">
        <ul class="post__comment comment__list">
          <li
          class="comment__item mb-6"
          v-for="{id,
                  user,
                  title} in issues" :key="id">
            <comment :text="title" :username="user.login"/>
          </li>
        </ul>
      </div>
    </div>
    <div class="c-date">
      <span>{{date}}</span>
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
  emits: ['loadContent'],
  props: {
    avatarUrl: {
      type: String,
      default: "https://picsum.photos/300/300"
    },
    username: {
      type: String,
      default: "User Loft"
    },
    date: {
      type: String,
      default: "15 MAY"
    },
    issues: {
      type: Array,
      default: () => ([])
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
