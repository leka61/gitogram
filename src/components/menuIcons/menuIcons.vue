<template>
    <div class="menu__icons">
        <div class="icon">
            <icon name="home"/>
        </div>
        <avatar class="user__avatar" :avatar="src" :size="size"/>
        <div class="icon">
            <icon name="exit"/>
        </div>
    </div>
</template>

<script>
import { avatar } from '../../components/avatar'
import { icon } from '../../icons'
export default {
  components: {
    icon,
    avatar
  },
  props: {
    src: {
      type: String,
      default: "https://picsum.photos/200/300"
    },
    size: {
      type: String,
      default: "xs"
    }
  }
};
</script>

<style src="./menuIcons.scss" lang="scss"></style>
