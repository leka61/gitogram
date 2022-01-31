<template>
  <div class="wrapper">
      <header class="header mt-48 mb-120">
          <div class="x-container">
              <button class="logo">
                <logo white/>
              </button>
              <button class="close-btn">
                  <icon name="close"/>
              </button>
          </div>
      </header>
      <div class="content">
          <stories-slider :initialSlide = "Number($route.params.initialSlide)"/>
      </div>
  </div>
</template>

<script>
import { logo } from '../../components/logo'
import { storiesSlider } from '../../components/storiesSlider'
import { icon } from '../../icons'

export default {
  components: {
    logo,
    storiesSlider,
    icon
  }
}
</script>

<style src="./stories.scss" lang="scss"></style>
