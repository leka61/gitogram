<template>
    <div class="toggler">
        <toggler class="mb-10" @toggle="handleToggle"/>
    </div>
    <div class="content-loader" v-if="loading">
        <content-loader/>
    </div>
    <div class="comments" v-if="issues?.length && opened">
        <ul v-if="issues.length" class="post__comment comment__list">
          <li
          class="comment__item mb-6"
          v-for="item in issues" :key="item.id">
            <comment :text="item.body" :username="item.user.login"/>
          </li>
        </ul>
    </div>
</template>

<script>
import { ref } from 'vue'
import { toggler } from '../../components/toggler'
import { comment } from '../../components/comment'
import { contentLoader } from '../../components/contentLoader'

export default {
  components: {
    toggler,
    comment,
    contentLoader
  },
  props: {
    loading: {
      type: Boolean
    },
    username: {
      type: String,
      default: "User Loft"
    },
    issues: {
      type: Array,
      default: () => ([])
    }
  },
  emits: ["loadI"],
  data() {
    return {
      shown: false
    }
  },
  setup(props, { emit }) {
    const opened = ref(false)
    const handleToggle = (isOpened) => {
      opened.value = isOpened;
      if (isOpened && props.issues.length === 0) {
        emit("loadI")
      }
    }
    return {
      opened,
      handleToggle
    }
  }
}
</script>

<style>

</style>
