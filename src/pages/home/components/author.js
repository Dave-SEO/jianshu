import React from 'react'
import {connect} from 'react-redux'
import {
    AuthorWrap,
    AuthorTop,
    AuthorBottom,
    AuthorItem
} from '../style'
function Author () {
    return (
        <AuthorWrap>
            <AuthorTop>
                <span>推荐作者</span>
                <button className="button"><i className="iconfont">&#xe626;</i> 换一批</button>
            </AuthorTop>
            <AuthorBottom>
                <AuthorItem>
                    <a className="avatar" href="/u/631131ed01af?utm_source=desktop&amp;utm_medium=index-users" target="_blank" className="avatar">
                        <img src="https://upload.jianshu.io/users/upload_avatars/2564926/88bfdbeeb083.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt="" />
                    </a>
                    <a className="follow" state="0" href="" target="_blank"><i className="iconfont ic-follow"></i>关注</a>
                    <a href="/u/631131ed01af?utm_source=desktop&amp;utm_medium=index-users" target="_blank" className="name">
                    王老师八卦美术史
                    </a>
                    <p>写了105.7k字 · 1.4k喜欢</p>
                </AuthorItem>
            </AuthorBottom>
        </AuthorWrap>
    )
}
export default connect(null, null)(Author)