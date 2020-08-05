import React,{Component} from 'react'
import {connect} from 'react-redux'
import {
    AuthorWrap,
    AuthorTop,
    AuthorBottom,
    AuthorItem
} from '../style'
import { actionCreators } from '../store'
class Author extends Component {
    getAuthor(){
       const {author, authorPage, authorPageTotal} = this.props
       const authorList = author.toJS()
       const authorUI = []
      if(authorList && authorList.length > 0){
          for (let i = (authorPage - 1) * 4; i < authorPage *4; i++){
            authorUI.push(
                <AuthorItem  key={authorList[i].id}>
                    <a className="avatar" href="#"  className="avatar">
                        <img src= {authorList[i].avatar} alt="" />
                    </a>
                    <a className="follow" state="0" href="#"><i className="iconfont ic-follow"></i>关注</a>
                    <a href="#"  className="name">
                        {authorList[i].author}
                    </a>
                    <p>{authorList[i].content}</p>
                </AuthorItem>
            )
          }
          return authorUI
      }
    }
    render(){
        const {zhuanClick, authorPage, authorPageTotal} = this.props
        return (
            <AuthorWrap>
                <AuthorTop>
                    <span>推荐作者</span>
                    <button className="button" onClick={()=>zhuanClick(this.zhuan, authorPage, authorPageTotal)}><i className="iconfont rote" ref={(icon)=> this.zhuan = icon}>&#xe626;</i> 换一批</button>
                </AuthorTop>
                <AuthorBottom>
                    {this.getAuthor()}
                </AuthorBottom>
            </AuthorWrap>
        )
    }
    
}
const mapState = state =>({
    author: state.home.get('author'),
    authorPage: state.home.get('authorPage'),
    authorPageTotal: state.home.get('authorPageTotal')
})
const mapDispath = dispatch => ({
    zhuanClick(el, authorPage, authorPageTotal){
        let rotate = el.style.transform.replace(/[^0-9]/ig, '')
        if(rotate){
            rotate = parseInt(rotate, 10)
        }else{
            rotate = 0
        }
        el.style.transform = `rotate(${rotate + 360}deg)`
        console.log('authorPage', authorPage)
       if(authorPage >= authorPageTotal){
        dispatch(actionCreators.setAuthorPage(1))
       }else{
        dispatch(actionCreators.setAuthorPage(authorPage+1))
       }
    }
})
export default connect(mapState, mapDispath)(Author)