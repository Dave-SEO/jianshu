import React, {Fragment} from 'react'
import { connect } from 'react-redux'
import {
    HomeListLI,
    HomeTitle,
    Content
} from '../style'
function ArticleUI() {
    return (
        <Fragment>
           <HomeListLI>
                <div>
                    <HomeTitle>快节奏，慢生活!</HomeTitle>
                    <Content>
                        看到5年前一个周末的文字，突然发现现在字怎么写的还不如从前! 快节奏慢， 今天在家体验了一次慢生活。
                        以往每到周末都会和朋友约上去登山去远足去锻...
                    </Content>
                    <div>
                        <span className="jsd-meta">
                            <i className="iconfont">&#xe619;</i>
                            2.4
                        </span>
                        <span className="nickname">一点思考</span>
                        <span className="message">
                            <i className="iconfont">&#xe667;</i>
                            9
                        </span>
                        <span className="xin">
                            <i className="iconfont">&#xe755;</i>
                        36
                        </span>
                    </div>
                </div>
                <div>
                    <img src='./images/1.jpg' alt=""/>
                </div>
            </HomeListLI>

            <HomeListLI>
                <div>
                    <HomeTitle>真正的孤独（经典好文）</HomeTitle>
                    <Content>
                        文：贾平凹 好多人在说自己孤独，说自己孤独的人其实并不孤独。
                        孤独不是受到了冷落和遗弃，而是无知己，不被理解。真正的孤独者不言孤独，偶尔做些长啸，...
                    </Content>
                    <div>
                        <span className="jsd-meta">
                            <i className="iconfont">&#xe619;</i>
                            60.4
                        </span>
                        <span className="nickname">静盼花来开</span>
                        <span className="message">
                            <i className="iconfont">&#xe667;</i>
                            79
                        </span>
                        <span className="xin">
                            <i className="iconfont">&#xe755;</i>
                         784
                        </span>
                    </div>
                </div>
                <div>
                    <img src='./images/2.jpeg'  alt=""/>
                </div>
            </HomeListLI>
        </Fragment>
        
    )
}
export default connect(null, null)(ArticleUI)