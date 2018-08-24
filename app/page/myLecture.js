import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import * as service from '../request/lecture';
import { Segment, Input, Button, Divider } from 'semantic-ui-react';
import style from './lecture';
import * as cookie from '../util/cookie';

export default class myLecture extends Component {
    constructor(props) {
        super(props);
        this.state = {isLogin:cookie.getCookie('user'), list:[]};
        const curosr = this;
        service.myLectureList().then(function (res) {
            curosr.setState({ list: res.data });
        }).catch(function (error) {
            alert('error massage : '+error);
        });
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount(){
    }
    handleSubmit(event) {
        const curosr =this;
        service.lectureRequest(this.state.id).then(function (res) {
            if(String(res.data)=="ok"){
                alert("과외신청에 성공했습니다!");
                curosr.props.history.push('/');
            }
            else alert("과외신청에 실패했습니다!");
        }).catch(function (error) {
            alert('error massage : '+error);
        });
        event.preventDefault();
    }
    render() {
        return (
            <div className={style.wrapper}>
                <div className={style.lectureWrapper}>
                {this.state.list.map((lecture, i) => {
                    let url = "/room#"+lecture._id;
                        return (<Link to={url}><div className={style.lectureBox} key={i}>
                                    <img src="../resources/img/main.png"/>
                                    <div className={style.lectureTitle}>{lecture.title}</div>
                                    <div className={style.lectureName}>{lecture.name}</div>
                                    <div className={style.lectureSchedule}>{lecture.schedule}</div>
                                    <div className={style.lecturePrice}>{lecture.price}</div>
                                 </div></Link>);
                })}
                </div>
            </div>
        );
    }
}