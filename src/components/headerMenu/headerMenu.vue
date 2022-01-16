<template>
  <div class="menu">
      <logo/>
      <menu-icons/>
  </div>
</template>

<script>
import { menuIcons } from '../menuIcons'
import { logo } from '../logo'
export default {
  name: 'headerMenu',
  components: {
    menuIcons,
    logo
  }
}
</script>
<style src="./headerMenu.scss" lang="scss"></style>
