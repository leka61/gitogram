<template>
  <div class="stats">
    <div class="stats__border stats__right">
      <div class="stats__icon mr-4">
        <icon icon-name="stars" />
      </div>
      <span>Star</span>
    </div>
    <div class="stats__border">
      {{ stars }}
    </div>
    <div class="stats__border ">
      <div class="stats__icon mr-4">
        <icon icon-name="forks" />
      </div>
      <span>Forks</span>
    </div>
    <div class="stats__border stats__left">
      {{ forks }}
    </div>
  </div>
</template>

<script>
import { icon } from '../../icons'
export default {
  components: {
    icon
  },
  props: {
    stars: {
      type: Number,
      required: true
    },
    forks: {
      type: Number,
      required: true
    }
  },
  setup() {
    return {};
  }
};
</script>
<style src="./stats.scss" lang="scss"></style>
