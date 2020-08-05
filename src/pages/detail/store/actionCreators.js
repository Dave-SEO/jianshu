import * as actionsTypes from './actionsTypes'
import axios from 'axios'
const detailData = data => ({
    type: actionsTypes.DETAILLSI,
    data
})
export const getDetailList = (id) =>{
    return async (dispatch) =>{
      let {data:{code, data}} = await axios.get(`/api/getDetails.json?id=${id}`)
      if(code === 1){
        dispatch(detailData(data))
      }
    }
}