    import React, {Component} from 'react'
    import {CSSTransition} from 'react-transition-group'
    import {connect} from 'react-redux'
    import {
        HeaderWrapper,
        Logo,
        Nav,
        NavItem,
        NavSearch,
        NavSearchWrap,
        Addition,
        Button
    } from './style'
    class Header extends Component {
        render(){
            return (
                <HeaderWrapper>
                    <Logo></Logo>
                    <Nav>
                        <NavItem className='left active'>首页</NavItem>
                        <NavItem className='left'>下载app</NavItem>
                        <NavItem className='right'>登陆</NavItem>
                        <NavItem className='right'>
                          <span className="iconfont Aa">&#xe636;</span>
                        </NavItem>
                        <NavSearchWrap>
                            <CSSTransition 
                                in={this.props.foucsd}
                                timeout={200}
                                classNames='slide'
                            >
                                <NavSearch className={this.props.foucsd ? 'foucsd': ''} 
                                            onFocus={this.props.searchFocus}
                                            onBlur={this.props.searchBlur}
                                ></NavSearch>
                            </CSSTransition>
                          <i className={this.props.foucsd ? 'foucsds iconfont': 'iconfont'}>&#xe782;</i>
                        </NavSearchWrap>
                        <Addition>
                            <Button className='write'>
                             <i className='iconfont yumao'>&#xe600;</i>
                              写文章
                            </Button>
                            <Button className='reg'>注册</Button>
                        </Addition>
                    </Nav>
                </HeaderWrapper>
            )
        }
    }
    const mapStateToProps = (state)=>{
        return {
            foucsd: state.foucsd
        }
    }
    const mapDispathToProps = (dispatch)=>{
        return {
            searchFocus(){
                const action = {
                    type: 'searchFocus',
                    data: true
                }
                dispatch(action)
            },
            searchBlur(){
                const action = {
                    type: 'searchBlur',
                    data: false
                }
                dispatch(action)
            }
        }
    }
    export default connect(mapStateToProps, mapDispathToProps)(Header)