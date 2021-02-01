<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h3>Bookmarked Gifs</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <gif-list :giflist="$store.state.bookmarks"></gif-list>
      </div>
    </div>
  </div>
</template>

<script>
import GifList from '~/components/GifList.vue'
export default {
  name: 'App',
  components: {
    GifList
  }
}
</script>
