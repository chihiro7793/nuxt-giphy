<template>
  <div class="container" id="home-container">
    <div class="row">
      <div class="col-md-12">
        <h3>Trending Gifs</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <search-input></search-input>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <gif-list :giflist="$store.state.slicedGifs"></gif-list>
      </div>
    </div>

    <div class="row">
      <div class="col-md-8">
        <div class="pagination">
          <button :disabled="disablePrevBtn" @click="goToPreviousPage">
            Previous
          </button>
          <button :disabled="disableNextBtn" @click="goToNextPage">
            Next
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { sliceArray } from '../functions/SliceArray'
import { BASE_URL, API_KEY } from '../config'
import SearchInput from './SearchInput.vue'
import GifList from './GifList.vue'

export default {
  name: 'App',
  components: {
    SearchInput,
    GifList
  },
  methods: {
    goToNextPage() {
      this.$store.state.currentPage += 1
      this.$store.state.slicedGifs = sliceArray(
        this.$store.state.gifs,
        this.$store.state.currentPage,
        9
      )
    },
    goToPreviousPage() {
      this.$store.state.currentPage -= 1
      this.$store.state.slicedGifs = sliceArray(
        this.$store.state.gifs,
        this.$store.state.currentPage,
        9
      )
    }
  },
  mounted() {
    fetch(`${BASE_URL}/trending?api_key=${API_KEY}&limit=&rating=r`)
      .then(response => response.json())
      .then(result => {
        result.data.forEach(element => {
          element.isbookmarked = false
        })
        this.$store.state.trending = result.data
        this.$store.state.gifs = this.$store.state.trending
        this.$store.state.slicedGifs = sliceArray(
          this.$store.state.gifs,
          this.$store.state.currentPage,
          9
        )
      })
  },
  computed: {
    disablePrevBtn() {
      return this.$store.state.currentPage === 0
    },
    disableNextBtn() {
      return (
        this.$store.state.currentPage ===
        Math.floor(this.$store.state.gifs.length / 9)
      )
    }
  }
}
</script>
<style>
#home-container {
  margin-top: 20px;
}
button {
  background-color: rgb(40, 167, 69);
  margin-right: 10px;
  cursor: pointer;
  width: 80px;
  height: 40px;
  border: none;
  font-weight: 500;
  color: antiquewhite;
  border-radius: 5px;
}
button:hover {
  background-color: rgb(33, 146, 56);
}
button:disabled {
  background-color: lightgrey;
  color: darkgray;
  cursor: unset;
}
</style>
