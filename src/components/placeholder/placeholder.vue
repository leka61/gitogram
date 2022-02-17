<template>
  <div class="placeholder_img mt-18 mb-20">
  </div>
  <div class="placeholder_rows">
     <div class="placeholder_row mb-8" v-for="n in paragraphs" :key="n">
     </div>
  </div>
</template>

<script>
export default {
  props: {
    paragraphs: {
      type: Number,
      default: 5
    }
  }
}
</script>

<style src="./placeholder.scss" scoped lang="scss"></style>
