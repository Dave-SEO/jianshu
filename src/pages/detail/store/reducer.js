import {fromJS} from 'immutable'
import * as actionsTypes from './actionsTypes'
const defaultState = fromJS({
   detailList:[]
})
export default (state = defaultState, action) =>{
    switch (action.type) {
        case actionsTypes.DETAILLSI:
           return state.set('detailList', action.data)
        default:
           return state
    }
}