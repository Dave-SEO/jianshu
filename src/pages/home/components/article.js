import React, {Fragment, Component} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import {
    HomeListLI,
    HomeTitle,
    Content
} from '../style'

class ArticleUI extends Component {
    getArticle(){
     const {articleList} =  this.props
     const articleListData = articleList.toJS() 
     const articelArrui = []
    if(articleListData){
        articleListData.map((item, index) => {
            articelArrui.push(
                <Link key={index} to={'/detail/' + item.id}>
                     <HomeListLI >
                        <div>
                            <HomeTitle>{item.title}</HomeTitle>
                            <Content>
                            {item.content}
                            </Content>
                            <div>
                                <span className="jsd-meta">
                                    <i className="iconfont">&#xe619;</i>
                                    {item.top}
                                </span>
                                <span className="nickname">{item.author}</span>
                                <span className="message">
                                    <i className="iconfont">&#xe667;</i>
                                    {item.message}
                                </span>
                                <span className="xin">
                                    <i className="iconfont">&#xe755;</i>
                                {item.collect}
                                </span>
                            </div>
                        </div>
                        <div>
                            <img src={item.imgUrl} alt=""/>
                        </div>
                    </HomeListLI>
                </Link>
            )
        })
    }
    return articelArrui
    }
   render(){
    return (
        <Fragment>
            {
                this.getArticle()
            }
        </Fragment>
    )
   }
}
const mapStateToProps = state =>({
    articleList: state.home.get('articleList')
})
const mapDispachToProps = dispatch =>({

})
export default connect(mapStateToProps, mapDispachToProps)(ArticleUI)