import {fromJS} from 'immutable'
import * as actionsTypes from './actionsTypes'
const defaultState = fromJS({
   loginStatus: false
})
export default (state = defaultState, action) =>{
    switch (action.type) {
       case actionsTypes.LOGIN:
         return state.set('loginStatus', action.action)
      case actionsTypes.OUTLOGIN:
         return state.set('loginStatus', action.data)
        default:
           return state
    }
}