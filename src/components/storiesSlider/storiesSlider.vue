<template>
    <div class="c-stories-slider">
        <div class="stories-container">
          <ul class="stories" ref="slider">
            <li
             class="stories_item mr-38"
             v-for="(trending, ndx) in trendings"
             :key="trending.id"
             ref="item"
             >
            <slider-item
              :active="slideNdx===ndx"
              :loading="slideNdx===ndx && loading"
              :data="getStoryData(trending)"
              :btnsShown="activeBtns"
              @onNextSlide="handleSlide(ndx + 1)"
              @onPrevSlide="handleSlide(ndx - 1)"
              @onProgressFinish="handleSlide(ndx + 1)"
              />
            </li>
          </ul>
        </div>
    </div>
</template>

<script>
import sliderItem from '../sliderItem/sliderItem.vue'
import { mapState, mapActions } from 'vuex'
// import { getReadme } from '../../api/rest/repos'
export default {
  name: 'storiesSlider',
  components: {
    sliderItem
  },
  props: {
    initialSlide: {
      type: Number
    }
  },
  data() {
    return {
      slideNdx: 0,
      sliderPosition: 0,
      loading: false,
      btnsShown: true
    }
  },
  computed: {
    ...mapState({
      trendings: (state) => state.trendings.data
    }),
    activeBtns() {
      if (this.btnsShown === false) return [];
      if (this.slideNdx === 0) return ["next"]
      if (this.slideNdx === this.trendings.length - 1) return ["prev"]
      return ["next", "prev"]
    }
  },
  methods: {
    ...mapActions({
      fetchTrendings: "trendings/fetchTrendings",
      fetchReadme: "trendings/fetchReadme"
    }),
    async fetchReadmeForActiveSlide() {
      const { id, owner, name } = this.trendings[this.slideNdx];
      await this.fetchReadme({ id, owner: owner.login, repo: name })
    },
    getStoryData(obj) {
      return {
        id: obj.id,
        avatarUrl: obj.owner?.avatar_url,
        username: obj.owner?.login,
        content: obj.readme
      }
    },
    moveSlider(slideNdx) {
      const { slider } = this.$refs;
      const item = this.$refs.item[slideNdx];
      console.log(slideNdx);
      const slideWidth = parseInt(getComputedStyle(item).getPropertyValue("width"), 10);
      this.slideNdx = slideNdx;
      this.sliderPosition = -(slideWidth * slideNdx);
      slider.style.transform = `translateX(${this.sliderPosition}px)`;
    },
    async loadReadme() {
      this.loading = true;
      this.btnsShown = false;
      try {
        await this.fetchReadmeForActiveSlide()
      } catch (error) {
        console.log(error);
        throw error;
      } finally {
        this.loading = false;
        this.btnsShown = true;
      }
    },
    async handleSlide(slideNdx) {
      this.moveSlider(slideNdx);
      await this.loadReadme()
    }

  },
  async mounted() {
    if (this.initialSlide) {
      const ndx = this.trendings.findIndex((item) => item.id === this.initialSlide);
      await this.handleSlide(ndx);
    }
    await this.fetchTrendings()
    await this.loadReadme()
  }
//   props: {
//     avatar: {
//       type: String,
//       default: "https://picsum.photos/200/300",
//       required: true
//     },
//     username: {
//       type: String,
//       required: true
//     },
//     size: {
//       type: String,
//       default: 'l'
//     }
//   }
}
</script>
<style lang="scss" src="./storiesSlider.scss" scoped>

</style>
