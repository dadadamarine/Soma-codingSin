import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as service from '../request/login';
import { Segment, Input, Button, Divider } from 'semantic-ui-react';
import style from './login.css';
import * as cookie from '../util/cookie';

export default class login extends Component {
    constructor(props) {
        super(props);
        this.state = {id:'', pw:'', isLogin:cookie.getCookie('user')};
        this.inputID = this.inputID.bind(this);
        this.inputPW = this.inputPW.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.Signup = this.Signup.bind(this);
    }
    inputID(event) {
        this.setState({ id: event.target.value });
    }
    inputPW(event) {
        this.setState({ pw: event.target.value });
    }

    handleSubmit(event) {
        const cursor =this;
        service.login(this.state.id, this.state.pw).then(function (res) {
            if(String(res.data)=="ok"){
                cursor.props.history.push('/');
            }
            else if(String(res.data)=="active") alert("메일에서 계정 활성화 링크를 눌러주세요!");
            else alert("계정 정보가 잘못되었습니다.")
        }).catch(function (error) {
            alert('error massage : '+error);
        });
        event.preventDefault();
    }
    Signup(event) {
        this.props.history.push('/signup');
    }
    render() {
        return (
            <div className={style.wrapper}>
                {
                    this.state.isLogin && <Redirect to="/"/>
                }
                <div className={style.loginBox}>
                    <Segment padded>
                        <Input type="text" placeholder='아이디' value={this.state.id} onChange={this.inputID} />
                        <br />
                        <Input type="password" placeholder='비밀번호' value={this.state.pw} onChange={this.inputPW} />
                        <br /><br />
                        <Button primary fluid content='로그인' onClick={this.handleSubmit} />
                        <Divider horizontal>Or</Divider>
                        <Button secondary fluid content='회원가입' onClick={this.Signup}/>
                    </Segment>
                </div>
            </div>
        );
    }
}