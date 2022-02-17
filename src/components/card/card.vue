<template>
  <div class="card">
    <div class="card__title_wrap mb-16">
      <h2 class="card__title mb-16">{{ title }}</h2>
    </div>
    <div class="card__desc mb-32">{{text}}</div>
    <div class="card__stats">
      <stats :stars=stars :forks=forks />
    </div>
  </div>
</template>

<script>
import { stats } from '../../components/stats'
export default {
  components: {
    stats
  },
  props: {
    title: {
      type: String,
      default: "Ttiel"
    },
    text: {
      type: String,
      default: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad totam undevoluptatem sunt fugiat labore amet perspiciatis! Dignissimos error reprehenderit officia repudiandae vero illum itaque ex eius maiores. Autem, fugit?"
    },
    stars: {
      type: Number,
      default: 10
    },
    forks: {
      type: Number,
      default: 5
    }
  }
};
</script>
<style src="./card.scss" lang="scss"></style>
