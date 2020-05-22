import styled from 'styled-components'
export  const HomeWrap= styled.div`
    width: 960px;
    margin: 30px  auto 0;
    display: flex;
    justify-content: space-between;
`
export const HomeLeft = styled.div`
    width: 625px;
`
export const HomeRight= styled.div`
    width: 280px;
`
export const HomeBanner = styled.div`
    margin-bottom: 35px;
    cursor: pointer;
    .img{
        width: 100%;
        height: 270px;
        border-radius: 8px;
    }
`
export const HomeListUL = styled.ul`

`
export const HomeListLI = styled.li`
    padding: 15px 2px 20px 0;
    border-bottom: 1px solid #f0f0f0;
    word-wrap: break-word;
    display: flex;
    font-size: 12px;
    img{
        width: 150px;
        height: 100px;
    }
    .jsd-meta{
        font-size: 12px;
        margin-right: 10px;
        color: #ea6f5a
    }
    i{
        margin-right: 2px;
        vertical-align: text-bottom;
    }
    .nickname{
        margin-right: 10px;
        color: #b4b4b4;
        cursor: pointer;
    }
    .nickname:hover{
        color: #787878;
        transition:all .1s ease-in;
    }
    .message{
        color: #b4b4b4;
        margin-right: 5px;
    }
    .message:hover{
        color: #787878;
        transition:all .1s ease-in;
        cursor: pointer;
    }
    .xin{
        color: #b4b4b4;
    }
`
export const HomeTitle = styled.h3`
    color: #333;
    margin: -7px 0 4px;
    display: inherit;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5;
    &:hover{
        cursor: pointer;
        text-decoration: underline;
    }
`
export const Content = styled.p`
    margin: 0 0 8px;
    font-size: 13px;
    line-height: 24px;
    color: #999;
`
export const BoardWrap = styled.ul`
    width: 100%;

`
export const BoarList = styled.li`
    width: 100%;
    height: 50px;
    background: url(${(props)=> props.imgUrl});
    background-size: 100% 100%;
    cursor: pointer;
    margin-bottom: 6px;
`
export const DownLoad = styled.div`
    margin-bottom: 30px;
    padding: 10px 22px;
    width: 100%;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
    background-color: #fff;
    box-sizing: border-box;
    font-size: 13px;
    cursor: pointer;
    img {
        width: 60px;
        height: 60px;
        opacity: .85;
        vertical-align: middle;
    }
`
export const DownLoadInfo = styled.div`
    display: inline-block;
    vertical-align: middle;
    margin-left: 7px;
    .description{
        margin-top: 10px;
    }
`
export const AuthorWrap = styled.div`
    font-size: 14px;
    color: #969696;
    widht: 100%;
`
export const AuthorTop = styled.div`
    widht: 100%;
    display: flex;
    justify-content: space-between;
    .button{
        background: #fff;
        border:none;
        outline: none;
        cursor: pointer;
        color: #969696;
    }
`
export const AuthorBottom = styled.ul`
    width: 100%;
`
export const AuthorItem = styled.li`
    width: 100%;
    .avatar{
        float: left;
        width: 48px;
        height: 48px;
        margin-right: 10px;
        display: block;
        cursor: pointer;
    }
    img{
        width: 100%;
        height: 100%;
        border: 1px solid #ddd;
        border-radius: 50%;
    }
    .name{
        padding-top: 10px;
        margin-right: 60px;
        font-size: 14px;
        display: block;
        margin-bottom: 5px;
    }
    p{
        margin-top: 2px;
        font-size: 12px;
        color: #969696;
    }
    .follow{
        float: right;
        margin-top: 5px;
        padding: 0;
        font-size: 13px;
        color: #42c02e;
        border-color: #42c02e;
    }
`
//  <ui url="http:sxxxxx"><ui>  background:url(${(props)=> props.imgUrl)