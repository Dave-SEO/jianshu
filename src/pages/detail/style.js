import styled from 'styled-components'
export const DetailWrap = styled.div`
    width: 730px;
    margin: 0 auto;
    padding: 24px;
    box-sizing: border-box;
`
export const Header = styled.p`
    font-size: 30px;
    font-weight: 700;
    word-break: break-word;
    color: #404040;
    margin-top: 20px;
`
export const ContentWrap = styled.div`
    font-size: 12px;
`
export const ImgWrap = styled.div`
    width: 640px;
    height: 427px;
    background:url(${(props)=>props.url});
    background-size: cover;
    margin: 30px 0 20px 0;
`
export const ArticleWrap = styled.p`
    width: 640px;
    line-height: 35px;
    font-size: 20px;
`