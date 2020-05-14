import {combineReducers} from 'redux'
import {reducer as headerRducer} from '../common/header/store'
export default combineReducers({
    header: headerRducer
})