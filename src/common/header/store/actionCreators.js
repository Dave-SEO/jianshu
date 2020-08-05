import * as actionTypes from './actionsTypes'
import {fromJS} from 'immutable'
import axios from 'axios'
export const searchFocus = ()=>({
    type: actionTypes.SEARCHFOCUS
})
export const searchBlur = ()=>({
    type: actionTypes.SEARCHBLUR
})
export const seardata = (data) =>({
    type: actionTypes.SEARCHDATA,
    data: fromJS(data),
    // 总页数：数据十条为一页
    totalPage: Math.ceil(data.length / 10)
})
export const getList = ()=> {
    return  async(dispatch) =>{
    const {data:{code, data}} = await axios.get('/api/getSearchList.json');
    if(code === 0) dispatch(seardata(data))  
}
}
export const mouseEnter = () =>({
    type: actionTypes.SETMOUSEENTER,
})
export const mouseLeave = () =>({
    type: actionTypes.SETMOUSELEAVE,
})
export const changePage = (page) =>({
    type: actionTypes.CHANGEPAGE,
    page
})