<template>
  <div class="post">
    <div class="post__user mb-16 mt-16">
      <user :src="avatarUrl" :name="username"/>
    </div>
    <div class="post__card mb-16">
      <slot name="card"/>
    </div>
    <div class="c-feed">
      <issues
      :loading="loading"
      :issues="issues"
      @loadI="this.$emit('loadContent')"/>
      <!-- <div class="toggler">
        <toggler class="mb-10" @toggle="handleToggle"/>
      </div>
      <div class="content-loader" v-if="loading">
        <content-loader/>
      </div>
      <div class="comments" v-if="issues?.length && opened">
        <ul class="post__comment comment__list">
          <li
          class="comment__item mb-6"
          v-for="{id,
                  user,
                  title} in issues" :key="id">
            <comment :text="title" :username="user.login"/>
          </li>
        </ul>
      </div> -->
    </div>
    <div class="c-date">
      <span>{{date}}</span>
    </div>
  </div>
</template>

<script>
// import { ref } from 'vue'
import { user } from '../../components/user'
import { issues } from '../../components/issues'
// import { toggler } from '../../components/toggler'
// import { comment } from '../../components/comment'
// import { contentLoader } from '../../components/contentLoader'
export default {
  components: {
    user,
    issues
    // toggler,
    // comment,
    // contentLoader
  },
  emits: ['loadContent'],
  props: {
    loading: {
      type: Boolean
    },
    avatarUrl: {
      type: String,
      default: "https://picsum.photos/300/300"
    },
    username: {
      type: String,
      default: "User Loft"
    },
    date: {
      type: String,
      default: "15 MAY"
    },
    issues: {
      type: Array,
      default: () => ([])
    }
  }
  // data() {
  //   return {
  //     shown: false
  //   }
  // },
  // setup(props, { emit }) {
  //   console.log(props.issues)
  //   const opened = ref(false)
  //   const handleToggle = (isOpened) => {
  //     opened.value = isOpened;
  //     if (isOpened && props.issues.length === 0) {
  //       emit("loadContent")
  //     }
  //   }
  //   return {
  //     opened,
  //     handleToggle
  //   }
  // }
  // methods: {
  //   toggle(isOpened) {
  //     this.shown = isOpened
  //   }
  // }
}
</script>

<style src="./post.scss" lang="scss"></style>
