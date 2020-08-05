import styled from 'styled-components'
export const LoginWarp = styled.div`
    display:flex;
    justify-content: center;
    align-items:center;
    position:absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color:#f1f1f1; 
    z-index: 3;
`
export const LoginBox = styled.div`
    width: 400px;
    margin: 60px auto 0;
    padding: 50px 50px 30px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
    vertical-align: middle;
    display: inline-block;
    text-align:center;
`
export const InputWrap = styled.div`
    position: relative;
`
export const Input = styled.input`
    outline: none;
    border: 1px solid #ccc;
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-indent: 2em;
    margin-bottom: 20px;
    border-radius: 3px;
    &::placeholder{
        color: #A0A0A0;
        
    }
`
export const Button = styled.button`
    background: #187cb7;
    margin-top: 20px;
    width: 100%;
    padding: 13px 18px;
    font-size: 18px;
    border: none;
    border-radius: 25px;
    color: #fff;
    cursor: pointer;
    outline: none;
    display: block;
    clear: both;
    box-sizing: border-box;
`
