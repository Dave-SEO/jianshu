import React, {Component} from 'react'
import {connect} from 'react-redux'
import ArticleUI from './components/article'
import Board from './components/board'
import Author from './components/author'
import {ArrowUpOutlined} from '@ant-design/icons';
import {
    HomeWrap,
    HomeLeft,
    HomeRight,  
    HomeListUL,
    DownLoad,
    DownLoadInfo,
    MoreLIst,
    BackTop
} from './style'
import {actionCreators} from './store'
import ReactBanner from '../home/components/banner'
class Home extends Component{
    render(){
        const {moreClick, page, isShowScrollTop} = this.props
        return (
            <HomeWrap>
                <HomeLeft>
                    <ReactBanner />
                    <HomeListUL>
                       <ArticleUI />
                       <MoreLIst onClick={()=> moreClick(page)}>加载更多</MoreLIst>
                    </HomeListUL>
                </HomeLeft>
                <HomeRight>
                    <Board />
                    <DownLoad >
                        <img src="./images/erweima.png" alt="" />
                        <DownLoadInfo> 
                           <div>
                                <p>下载简书手机App<i className="iconfont">＞ </i></p>
                           </div>
                           <p className="description">随时随地发现和创作内容</p>
                        </DownLoadInfo>
                    </DownLoad>
                    <Author />
                </HomeRight>
                {
                    isShowScrollTop ?  
                    <BackTop  onClick={this.handleScrollTop}>
                        <ArrowUpOutlined style={{fontSize: '20px'}}/>
                    </BackTop> : null
                }
                {/* <BackTop visibilityHeight={100} ></BackTop> */}
            </HomeWrap>
        )
    }
    componentDidMount(){
        this.props.getBanner()
        this.bindEvent()
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', ()=>{})
    }
    bindEvent(){
        window.addEventListener('scroll', this.props.changBackTop)
    }
    handleScrollTop(){
        window.scrollTo(0, 0)
    }
}
const mapStateToProps = (state)=>({
    page: state.home.get('articlePage'),
    isShowScrollTop: state.home.get('isShowScrollTop')
})
const mapDispathToProps = (dispatch)=>{
    return {
        getBanner(){
            dispatch(actionCreators.getBannerList())
        },
        moreClick(page){
            dispatch(actionCreators.getMore(page))
        },
        changBackTop(e){
            console.log(document.documentElement.scrollTop)
            if(document.documentElement.scrollTop > 100){
                dispatch(actionCreators.changBackTop(true))
            }else{
                dispatch(actionCreators.changBackTop(false))
            }
        }
    }
}
export default connect(mapStateToProps, mapDispathToProps)(Home)