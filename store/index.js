import {sliceArray} from '~/mixins/global'
export const state = ()=>({ 
        gifs: [],
        trending: [],
        currentPage: 0,
        slicedGifs: [],
        bookmarks: [],
})

export const getters = {
    disablePrevBtn(state){
        return state.currentPage===0
    },
    disableNextBtn(state){
        return (
            state.currentPage === Math.floor(state.gifs.length/9)
        )
    }
}

export const mutations = {
    initilizeState(state,data)
    {
        state.trending = data
        state.gifs = state.trending
        state.slicedGifs = sliceArray( state.gifs, state.currentPage, 9)
    },
    nextPage(state){
        state.currentPage += 1
        state.slicedGifs = sliceArray(
            state.gifs,
            state.currentPage,
            9
        )
    },
    prevPage(state){
        state.currentPage -= 1
        state.slicedGifs = sliceArray(
            state.gifs,
            state.currentPage,
            9
        )
    },
    searchCall(state,data){
        if(data.length !== 0){
            state.gifs = data
            state.slicedGifs = sliceArray(
                state.gifs,
                state.currentPage,
                9
            )
        }else{
            state.slicedGifs = sliceArray(
                state.trending,
                state.currentPage,
                9
            )
        }
        
    },
    onbookmark(state,gif){
        let index = state.gifs.findIndex(element => element.id === gif.id)
        if (index !== -1) {
            state.gifs[index].isbookmarked = !state.gifs[index].isbookmarked
        }
        if (state.gifs[index].isbookmarked) {
            state.bookmarks.push(gif)
        } else {
            let index = state.bookmarks.findIndex(
                element => element.id === gif.id
            )
            if (index !== -1) {
                state.bookmarks.splice(index, 1)
            }
        }
    }
}