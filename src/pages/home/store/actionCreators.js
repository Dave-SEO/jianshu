import * as actionsTypes from './actionsTypes'
import axios from 'axios'
const bannerData = data => ({
    type: actionsTypes.BANNERDATA,
    board: data.board,
    article: data.article,
    banner: data.banner,
    author: data.author,
    authorPage: 1,
    authorPageTotal: Math.ceil(data.author.length / 4)
})
export const getBannerList = () => {
    return async (dispatch) =>{
       const {data: {code, data}} = await axios.get('/api/getHomeList.json')
       if(code === 0) {
            dispatch(bannerData(data))
       }
    }
}
const getMoreData = (data, nextPage) =>({
    type: actionsTypes.MORELIST,
    data,
    nextPage
})
export const setAuthorPage = (authorPage) =>({
    type: actionsTypes.CHANGEAUTHORPAGE,
    authorPage
})
export const getMore = (page) => {
    return async (dispatch) => {
        const {data: {code, data}} = await axios.get(`/api/getListMore.json?page=${page}`)
        if(code === 0) {
            dispatch(getMoreData(data, page + 1))
       }
    }
}
export const changBackTop = (data) => ({
    type: actionsTypes.CHANGEBACKTOP,
    data
})