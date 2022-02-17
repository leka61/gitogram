<template>
    <button
      :class="[
        'c-button', theme, loading ? 'loading':'',
        {'hover-text': withHoverText}
      ]"
      :data-hover-text="hoverText"
    >
      <span class='btn-text'>
        {{btnText}}
      </span>
    </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    hoverText: {
      type: String
    },
    btnText: {
      type: String
    },
    theme: {
      type: String
    },
    loading: {
      type: String
    }
  },
  computed: {
    withHoverText() {
      return this.hoverText?.length
    }
  }
}
</script>
<style src="./button.scss" lang="scss"></style>
