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
  emits: ['onProgressFinish'],
  methods: {
    OnFinish() {
      this.$emit('onProgressFinish')
    }
  },
  mounted() {
    setTimeout(() => {
      // this.active = true
    })
    // this.$nextTick(() => {
    //   this.active = true
    // })
    this.$refs.indicator.addEventListener('transitionend', this.OnFinish)
  },
  beforeUnmount() {
    this.$refs.indicator.removeEventListener('transitionend', this.OnFinish)
  }
}
</script>

<style lang="scss" scoped src="./progress.scss"></style>
