import * as actionsTypes from './actionsTypes'
import axios from 'axios'
const logindispatch = ()=>({
  type: actionsTypes.LOGIN,
  action: true
})
export const login = (loginInfo)=> {
  return async (dispatch)=>{
   let {data:{code}} = await axios.get(`/api/login.json?user=${loginInfo.user}&pwd=${loginInfo.pwd}`)
   if(code === 0){
      console.log('loginInfo', code)
      dispatch(logindispatch())
   }
  }
}
const outLoginin = ()=>({
  type: actionsTypes.OUTLOGIN,
  data: false
})
export const outLogin = ()=> {
  return  (dispatch) => {
    dispatch(outLoginin())
  }
}