<template>
  <div>
    <!-- <nav class="nav">
      <ul class="nav__list">
        <li class="nav__item">
          <router-link to="/">Main</router-link>
        </li>
        <li class="nav__item">
          <router-link :to="{name:'About', params:{username:'user1'}}">About</router-link>
        </li>
      </ul>
    </nav> -->
    <router-view/>
  </div>
  <!-- <stories/> -->
  <!-- <feeds/> -->
  <!-- <posts/> -->
</template>

<script>
// import { feeds } from './pages/feeds/'
// import { stories } from './pages/stories/'
/// import { posts } from './pages/posts/'

// export default {
//   name: 'App',
//   components: {
//     // feeds
//     stories
//     /// posts
//   }
// }
</script>

<style src="./global.scss" lang="scss"></style>
