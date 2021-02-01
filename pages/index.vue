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
import SearchInput from '~/components/SearchInput.vue'
import GifList from '~/components/GifList.vue'
import {mapGetters} from 'vuex'
export default {
  name: 'App',
  components: {
    SearchInput,
    GifList
  },
   async created() {
     try {
       let resp = await this.$axios.get(`/trending?api_key=n7aovHfAyMyXnG3TPpBqIMHENiRFXuFd&limit=&rating=r`)
        resp.data.data.forEach(element => {
          element.isbookmarked = false   
         })
        this.$store.commit("initilizeState",resp.data.data)
     } catch (error) {
       console.log(error);
     }
    
  },
   methods: {
    goToNextPage() {
      this.$store.commit("nextPage")
    },
    goToPreviousPage() {
      this.$store.commit("prevPage")
    }
  },
   computed: {
    disablePrevBtn() {
      return this.$store.getters.disablePrevBtn;
    },
    disableNextBtn() {
      return this.$store.getters.disableNextBtn;
    }
  }
}
</script>
<style>

* {
  box-sizing: border-box;
}
body {
  padding: 50px;
  color: whitesmoke;
  background-color: black;
}
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
