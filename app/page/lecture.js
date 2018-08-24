import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import * as service from '../request/lecture';
import { Segment, Input, Button, Divider } from 'semantic-ui-react';
import style from './lecture.css';
import * as cookie from '../util/cookie';

export default class lecture extends Component {
    constructor(props) {
        super(props);
        this.state = {isLogin:cookie.getCookie('user'), type:'', list:[]};
        let tmp = this;
        service.getType().then(function (res) {
            tmp.setState({ type: res.data });
        }).catch(function (error) {
            alert('error massage : '+error);
        });
    }
    componentDidMount(){
        const curosr =this;
        service.lectureList().then(function (res) {
            curosr.setState({list:res.data});
            console.log(res.data);
        }).catch(function (error) {
            alert('error massage : '+error);
        });
    }
    render() {
        return (
            <div className={style.wrapper}>
                <div className={style.lectureWrapper}>
                {this.state.list.map((lecture, i) => {
                        return (<div className={style.lectureBox} key={i}>
                                    <img src="../resources/img/main.png"/>
                                    <div className={style.lectureTitle}>{lecture.title}</div>
                                    <div className={style.lectureName}>{lecture.name}</div>
                                    <div className={style.lectureSchedule}>{lecture.schedule}</div>
                                    <div className={style.lecturePrice}>{lecture.price}</div>
                                 </div>);
                })}
                </div>
                { this.state.type=="강사" ?<div className={style.register}><div className={style.textWrapper}><Link to="/lectureReg">과외등록</Link></div></div>:null}
            </div>
        );
    }
}