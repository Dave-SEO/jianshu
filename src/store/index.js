import {createStore, compose, applyMiddleware} from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'
// redux-thunk 中间件可以在redux action中写函数进行异步操作
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk)
))
// const  store  = createStore(reducer)
export default store