// reducer 是一个纯函数
import {fromJS} from 'immutable'
import * as actionsTypes from './actionsTypes'
const defaultState = fromJS({
    bannerList: {}
})
export default (state = defaultState, action) =>{
    switch(action.type){
        case actionsTypes.BANNERDATA:
            return state.set('bannerList', action.data)
        default:
            return state
    }
}