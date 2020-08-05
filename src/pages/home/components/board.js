import React,{Component} from 'react'
import {connect} from 'react-redux'
import {
    BoardWrap,
    BoarList
} from '../style'
class Board extends Component{
    getBoard(){
        const {boarList} = this.props
        const board = boarList.toJS()
        const boardUI = []
        if(board){
            board.map(item =>{
                boardUI.push(
                    <BoarList imgUrl={item.imgUrl} key={item.id}></BoarList>
                )
            })
        }
        return boardUI
    }
    render(){
        return (
            <BoardWrap>
                {this.getBoard()}
            </BoardWrap>
        )
    }
}
const mapState = state =>({
    boarList: state.home.get('board')
})
const mapDispatch = dispatch =>({
})
export default connect(mapState, mapDispatch)(Board)