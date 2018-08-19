import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import style from './header.css';
import * as service from '../request/logout';
import * as cookie from '../util/cookie';

export default class header extends Component {
    constructor(props) {
        super(props);
        this.state = {isLogin:cookie.getCookie('user')};
        this.handleLogout = this.handleLogout.bind(this);
        this.goMain = this.goMain.bind(this);
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
                <div className={style.header}>
                    <div className={style.logo} onClick={this.goMain}>
                    </div>
                    <div className={style.headerMenuBar}>
                        <div className={style.headerMenu} onClick={this.goLogin}> 
                            { this.state.isLogin ? <Link to="#" onClick={this.handleLogout}>로그아웃</Link> : <Link to="/login">로그인</Link> }
                        </div>
                        { this.state.isLogin ?null:<div className={style.headerMenu}><Link to="/signup">회원가입</Link></div>}
                        <div className={style.headerMenu}>아이디·비밀번호 찾기</div>
                        <div className={style.headerMenu}>마이페이지</div>
                    </div>
                </div>
            </div>
        );
    }
}