<template>
  <div class="card">
    <div class="card__title_wrap mb-16">
      <h2 class="card__title mb-16">{{ title }}</h2>
    </div>
    <div class="card__desc mb-32">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad totam unde
      voluptatem sunt fugiat labore amet perspiciatis! Dignissimos error
      reprehenderit officia repudiandae vero illum itaque ex eius maiores.
      Autem, fugit?
    </div>
    <div class="card__stats">
      <stats :stars="10" :forks="5" />
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
    }
  }
};
</script>
<style src="./card.scss" lang="scss"></style>