<template>
    <button class="c-story-user-item" @click="$emit('onPress')"></button>
    <div class="avatar_story">
      <avatar :avatar="avatar" :size="size"/>
        <!-- <img :src="avatar" class="img" alt="username avatar"/> -->
    </div>
    <div class="username">{{username}}</div>
</template>

<script>
import { avatar } from '../../components/avatar'
export default {
  components: {
    avatar
  },
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
