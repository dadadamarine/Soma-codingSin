import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import * as service from '../request/profile';
import { Dropdown, Input, Button, Divider } from 'semantic-ui-react';
import style from './profileTeacher.css';

export default class profileTeacher extends Component {
    constructor(props) {
        super(props);
        this.state = {oneline:'', project:'', history:'', stack:'', selectedFile:null};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.readURL = this.readURL.bind(this);
        this.inputONELINE = this.inputONELINE.bind(this);
        this.inputSTACK = this.inputSTACK.bind(this);
        this.inputPROJECT = this.inputPROJECT.bind(this);
        this.inputHISTORY = this.inputHISTORY.bind(this);
        let cursor =this;
        service.getUser().then(function (res) {
            cursor.setState({oneline:res.data.oneline, project:res.data.project, history:res.data.history, stack:res.data.stack});
            if(res.data.banner!=null) document.querySelector("."+lectureReginfoImg).setAttribute("src", res.data.banner);
        });
    }
    handleSubmit(event) {
        service.editProfileTeacher(this.state.selectedFile, this.state.oneline, this.state.project, this.state.history, this.state.stack).then(function (res) {
            if(String(res.data)=="ok"){
                alert("강사소개 변경에 성공하였습니다.!");
                location.href="/profileTeacher"
            }
            else alert("강사소개 변경에 실패했습니다!");
        }).catch(function (error) {
            alert('error massage : '+error);
        });
        event.preventDefault();
    }

    inputONELINE(event) {
        this.setState({ oneline: event.target.value });
    }
    inputSTACK(event) {
        this.setState({ stack: event.target.value });
    }
    inputPROJECT(event){
        this.setState({ project: event.target.value });
    }
    inputHISTORY(event){
        this.setState({ history: event.target.value });
    }

    readURL(input) {
        if (input.target.files && input.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#image_section').attr('src', e.target.result);
            }
            reader.readAsDataURL(input.target.files[0]);
            this.setState({selectedFile: input.target.files[0]})
        }
    }
    render() {

        return (
            <div className={style.wrapper}>
                <div className={style.lectureBox}>
                <div className={style.lectureLeft}>
                    <div className={style.lectureRegTitle}><Link to="/profile">○ 나의정보</Link></div>
                    <div className={style.lectureRegTitle}><Link to="/profileTeacher">○ 강사소개</Link></div>
                </div>
                <div className={style.lectureRight}>
                <div className={style["signup-context-section"]}>
                <div className={style.teacherTitle}>배너 이미지</div>
                    <div className={style.lectureReginfoImgWrapper}>
                    <img className={style.lectureReginfoImg} id="image_section" />
                    </div>
                    <form className={style.lectureReginfoImgSelect}><input type="file" name="imgFile" id="myFile" onChange={this.readURL} src={this.state.img==null?require("../resources/img/profile.png"):this.state.img}/></form>
                    <div className={style["signup-context-section__wrapper"]}>
                        <div className={style["signup-context-section__wrapper__section"]}>
                            <div className={style["input-box"]}>
                                <p className={style["input-box__title"]}>한줄소개</p>
                                <input type="text" className={style["input-box__input"]}  placeholder='한줄로 자신을 소개해주세요!'  value={this.state.oneline} onChange={this.inputONELINE} />
                            </div>

                            <div className={style["input-box"]}>
                                <p className={style["input-box__title"]}>기술스택</p>
                                <input className={style["input-box__input"]} type="text" placeholder='자신있는 기술을 알려주세요!' value={this.state.stack} onChange={this.inputSTACK} />
                            </div>
                        </div>
                        <div className={style["signup-context-section__wrapper__section"]}>
                            <div className={style["input-box_area"]}>
                                <textarea className={style["input-box__input_area"]} type="text" placeholder='프로젝트 이력을 알려주세요!' value={this.state.project} onChange={this.inputPROJECT} />
                            </div>
                            <div className={style["input-box_area"]}>
                                <textarea className={style["input-box__input_area"]} type="text" placeholder='경력 사항을 알려주세요!' value={this.state.history} onChange={this.inputHISTORY} />
                            </div>
                        </div>
                    </div>
                </div>
                        
                    <div className={style.submit}>
                    <Button primary fluid content='정보수정' onClick={this.handleSubmit} primary />
                    </div>
                </div>
            </div>
        </div>
        );
    }
}