import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import * as service from '../request/lecture';
import { Segment, Input, Button, Divider } from 'semantic-ui-react';
import style from './lecture.css';
import * as cookie from '../util/cookie';

export default class lecture extends Component {
    constructor(props) {
        super(props);
        this.state = {isLogin:cookie.getCookie('user'), type:''};
        let tmp = this;
        service.getType().then(function (res) {
            tmp.setState({ type: res.data });
        }).catch(function (error) {
            alert('error massage : '+error);
        });
    }
    componentDidMount(){
    }
    render() {
        return (
            <div className={style.wrapper}>
                { this.state.type=="강사" ?<div className={style.register}><div className={style.textWrapper}><Link to="/lectureReg">과외등록</Link></div></div>:null}
            </div>
        );
    }
}