import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import * as service from '../request/profile';
import { Dropdown, Input, Button, Divider } from 'semantic-ui-react';
import style from './profile.css';

export default class profile extends Component {
    constructor(props) {
        super(props);
        this.state = {id:'', pw:'', pw2:'', name:'', email:'', phone:'', type:'', selectedFile:null};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.readURL = this.readURL.bind(this);
        this.inputPW = this.inputPW.bind(this);
        this.inputPW2 = this.inputPW2.bind(this);
        this.inputPhone = this.inputPhone.bind(this);
        let cursor =this;
        service.getUser().then(function (res) {
            cursor.setState({id:res.data.id, name:res.data.name, email:res.data.email, phone:res.data.phone, type:res.data.type});
            if(res.data.img!=null) document.querySelector("."+lectureReginfoImg).setAttribute("src", res.data.img);
        });
    }
    handleSubmit(event) {
        if(this.state.pw==this.state.pw2){
            service.editProfile(this.state.selectedFile, this.state.pw, this.state.phone).then(function (res) {
                if(String(res.data)=="ok"){
                    alert("개인정보 변경에 성공하였습니다.!");
                    location.href="/profile"
                }
                else alert("개인정보 변경에 실패했습니다!");
            }).catch(function (error) {
                alert('error massage : '+error);
            });
        } else alert("비밀번호가 틀립니다!");
        event.preventDefault();
    }

    inputPW(event) {
        this.setState({ pw: event.target.value });
    }
    inputPW2(event) {
        this.setState({ pw2: event.target.value });
    }
    inputPhone(event){
        this.setState({ phone: event.target.value });
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
                    { this.state.type=="강사" ?<div className={style.lectureRegTitle}><Link to="/profileTeacher">○ 강사소개</Link></div>:null}
                </div>
                <div className={style.lectureRight}>
                <div className={style["signup-context-section"]}>
                <div className={style.lectureReginfoImgWrapper}>
                    <img className={style.lectureReginfoImg} id="image_section" src={require("../resources/img/profile.png")} />
                    </div>
                    <form className={style.lectureReginfoImgSelect}><input type="file" name="imgFile" id="myFile" onChange={this.readURL}/></form>
                    <div className={style["signup-context-section__wrapper"]}>
                        <div className={style["signup-context-section__wrapper__section"]}>
                            <div className={style["input-box"]}>
                                <p className={style["input-box__title"]}>아이디</p>
                                <input type="text" className={style["input-box__input"]} value={this.state.id} disabled />
                            </div>

                            <div className={style["input-box"]}>
                                <p className={style["input-box__title"]}>비밀번호</p>
                                <input className={style["input-box__input"]} type="password" placeholder='영문,숫자,특수문자 조합/6자이상,12자 이하' value={this.state.pw} onChange={this.inputPW} />
                            </div>

                            <div className={style["input-box"]}>
                                <p className={style["input-box__title"]}>비밀번호 확인</p>
                                <input className={style["input-box__input"]} type="password" placeholder='비밀번호확인' value={this.state.pw2} onChange={this.inputPW2} />
                            </div>

                        </div>



                        <div className={style["signup-context-section__wrapper__section"]}>
                             
                            <div className={style["input-box"]}>
                                <p className={style["input-box__title"]}>이름</p>
                                <input type="text" className={style["input-box__input"]} value={this.state.name} disabled />
                                <p className={style["input-box__title"]}>타입</p>
                                <input type="text" className={style["input-box__input"]} value={this.state.type} disabled />
                            </div>

                            <div className={style["input-box"]}>
                                <p className={style["input-box__title"]}>이메일</p>
                                <input type="text" className={style["input-box__input"]} value={this.state.email} disabled />
                            </div>
                            <div className={style["input-box"]}>
                                <p className={style["input-box__title"]}>전화번호</p>
                                <input type="text" className={style["input-box__input"]}  placeholder='전화번호' value={this.state.phone} onChange={this.inputPhone} />
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