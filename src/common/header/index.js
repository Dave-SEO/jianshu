    import React, {Component} from 'react'
    import {CSSTransition} from 'react-transition-group'
    import {connect} from 'react-redux'
    import {actionCreators} from './store'
    import {actionCreators as loginActionCreators} from '../../pages/login/store'
    import { Link } from 'react-router-dom';
    import {
        HeaderWrapper,
        Logo,
        Nav,
        NavItem,
        NavSearch,
        NavSearchWrap,
        Addition,
        Button,
        SearchInfo,
        SearchItem,
        SearchTop
    } from './style'
    class Header extends Component {
        showSearch(){
            const {list,page, totalPage, foucsd, mouseIn, handlenMouseLeave,handlenMouseEnter, handlenToggle} = this.props
            const newList = list.toJS()
            const pageList = []
            if(newList.length > 0){
                //数据 15条 cei 15 / 10 = 2(totalpage)
                for (let i = (page - 1) * 10; i < page * 10; i++) {
                    if(newList[i]){
                        pageList.push(
                            <SearchItem key={newList[i]}>{newList[i]}</SearchItem>
                        )
                    }
                 }
            }
            if(foucsd || mouseIn){
                return (
                    <SearchInfo onMouseEnter={handlenMouseEnter} onMouseLeave={handlenMouseLeave}>
                            <SearchTop>
                                <span>热门搜索</span>
                                <i ref={(icon)=> {this.roteIcon = icon}} className='iconfont rote'>&#xe626;</i>
                                <button  onClick= {() => handlenToggle(page, totalPage, this.roteIcon)}>换一批</button>
                            </SearchTop>
                            <div>
                                {pageList}
                            </div>
                    </SearchInfo>
                )
            }else{
                return null
            }
           
        }
        render(){
            const {foucsd, list, searchFocus, searchBlur, loginStatus, outLogin} = this.props
            return (
                <HeaderWrapper>
                    <Logo></Logo>
                    <Nav>
                        <NavItem className='left active' >
                          <Link style={{color: '#ea6f5a'}} to={'/'}>
                            首页
                          </Link>
                        </NavItem>
                        <NavItem className='left'>下载app</NavItem>
                        {loginStatus ? <NavItem className='right' onClick={()=>outLogin()}>退出</NavItem> : <Link to='/login'><NavItem className='right'>登陆</NavItem></Link>}
                        <NavItem className='right'>
                          <span className="iconfont Aa">&#xe636;</span>
                        </NavItem>
                        <NavSearchWrap>
                            <CSSTransition 
                                in={foucsd}
                                timeout={200}
                                classNames='slide'
                            >
                                <NavSearch className={foucsd ? 'foucsd': ''} 
                                            onFocus={()=>{searchFocus(list)}}
                                            onBlur={searchBlur}
                                ></NavSearch>
                            </CSSTransition>
                          <i className={foucsd ? 'foucsds iconfont': 'iconfont'}>&#xe782;</i>
                          {this.showSearch()}
                        </NavSearchWrap>
                        <Addition>
                            <Button className='write'>
                             <i className='iconfont yumao'>&#xe600;</i>
                              写文章
                            </Button>
                            {!loginStatus ? <Button className='reg'>注册</Button> : ''}
                        </Addition>
                    </Nav>
                </HeaderWrapper>
            )
        }
    }
    const mapStateToProps = (state)=>{
        return {
            foucsd: state.header.get('foucsd'),
            list: state.header.get('list'),
            mouseIn: state.header.get('mouseIn'),
            page: state.header.get('page'),
            totalPage: state.header.get('totalPage'),
            loginStatus: state.loginStore.get('loginStatus')
        }
    }
    const mapDispathToProps = (dispatch)=>{
        return {
            searchFocus(list){
                list.size === 0 && dispatch(actionCreators.getList())
                dispatch(actionCreators.searchFocus())
            },
            searchBlur(){
                dispatch(actionCreators.searchBlur())
            },
            handlenMouseEnter(){
                dispatch(actionCreators.mouseEnter())
            },
            handlenMouseLeave(){
                dispatch(actionCreators.mouseLeave())
            },
            handlenToggle(page, totalPage, roteIcon){
                let orginTransform = roteIcon.style.transform.replace(/[^0-9]/ig, '')
                if(orginTransform){
                    orginTransform = parseInt(orginTransform, 10)
                }else{
                    orginTransform = 0
                }
                roteIcon.style.transform = `rotate(${orginTransform + 360}deg)`
                if(page < totalPage){
                    dispatch(actionCreators.changePage(page +1))
                }else{
                    dispatch(actionCreators.changePage(1))
                }
            },
            outLogin(){
                dispatch(loginActionCreators.outLogin())
            }
        }
    }
    export default connect(mapStateToProps, mapDispathToProps)(Header)