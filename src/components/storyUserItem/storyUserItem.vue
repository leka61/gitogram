<template>
  <div>
      <button class="c-story-user-item"></button>
      <div class="avatar_story" @click="$emit('onPress')">
        <avatar :avatar="avatar" :size="size"/>
          <!-- <img :src="avatar" class="img" alt="username avatar"/> -->
      </div>
      <div class="username">{{username}}</div>
  </div>
</template>

<script>
import { avatar } from '../../components/avatar'
export default {
  components: {
    avatar
  },
  emits: ['onPress'],
  props: {
    avatar: {
      type: String,
      default: "https://picsum.photos/200/300",
      required: true
    },
    username: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: 'l'
    }
  }
}
</script>
<style lang="scss" src="./storyUserItem.scss" scoped>

</style>
