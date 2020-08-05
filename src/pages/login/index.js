import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {actionCreators} from './store'
import {
    LoginWarp,
    LoginBox,
    Input,
    Button,
    InputWrap
} from './style'
import {
    UserOutlined,
    LockOutlined
  } from '@ant-design/icons';
class Login extends Component{
    render(){
        const {submit, loginStatus} = this.props
        if(!loginStatus){
            return (
                <LoginWarp>
                    <LoginBox>
                        <InputWrap>
                            <UserOutlined  style={{position: "absolute",top: "12px",left: "15px",color:'#A0A0A0'}}/>
                            <Input type="text" placeholder='手机号' ref={(Input)=>{this.user = Input}}/>
                        </InputWrap>
                        <InputWrap>
                            <LockOutlined  style={{position: "absolute",top: "12px",left: "15px",color:'#A0A0A0'}}/>
                            <Input type="password" placeholder='密码' ref={(Input)=>{this.pwd = Input}}/>
                        </InputWrap>
                        <Button onClick={()=> submit(this.user,this.pwd)}>登录</Button>
                    </LoginBox>
                </LoginWarp>
            )
        } else {
            return <Redirect to='/' />
        }
       
    }
}
const mapState = state => ({
    loginStatus: state.loginStore.get('loginStatus')
})
const mapdispatch = dispatch => ({
    submit(user, pwd){
        dispatch(actionCreators.login({user: user.value, pwd: pwd.value}))
        console.log(user.value)
    }
})
export default connect(mapState, mapdispatch)(Login)