<template>
  <div class="menu">
      <logo @click="$router.push({ name: 'feeds' })"/>
      <menu-icons :src="user.avatar_url" v-if="hasUser"/>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import { menuIcons } from '../menuIcons'
import { logo } from '../logo'
export default {
  name: 'headerMenu',
  components: {
    menuIcons,
    logo
  },
  computed: {
    ...mapState({
      user: (state) => state.user.data
    }),
    ...mapGetters({
      hasUser: "user/hasUser"
    })
  },
  methods: {
    ...mapActions({
      logout: "auth/logout",
      getUser: "user/getUser"
    })
  },
  async created() {
    await this.getUser()
  }
}
</script>
<style src="./headerMenu.scss" lang="scss"></style>
