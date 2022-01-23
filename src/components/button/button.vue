<template>
    <button
      :class="[
        'c-button',`theme-green`,
        {'hover-text': withHoverText}
      ]"
      :data-hover-text="hoverText"
    >
      <span class='btn-text'>
        <!-- <slot></slot>   -->
        {{btnText}}
      </span>
    </button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        hoverText:{
            type: String
        },
        btnText:{
            type: String
        }
    },
    computed: {
        withHoverText (){
            return this.hoverText?.length
        }
    }
}
</script>
<style src="./button.scss" lang="scss"></style>