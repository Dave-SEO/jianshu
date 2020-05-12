const defaultState = {
    foucsd: false
}
export default (state = defaultState, action) =>{
    if(action.type === 'searchFocus'){
        return {
            foucsd: true
        }
    }
    if(action.type === 'searchBlur'){
        return {
            foucsd: false
        }
    }
    return state
}