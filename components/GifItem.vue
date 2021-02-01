<template>
  <div
    class="gif"
    :style="`background-image: url('${gif.images.fixed_width.url}')`"
  >
    <font-awesome-icon
      icon="bookmark"
      class="bookmark"
      v-if="this.gif.isbookmarked"
      @click="bookmarkThisGif"
    />
    <font-awesome-icon
      :icon="['far', 'bookmark']"
      class="bookmark"
      v-if="!this.gif.isbookmarked"
      @click="bookmarkThisGif"
    />
  </div>
</template>

<script>
export default {
  props: ['gif'],
  data() {
    return {
      url: ''
    }
  },
  methods: {
    bookmarkThisGif() {
      this.$emit('gifs-fetched', this.gif)
    }
  }
}
</script>

<style scoped>
.gif {
  width: 240px;
  height: 240px;
  margin-bottom: 20px;
  display: inline-flex;
  justify-content: center;
  align-items: flex-end;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.bookmark {
  color: whitesmoke;
  position: relative;
  bottom: 220px;
  left: 100px;
}
</style>
