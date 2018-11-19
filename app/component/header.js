import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import style from './header.css';
import * as service from '../request/logout';
import * as userService from '../request/profile';
import * as cookie from '../util/cookie';

export default class header extends Component {
    constructor(props) {
        super(props);
        this.state = {isLogin:cookie.getCookie('user'), img:null};
        this.handleLogout = this.handleLogout.bind(this);
        this.goMain = this.goMain.bind(this);
        userService.getUser().then(function (res) {
            cursor.setState({img:res.data.img});
        });
    }
    handleLogout(event) {
        service.logout().then(function (res) {
            if(String(res.data)=="ok"){
                location.href="/";
            }
            else alert("로그아웃에 실패했습니다!");
        }).catch(function (error) {
            alert('error massage : '+error);
        });
        event.preventDefault();
    }
    goMain(){
        location.href="/";
    }
    render() {
        return (
            <div className={style.headerWrapper}>
                <div className = {style.sizeWrapper}>
                    <div className={style.menuList}>
                        <a className={style.logo} onClick={this.goMain}></a>
                        {/* <div className={style.menuItem}><a href="">수강안내</a></div> */}
                        <div className={style.menuItem}><Link to="/lecture">수강신청</Link></div>
                        <div className={style.menuItem}><Link to="/tutor">강사소개</Link></div>
                        <div className={style.menuItem}><Link to="/content">콘텐츠</Link></div>
                        <div className={style.menuItem}><Link to="/community">커뮤니티</Link></div>
                    </div>

                    <div className={style.subMenuList}>
                        { this.state.isLogin ? <img className={style.profile} src={this.state.img==null?require("../resources/img/profile.png"):this.state.img} /> : null}
                        <div className={style.menuItem}>
                            { this.state.isLogin ? <Link to="#" onClick={this.handleLogout}>로그아웃</Link> : <Link to="/login">로그인</Link> }
                        </div>
                        { this.state.isLogin ? null : <div className={style.menuItem}><Link to="/signup">회원가입</Link></div>}
                        <div className={style.menuItem}><Link to="/myLecture">내 강의실</Link></div>
                    </div>
                </div>
            </div>
        );
    }
}