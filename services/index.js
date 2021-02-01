
import axios from 'axios'

export const getTrendingGifs = (args) => {
  return axios({...args})
}

export const getSearchedGifs = (args) =>{
    return axios({...args})
}