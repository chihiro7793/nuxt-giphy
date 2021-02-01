<template>
  <input
    placeholder="Type and search for gifs"
    v-model="keyword"
    @input="onSearch"
  />
</template>

<script>
import {getSearchedGifs} from '~/services'
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
    makeAsearchCall() {

      getSearchedGifs({
        method:'get',
        url:'https://api.giphy.com/v1/gifs/search',
        params:{api_key:'n7aovHfAyMyXnG3TPpBqIMHENiRFXuFd',q:this.keyword,limit:''}})
        .then(({data})=>{
            data.data.forEach(element => {
            element.isbookmarked = false   
            })
          this.$store.commit('searchCall',data.data)
        })
        .catch(error=>console.log(error))
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
