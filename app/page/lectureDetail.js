import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import * as service from '../request/lecture';
import { Segment, Input, Button, Divider } from 'semantic-ui-react';
import style from './lectureDetail.css';
import * as cookie from '../util/cookie';

export default class lectureDtail extends Component {
    constructor(props) {
        super(props);
        this.state = {isLogin:cookie.getCookie('user'),id:location.href.split("lecture/")[1].toString(), type:'', lecture:[]};
        const curosr = this;
        service.getType().then(function (res) {
            curosr.setState({ type: res.data });
        }).catch(function (error) {
            alert('error massage : '+error);
        });
        service.lecture(this.state.id).then(function (res) {
            curosr.setState({ lecture: res.data[0] });
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
                    <div className={style.title}>강사</div>
                    <div className={style.profile}>
                        <img src={require('../resources/img/profile.png')} />
                        <div className={style.profileTextWrapper}>
                            <div className={style.profileText}>{this.state.lecture.name}</div>
                            <div className={style.profileText}>{this.state.lecture.email}</div>
                            <div className={style.profileText}>약력 및 코멘트 작성</div>
                        </div>
                    </div>
                    <br/><br/><br/><br/>
                    <div className={style.title}>{this.state.lecture.title}</div>
                    <div className={style.lectureText}>{String(this.state.lecture.description).split('\n').map( line => {return (<span>{line}<br/></span>)})}</div>
                    <br/><br/>
                    <div className={style.title}>강의시간</div>
                    <div className={style.lectureText}>{this.state.lecture.schedule}</div>
                    <br/><br/>
                    <div className={style.title}>가격</div>
                    <div className={style.lectureText}>{this.state.lecture.price}</div>
                    <br/><br/>
                    { this.state.type=="학생" ?<Button secondary fluid content='과외신청' onClick={this.handleSubmit}/>:null}
                </div>
            </div>
        );
    }
}