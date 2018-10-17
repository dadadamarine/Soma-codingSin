import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import * as service from '../request/lecture';
import { Segment, Input, Button, Divider } from 'semantic-ui-react';
import style from './lecture.css';
import * as cookie from '../util/cookie';

export default class myLecture extends Component {
    constructor(props) {
        super(props);
        this.state = {isLogin:cookie.getCookie('user'), list:[]};
        const curosr = this;
        service.myLectureList().then(function (res) {
            if(res.data!="none") curosr.setState({ list: res.data });
        }).catch(function (error) {
            alert('error massage : '+error);
        });
    }
    componentDidMount(){
    }
    render() {
        return (
            <div className={style.wrapper}>
                <div className={style.lectureWrapper}>
                    <div className={style.mylecture}></div>
                    <div className={style.lectureList}> 
                    {this.state.list!=[]?this.state.list.map((lecture, i) => {
                        let url = "/room#"+lecture._id;
                        return (<div style={{display:'flex'}}>
                            <div className={style.lectureBox} key={i} onClick={function(e){location.href=url}}>
                                <div className="lectureImage">
                                    <img src={lecture.img==null?require('../resources/img/logo.png'):lecture.img} className={style.lectureImage} />
                                </div>
                                <div className={style.lectureName}>{lecture.title}</div>
                                <div className={style.lectureInfo}>
                                    <span>{lecture.name}</span>/ <span>{lecture.schedule}</span><span>{lecture.price}</span>
                                </div>
                                </div>
                            {i==this.state.list.length-1?null:<div className={style.verticalBar}></div>}
                        </div>);
                    }):null}
                    </div>
                </div>
            </div>
        );
    }
}