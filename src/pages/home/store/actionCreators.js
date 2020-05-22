import * as actionsTypes from './actionsTypes'
import {fromJS} from 'immutable'
import axios from 'axios'
const bannerData = data => ({
    type: actionsTypes.BANNERDATA,
    data: fromJS(data)
})
export const getBannerList = () => {
    return async (dispatch) =>{
       const {data: {code, data}} = await axios.get('/api/getHomeList.json')
       if(code === 0) {
            dispatch(bannerData(data))
       }
    }
}