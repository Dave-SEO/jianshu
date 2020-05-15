import * as actionTypes from './actionsTypes' 
import {fromJS} from 'immutable'
const defaultState = fromJS({
    foucsd: false
})
export default (state = defaultState, action) =>{
    if(action.type === actionTypes.SEARCHFOCUS){
       // immutable 对象的set方法，会结合之前的immutable对象的值，返回一个全新的对象
      return state.set('foucsd', true)
    }
    if(action.type === actionTypes.SEARCHBLUR){
        return state.set('foucsd', false)
    }
    return state
}