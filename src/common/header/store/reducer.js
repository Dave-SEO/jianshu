import * as actionTypes from './actionsTypes'
const defaultState = {
    foucsd: false
}
export default (state = defaultState, action) =>{
    if(action.type === actionTypes.SEARCHFOCUS){
        return {
            foucsd: true
        }
    }
    if(action.type === actionTypes.SEARCHBLUR){
        return {
            foucsd: false
        }
    }
    return state
}