<template>
    <div class="posts-container">
        <ul class="posts__list">
            <li v-for="item in posts" :key="item.id" class="posts__item">
                <post :avatar-url="item.avatar" :username="item.username">
                  <template #card>
                    <card :title="item.title" />
                  </template>
                </post>
            </li>
        </ul>
    </div>
</template>

<script>
import { post } from '../../components/post'
import { card } from '../../components/card'
import data from './data.json'

export default {
  name: 'posts',
  components: {
    post,
    card
  },
  data() {
    return {
      posts: []
    }
  },
  created() {
    console.log(data)
    this.posts = data
  }
}
</script>

<style src="./posts.scss" lang="scss"></style>
