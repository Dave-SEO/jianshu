import styled from 'styled-components'
import LogPic from '../../statics/logo.png'
export const HeaderWrapper = styled.div`
    position:relative;
    height: 58px;
    border-bottom: 1px solid #f0f0f0;
`
export const Logo = styled.a.attrs({
    href: '/'
})`
    position:absolute;
    top: 15px;
    left: 19px;
    width: 60px;
    height:30px;
    background: url(${LogPic});
    background-repeat: no-repeat;
    background-size: 100% 100%;
`
export const Nav = styled.div`
    width: 80%;
    height: 58px;
    padding-right:106px;
    box-sizing: border-box;
    margin: 0 auto;
`
export const  NavItem = styled.div`
    line-height:56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
    &.left{
        float:left;
    }
    &.right{
        float: right;
        color: #969696;
    }
    &.active{
        color: #ea6f5a;
    }
    .Aa{
        font-size: 19px;
    }
`
export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
width: 160px;
height: 38px;
margin-top: 9px;
border: 1px solid #f0f0f0;
outline: none;
border-radius: 19px;
font-size: 14px;
padding:0 20px;
box-sizing: border-box;
background: #eee;
&::placeholder{
    color: #999;
}
&.foucsd{
    width: 200px;
}
&.slide-enter{
    transition: all .2s ease-out;
}
&.slide-enter-active{
    width: 200px;
}
&.slide-exit{
    transition: all .2s ease-out;
}
&.slide-exit-active{
    width: 160px;
}
`
export const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;
    .yumao{
        font-size: 19px;
    }
`
export const Button = styled.div`
    float: right;
    line-height: 38px;
    margin-top: 9px;
    border-radius: 19px;
    border:1px solid #ea6f5a;
    margin-right: 15px;
    padding: 0 20px;
    &.write{
        color: #fff;
        background: #ea6f5a;
        cursor: pointer;
    }
    &.reg{
        color: #ea6f5a;
        cursor: pointer;
    }
`
export const NavSearchWrap = styled.div`
    float:left;
    position:relative;
    z-index:2;
    .iconfont{
        position:absolute;
        right: 6px;
        top: 13px;
        width: 30px;
        height:30px;
        line-height: 30px;
        text-align:center;
        border-radius: 15px;
        font-size: 16px;
        color: #969696;
        cursor: pointer;
    }
    .foucsds{
        background: #969696;
        color:#fff;
    }
`
export const SearchInfo = styled.div`
    width: 250px;
    padding: 6px;
    position: absolute;
    margin-top: 9px;
    left: 0px;
    background-color: #fff;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    border-radius: 4px;
`
export const SearchItem = styled.a.attrs({
})`
    width: 50px;
    height: 20px;
    line-height: 20px;
    color: #333;
    font-size:12px;
    border-radius: 2px;
    padding: 0 5px;
    box-sizing: border-box;
    cursor: pointer;
    border: 1px solid #f0f0f0;
    margin-right:3px;
    &:hover{
        background-color: #f0f0f0;
    }
    &:before{
        content: "";
        left: 27px;
        width: 10px;
        height: 10px;
        transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
        top: -5px;
        z-index: -1;
        position: absolute;
        background-color: #fff;
        box-shadow: 0 0 8px rgba(0,0,0,.2);
        box-sizing: border-box;
    }
`
export const SearchTop = styled.div`
    width: 100%;
    font-size: 12px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    position: relative;
    .rote{
        position: absolute;
        top: 0px;
        right: 51px;
        font-size: 12px;
        width: 20px;
        height: 20px;
        line-height: 20px;
        transition: all .2s ease-in;
        transform: rotate(0deg);
        transform-origin: center center;
    }
    button{
        color:#333;
        border: none;
        background: #Fff;
        cursor: pointer;
    }
`