<template>
  <div :class={active} class="c-progress">
      <div ref="indicator" class="indicator"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // tactive: false
    }
  },
  props: {
    active: {
      type: String,
      default: ""
    }
  },
  emits: ['onFinish'],
  methods: {
    emitOnFinish() {
      this.$emit('onFinish')
    }
  },
  mounted() {
    setTimeout(() => {
      // this.active = true
      this.$refs.indicator.addEventListener('transitionend', this.emitOnFinish)
    }, 7000)
    // this.$nextTick(() => {
    //   this.active = true
    // })
  },
  beforeUnmount() {
    this.$refs.indicator.removeEventListener('transitionend', this.emitOnFinish)
  }
}
</script>

<style lang="scss" scoped src="./progress.scss"></style>
