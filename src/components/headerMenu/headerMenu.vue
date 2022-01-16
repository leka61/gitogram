<template>
  <div class="menu">
      <!-- <div class="menu__title">
          <h1>Gitogram / </h1>
      </div> -->
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
