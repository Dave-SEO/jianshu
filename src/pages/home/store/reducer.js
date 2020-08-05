// reducer 是一个纯函数
import {fromJS} from 'immutable'
import * as actionsTypes from './actionsTypes'
const defaultState = fromJS({
    bannerList: [],
    articleList: [],
    board: [],
    author: [],
    articlePage: 1,
    authorPageTotal: 1,
    authorPage: 1,
    isShowScrollTop: false
})
export default (state = defaultState, action) =>{
    switch(action.type){
        case actionsTypes.BANNERDATA:
            return state.merge({
                articleList: fromJS(action.article),
                bannerList: fromJS(action.banner),
                board: fromJS(action.board),
                author: fromJS(action.author),
                authorPageTotal: action.authorPageTotal
            })
        case actionsTypes.MORELIST:
           return state.merge({
            articleList: state.get('articleList').concat(action.data.article),
            articlePage: action.nextPage
           })
        case actionsTypes.CHANGEAUTHORPAGE:
            return state.set('authorPage', action.authorPage)
        case actionsTypes.CHANGEBACKTOP:
            return state.set('isShowScrollTop', action.data)
        default:
            return state
    }
}