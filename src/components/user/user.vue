<template>
  <div class="user">
      <avatar class="user__avatar" :avatar="src" :size="size"/>
      <div>
        <div class="user__name">{{name}}</div>
        <div v-if="type" class="user__type">{{type}}</div>
      </div>
  </div>
</template>

<script>
import { avatar } from '../../components/avatar'
export default {
  components: {
    avatar
  },
  props: {
    src: {
      type: String,
      default: "https://picsum.photos/200/300"
    },
    name: {
      type: String,
      default: "John Doe"
    },
    type: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: "s"
    }
  }
}
</script>
<style src="./user.scss" lang="scss"></style>
