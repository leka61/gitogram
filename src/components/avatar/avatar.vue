<template>
    <div class="avatar" :style="avatarStyle">
        <img :src="avatar" class="img" alt="username avatar"/>
    </div>
</template>

<script>

export default {
  props: {
    avatar: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: "s"
    }
  },
  setup(props) {
    const style = {
      s: {
        width: "44px",
        height: "44px"
      },
      m: {
        width: "72px",
        height: "72px"
      },
      l: {
        width: "90px",
        height: "90px"
      }
    };
    const avatarStyle = style[props.size];

    return { avatarStyle };
  }
}
</script>

<style src="./avatar.scss" lang="scss"></style>
