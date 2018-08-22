import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import * as service from '../request/login';
import { Segment, Input, Button, Divider } from 'semantic-ui-react';
import style from './lecture.css';
import * as cookie from '../util/cookie';

export default class lecture extends Component {
    constructor(props) {
        super(props);
        this.state = {isLogin:cookie.getCookie('user')};
    }
    componentDidMount(){
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