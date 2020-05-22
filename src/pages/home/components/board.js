import React from 'react'
import {connect} from 'react-redux'
import {
    BoardWrap,
    BoarList
} from '../style'
function Board(){
    return (
        <BoardWrap>
            <BoarList imgUrl='/images/3.png'></BoarList>
        </BoardWrap>
    )
}
export default connect(null, null)(Board)