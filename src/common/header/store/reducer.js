import * as actionTypes from './actionsTypes' 
import {fromJS} from 'immutable'
const defaultState = fromJS({
    foucsd: false,
    list: [],
    mouseIn: false,
    page: 1,
    totalPage: 1
})
export default (state = defaultState, action) =>{
    switch (action.type) {
        case actionTypes.SEARCHFOCUS:
               // immutable 对象的set方法，会结合之前的immutable对象的值，返回一个全新的对象
            return state.set('foucsd', true) 
        case actionTypes.SEARCHBLUR:
            return state.set('foucsd', false)
        case actionTypes.SEARCHDATA:
            return state.merge({
                list: action.data,
                totalPage: action.totalPage
            })
        case actionTypes.SETMOUSEENTER:
            return state.set('mouseIn', true)
        case actionTypes.SETMOUSELEAVE:
            return state.set('mouseIn', false)
        case actionTypes.CHANGEPAGE:
            return state.set('page', action.page)
        default:
            return state
    }
}