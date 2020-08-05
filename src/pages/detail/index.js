import React, {Component} from 'react'
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux'
import {actionCreators} from './store'
import {
    DetailWrap,
    Header,
    ContentWrap,
    ImgWrap,
    ArticleWrap
} from './style'
class Detail extends Component{
    render(){
        const { detailList } = this.props
        console.log('detailList', detailList)
        if(this.props.match.params.id - 1 >= 0){
         let item = detailList[this.props.match.params.id - 1]
         console.log('item', item)
            return (
                <DetailWrap>
                    <Header>{item? item.title : ''}</Header>
                    <ContentWrap>
                        <ImgWrap url={item? item.img : ''}/>
                        <ArticleWrap>
                            {item? item.article : ''}
                        </ArticleWrap>
                    </ContentWrap>
                </DetailWrap>
            )
        }
    }
    componentDidMount(){
        this.props.getDetail(this.props.match.params.id)
    }
}
const mapStateToProps = state =>({
    detailList: state.details.get('detailList')
})
const mapDispathToProps = dispatch =>({
    getDetail(id){
       dispatch(actionCreators.getDetailList(id))
    }
})
export default connect(mapStateToProps, mapDispathToProps)(withRouter(Detail))