import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import * as service from '../request/lecture';
import { Segment, Input, Button, Divider } from 'semantic-ui-react';
import style from './lectureDetail.css';
import * as cookie from '../util/cookie';
import* as userService from '../request/tutor';

export default class lectureDtail extends Component {
    constructor(props) {
        super(props);
        this.state = {isLogin:cookie.getCookie('user'),id:location.href.split("lecture/")[1].toString(), type:'', lecture:[], teacher:{oneline:'',project:'',history:'',name:'',img:'',banner:''}};
        const cursor = this;
        service.getType().then(function (res) {
            cursor.setState({ type: res.data });
        }).catch(function (error) {
            alert('error massage : '+error);
        });
        service.lecture(this.state.id).then(function (res) {
            cursor.setState({ lecture: res.data[0] });
            userService.getTeacher(res.data[0].id).then(function (res2){
                cursor.setState({teacher:res2.data});
                if(res2.data.img!=null) document.getElementById("img").setAttribute("src", res2.data.img);
            }).catch(function (error) {
                alert('error massage : '+error);
            });
        }).catch(function (error) {
            alert('error massage : '+error);
        });
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount(){
    }
    handleSubmit(event) {
        const cursor =this;
        service.lectureRequest(this.state.id).then(function (res) {
            if(String(res.data)=="ok"){
                alert("과외신청에 성공했습니다!");
                cursor.props.history.push('/');
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
                    <div className={style.title}>강사소개</div>
                    <div className={style.profile}>
                        <img id="img" src={require('../resources/img/profile.png')} />
                        <div className={style.profileTextWrapper}>
                            <div className={style.profileOneline}>“{this.state.teacher.oneline}”</div>
                            <div className={style.profileText}>{this.state.teacher.name}</div>
                            <div className={style.profileText}>프로젝트</div>
                            <div className={style.profileDesp}>{String(this.state.teacher.project).split('\n').map( line => {return (<span>{line}<br/></span>)})}</div>
                            <div className={style.profileText}>경력</div>
                            <div className={style.profileDesp}>{String(this.state.teacher.history).split('\n').map( line => {return (<span>{line}<br/></span>)})}</div>
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