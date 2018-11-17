import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import * as service from '../request/login';
import { Segment, Input, Button, Divider } from 'semantic-ui-react';
import style from './login.css';
import * as cookie from '../util/cookie';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

export default class login extends Component {
    constructor(props) {
        super(props);
        this.state = {id:'', pw:'', isLogin:cookie.getCookie('user'), status:cookie.getCookie('status')};
        this.inputID = this.inputID.bind(this);
        this.inputPW = this.inputPW.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.Signup = this.Signup.bind(this);
    }
    componentDidMount(){
        if(this.state.status=="active_ok"){
            cookie.setCookie("status","null");
            alert("사용자 인증이 완료되었습니다.");
        } else if(this.state.status=="active_already"){
            cookie.setCookie("status","null");
            alert("이미 인증이 완료된 사용자입니다.");
        } else if(this.state.status=="active_none"){
            cookie.setCookie("status","null");
            alert("잘못된 인증 코드입니다.");
        }
    }
    inputID(event) {
        this.setState({ id: event.target.value });
    }
    inputPW(event) {
        this.setState({ pw: event.target.value });
    }
    responseFacebook = (response) => {
        console.log(response);
    }
    responseGoogle = (response) => {
        console.log(response) // eslint-disable-line
    }

    handleSubmit(event) {
        const cursor =this;
        service.login(this.state.id, this.state.pw).then(function (res) {
            if(String(res.data)=="ok"){
                location.href="/";
            }
            else if(String(res.data)=="active") alert("메일에서 계정 활성화 링크를 눌러주세요!");
            else alert("계정 정보가 잘못되었습니다.")
        }).catch(function (error) {
            alert('error massage : '+error);
        });
        event.preventDefault();
    }
    Signup(event) {
        location.href="/signup";
    }
    render() {
        return (
            <div className={style.wrapper}>
                {
                    this.state.isLogin && <Redirect to="/"/>
                }
                <div className={style.banner}>
                    <div className={style.banner__description}>
                        <p>
                        코딩의 신은 온라인 코딩 과외 플랫폼입니다.
                        </p>
                    </div>
                </div>
                <div className={style.login}>
                    <div className={style.login__wrapper}>
                        <div className={style.login__wrapper__section}>
                            <div className={style.logo}></div>
                            <div className={style["login-box"]}>
                                <div className={style["input-section"]}>
                                    <div className={[style["input-section__column"], style["input-section__column--left"]].join(' ')}>
                                        <input className={style["input-text"]} type="text" placeholder='아이디' value={this.state.id} onChange={this.inputID} />
                                        <br />
                                        <input className={style["input-text"]} type="password" placeholder='비밀번호' value={this.state.pw} onChange={this.inputPW} />
                                    </div>
                                    <div className={[style["input-section__column"], style["input-section__column--right"]].join(' ')}>
                                        <button className={style["btn--login"]} onClick={this.handleSubmit} > 로그인 </button>
                                    </div>
                                </div>
                                <div className={style["button-section"]}>   
                                    <button className={style.btn} onClick={this.Signup}> 회원가입</button>
                                    <button className={style.btn} onClick={this.Signup}> 비밀번호 찾기</button>
                                </div>
                                    <FacebookLogin
                                        appId="721592368196574"
                                        autoLoad={false}
                                        fields="name,email,picture"
                                        callback={this.responseFacebook}
                                        textButton="페이스북 로그인"
                                        cssClass={style.facebook}
                                        icon="fa-facebook"/>
                                    <GoogleLogin
                                        clientId="408201158856-r93sh9kple35csir035n470ut71ujcjp.apps.googleusercontent.com"
                                        buttonText="구글 로그인"
                                        onSuccess={this.responseGoogle}
                                        onFailure={this.responseGoogle}
                                        className={style.google}/>
                            </div>
                        </div>
            
                    </div>
                </div>
                
            </div>
        );
    }
}