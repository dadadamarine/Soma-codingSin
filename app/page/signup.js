import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as service from '../request/signup';
import { Segment, Input, Button, Divider, Dropdown } from 'semantic-ui-react';
import style from './signup.css';

export default class signup extends Component {
    constructor(props) {
        super(props);
        this.state = {id:'', pw:'', pw2:'', name:'', email:'', phone:'', type:'',typeOptions:[{ key: 'S', value: '학생', text: '학생' },{ key: 'T', value: '강사', text: '강사' }]};
     
        this.inputID = this.inputID.bind(this);
        this.inputPW = this.inputPW.bind(this);
        this.inputPW2 = this.inputPW2.bind(this);
        this.inputName = this.inputName.bind(this);
        this.inputEmail = this.inputEmail.bind(this);
        this.inputPhone = this.inputPhone.bind(this);
        this.inputType = this.inputType.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    inputID(event) {
        this.setState({ id: event.target.value });
    }
    inputPW(event) {
        this.setState({ pw: event.target.value });
    }
    inputPW2(event) {
        this.setState({ pw2: event.target.value });
    }
    inputName(event) {
        this.setState({ name: event.target.value });
    }
    inputEmail(event) {
        this.setState({ email: event.target.value });
    }
    inputPhone(event){
        this.setState({ phone: event.target.value });
    }
    inputType(event, { value }){
        this.setState({ type: value });
    }
    handleSubmit(event) {
        const curosr =this;
        if(this.state.pw==this.state.pw2){
            service.signup(this.state.id, this.state.pw, this.state.name, this.state.email, this.state.phone, this.state.type).then(function (res) {
                if(String(res.data)=="ok"){
                    alert("회원가입에 성공했습니다!");
                    curosr.props.history.push('/');
                }
                else alert("회원가입에 실패했습니다!");
            }).catch(function (error) {
                alert('error massage : '+error);
            });
            event.preventDefault();
        }else alert("비밀번호가 틀립니다!");
    }
    render() {
        return (
            <div className={style.wrapper}>
                <div className={style.banner}>
                    <div className={style.banner__description}>
                        <p> 코딩의 신은 온라인 코딩 과외 플랫폼입니다.</p>
                    </div>
                </div>
                <div className={style["title-section"]}>
                    <div className={style["title-wrapper"]}>
                        <p className={style["title-wrapper__title"]}>회원가입</p>
                        <div className={style["title-wrapper__level-section"]}>
                            
                            <div className={style["level__icon"]}>
                                <p className={[style["level__text"],style["level__text--fst"],style["level__text"]].join(" ")}>약관동의</p>
                            </div>
                            <div className={style["level__line"]}></div>
                            <div className={style["level__icon"]}>
                                <p className={[style["level__text"],style["level__text--sec"],style["level__text--selected"]].join(" ")}>정보입력</p>
                            </div>
                            <div className={style["level__line"]}></div>
                            <div className={style["level__icon"]}>
                                <p className={[style["level__text"],style["level__text--thi"]].join(" ")}>가입완료</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style["signup-context-section"]}>
                    
                    <div className={style["signup-context-section__wrapper"]}>
                        <div className={style["text-right"]}>필수입력항목</div>
                        <div className={style["signup-context-section__wrapper__section"]}>
                            <div className={style["input-box"]}>
                                <p className={style["input-box__title"]}>아이디</p>
                                <input className={style["input-box__input"]} type="text" placeholder='영문,숫자 조합 /6자 이상,12자 이하' value={this.state.id} onChange={this.inputID} />
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
                                <input type="text" className={style["input-box__input"]} value={this.state.name} onChange={this.inputName} />
                                <Dropdown placeholder='타입' search selection options={this.state.typeOptions} onChange={this.inputType} className={style.type}/>
                            </div>

                            <div className={style["input-box"]}>
                                <p className={style["input-box__title"]}>이메일</p>
                                <input type="text" className={style["input-box__input"]}  placeholder='이메일' value={this.state.email} onChange={this.inputEmail} />
                            </div>
                            <div className={style["input-box"]}>
                                <p className={style["input-box__title"]}>전화번호</p>
                                <input type="text" className={style["input-box__input"]}  placeholder='전화번호' value={this.state.phone} onChange={this.inputPhone} />
                            </div>
                        </div>
                        <div className={style["signup-context-section__wrapper__section"]}>
                                <button className={style["btn--gray--cover"]} onClick={this.handleSubmit}> 가입완료 </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}