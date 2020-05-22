import React, {Component} from 'react'
import {connect} from 'react-redux'
import ArticleUI from './components/article'
import Board from './components/board'
import Author from './components/author'
import {
    HomeWrap,
    HomeLeft,
    HomeRight,  
    HomeListUL,
    DownLoad,
    DownLoadInfo
} from './style'
import {actionCreators} from './store'
import ReactBanner from '../home/components/banner'
class Home extends Component{
    render(){
        return (
            <HomeWrap>
                <HomeLeft>
                    <ReactBanner />
                    <HomeListUL>
                       <ArticleUI />
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
            </HomeWrap>
        )
    }
    componentDidMount(){
        this.props.getBanner()
    }
}
const mapStateToProps = (state)=>({
})
const mapDispathToProps = (dispatch)=>{
    return {
        getBanner(){
            dispatch(actionCreators.getBannerList())
        }
    }
}
export default connect(mapStateToProps, mapDispathToProps)(Home)