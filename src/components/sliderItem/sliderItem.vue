<template>
  <div class="slider-item" :class="{active}">
    <div class="slider">
        <div class="slider_header mb-18">
          <div class="slider_progress ml-8 mt-8 mb-12">
              <x-progress :active="active" @OnFinish="$emit('onProgressFinish')"/>
          </div>
          <div class="slider_user ml-8 mb-12">
              <user :src="data.avatarUrl" :name="data.username"/>
          </div>
        </div>
        <div class="slider_content ml-18 mb-20">
          <div class="loader" v-if="loading">
            <spinner/>
          </div>
          <div class="slider_info" v-else>
            <!-- <img class="slider_img mb-24" :src="sliderImg"/> -->
            <div v-if="data.content?.length" class="slider_text mb-6" v-html="data.content">
            </div>
            <placeholder v-else :paragraphs="2"/>
          </div>
        </div>
        <div class="slider_footer">
            <x-button class="mb-32" :hoverText="hoverBtnText" :btnText="btnText"></x-button>
        </div>
        <template v-if="active">
          <button
            v-if="btnsShown.includes('next')"
                  class="btn btn-next"
                  @click="$emit('onNextSlide')">
          <span class="icon">
            <icon name="arrow"/>
          </span>
          </button>
          <button
          v-if="btnsShown.includes('prev')"
                  class="btn btn-prev"
                  @click="$emit('onPrevSlide')">
            <span class="icon">
              <icon name="arrow"/>
            </span>
          </button>
        </template>
    </div>
  </div>
</template>

<script>
import { user } from '../../components/user'
import { button } from '../../components/button'
import { progress } from '../../components/progress'
import { placeholder } from '../../components/placeholder'
import { spinner } from '../../components/spinner'
import { icon } from '../../icons'

export default {
  components: {
    user,
    xButton: button,
    xProgress: progress,
    placeholder,
    spinner,
    icon
  },
  emits: ["onPrevSlide", "onNextSlide", "onProgressFinish"],
  props: {
    avatarUrl: {
      type: String,
      default: "https://picsum.photos/300/300"
    },
    btnText: {
      type: String,
      default: "Follow"
    },
    hoverBtnText: {
      type: String,
      default: "Unfollow"
    },
    sliderText: {
      type: String,
      default: "The easiest way to get .NET 6 Preview 4 is to install the maui-check dotnet tool from CLI and follow the instructions."
    },
    sliderImg: {
      type: String,
      default: "https://picsum.photos/800/500"
    },
    username: {
      type: String,
      default: "User Loft"
    },
    btnsShown: {
      type: Array,
      default: () => ["next", "prev"],
      validator(value) {
        return value.every(item => item === 'next' || item === 'prev')
      }
    },
    active: Boolean,
    loading: Boolean,
    data: {
      type: Object,
      required: true,
      default: () => ({})
    }
  }
}
</script>

<style src="./sliderItem.scss" lang="scss"></style>
