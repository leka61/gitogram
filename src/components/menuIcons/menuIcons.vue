<template>
    <div class="menu__icons">
        <div class="icon">
            <icon @click="$router.push({ name: 'feeds' })" name="home"/>
        </div>
        <avatar
        class="user__avatar"
        :avatar="src"
        :size="size"
        @click="$router.push({ name: 'user' })"/>
        <div class="icon">
            <icon
            name="exit"
            @click="logout"/>
        </div>
    </div>
</template>

<script>
import { avatar } from '../../components/avatar'
import { icon } from '../../icons'
import { mapActions } from 'vuex'
export default {
  components: {
    icon,
    avatar
  },
  methods: {
    ...mapActions({
      logout: "auth/logout"
    })
  },
  props: {
    src: {
      type: String,
      default: "https://picsum.photos/200/300"
    },
    size: {
      type: String,
      default: "xs"
    },
    user: {
      type: Object
    }
  }
};
</script>

<style src="./menuIcons.scss" lang="scss"></style>
