<template>
  <div class="list">
    <gif-item
      v-for="gif in giflist"
      :gif="gif"
      :giflist="giflist"
      :key="gif.id"
      @gifs-fetched="onbookmark"
    ></gif-item>
  </div>
</template>

<script>
import GifItem from './GifItem'
export default {
  props: ['giflist'],
  components: {
    GifItem
  },
  methods: {
    onbookmark(gif) {
      this.$store.commit('onbookmark',gif)
    }
  }
}
</script>

<style>
.list {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
