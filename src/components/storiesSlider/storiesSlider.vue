<template>
    <div class="c-stories-slider">
        <div class="stories-container">
          <ul class="stories">
            <li class="stories_item" v-for="trending in trendings" :key="trending.id">
              <slider-item active :data="getStoryData(trending)" :btnsShown="activeBtns"/>
            </li>
          </ul>
        </div>
    </div>
</template>

<script>
import sliderItem from '../sliderItem/sliderItem.vue'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'storiesSlider',
  components: {
    sliderItem
  },
  data() {
    return {}
  },
  computed: {
    ...mapState({
      trendings: (state) => state.trendings.data
    }),
    activeBtns() {
      if (this.slideNdx === 0) return ["next"]
      if (this.slideNdx === this.trendings.length - 1) return ["prev"]
      return ["next", "prev"]
    }
  },
  methods: {
    ...mapActions({
      fetchTrendings: "fetchTrendings"
    }),
    getStoryData(obj) {
      return {
        id: obj.id,
        avatarUrl: obj.owner?.avatar_url,
        username: obj.owner?.login,
        content: obj.readme
      }
    }
  },
  async created() {
    await this.fetchTrendings()
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
