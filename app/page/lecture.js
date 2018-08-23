import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import * as service from '../request/lecture';
import { Segment, Input, Button, Divider } from 'semantic-ui-react';
import style from './lecture.css';
import * as cookie from '../util/cookie';

export default class lecture extends Component {
    constructor(props) {
        super(props);
        this.state = {isLogin:cookie.getCookie('user')};

        service.type().then(function (res) {
            console.log(res);
        }).catch(function (error) {
            alert('error massage : '+error);
        });
    }
    componentDidMount(){
    }
    render() {
        return (
            <div className={style.wrapper}>
            </div>
        );
    }
}