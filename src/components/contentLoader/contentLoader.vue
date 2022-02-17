<template>
  <div class="placeholder_rows mt-10">
     <div class="placeholder_row mb-8" v-for="n in paragraphs" :key="n">
     </div>
  </div>
</template>

<script>
export default {
  props: {
    paragraphs: {
      type: Number,
      default: 3
    }
  }
}
</script>

<style src="./contentLoader.scss" scoped lang="scss"></style>
