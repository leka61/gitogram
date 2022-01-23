<template>
  <div class="slider">
      <div class="slider_header mb-18">
        <div class="slider_progress ml-8 mt-8 mb-12">
            <x-progress/>
        </div>
        <div class="slider_user ml-8 mb-12">
            <user :src="avatarUrl" :name="username"/>
        </div>
      </div>
      <div class="slider_content ml-18 mb-20">
          <img class="slider_img mb-24" :src="sliderImg"/>
          <div class="slider_text mb-6">
              {{sliderText}}
          </div>
      </div>
      <div class="slider_footer">
          <x-button class="mb-32" :hoverText="hoverBtnText" :btnText="btnText"></x-button>
      </div>
  </div>
</template>

<script>
import { user } from '../../components/user'
import { button } from '../../components/button'
import { progress } from '../../components/progress'
export default {
  components: {
    user,
    xButton : button,
    xProgress : progress
  },
  props: {
    avatarUrl: {
      type: String,
      default: "https://picsum.photos/300/300"
    },
    btnText:{
      type: String,
      default: "Follow"
    },
    hoverBtnText:{
      type: String,
      default: "Unfollow"
    },
    sliderText:{
      type: String,
      default: "The easiest way to get .NET 6 Preview 4 is to install the maui-check dotnet tool from CLI and follow the instructions."
    },
    sliderImg:{
      type: String,
      default: "https://picsum.photos/800/500"
    },
    username: {
      type: String,
      default: "User Loft"
    }
  }
}
</script>

<style src="./sliderItem.scss" lang="scss"></style>