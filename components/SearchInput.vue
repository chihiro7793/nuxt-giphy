<template>
  <input
    placeholder="Type and search for gifs"
    v-model="keyword"
    @input="onSearch"
  />
</template>

<script>
export default {
  data() {
    return {
      keyword: '',
      timeout: null
    }
  },
  methods: {
    onSearch() {
      if (this.keyword !== '') {
        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          this.makeAsearchCall()
        }, 700)
      } else {
        this.$store.commit('searchCall',[])
      }
    },
    async makeAsearchCall() {
      let resp = await this.$axios.get(`/search?api_key=n7aovHfAyMyXnG3TPpBqIMHENiRFXuFd&q=${this.keyword}&limit=`)
        resp.data.data.forEach(element => {
          element.isbookmarked = false   
        })
      this.$store.commit('searchCall',resp.data.data)
    }
  }
}
</script>

<style>
input {
  padding: 10px 16px;
  border-radius: 4px;
  font-size: 18px;
  border: 2px solid #5f5f5f;
  outline: 0;
  display: block;
  width: 100%;
  color: darkgray;
}

input:focus {
  border-color:rgb(245, 245, 100);;
}
</style>
