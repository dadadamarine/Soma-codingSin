import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as service from '../request/signup';
import { Segment, Input, Button, Divider, Dropdown } from 'semantic-ui-react';
import style from './signup.css';

export default class signup extends Component {
    constructor(props) {
        super(props);
        this.state = {id:'', pw:'', name:'', email:'', phone:'', type:'',typeOptions:[{ key: 'S', value: '학생', text: '학생' },{ key: 'T', value: '강사', text: '강사' }]};
     
        this.inputID = this.inputID.bind(this);
        this.inputPW = this.inputPW.bind(this);
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
    }
    render() {
        return (
            <div className={style.wrapper}>
                <div className={style.singupBox}>
                    <Segment padded>
                        <Input type="text" placeholder='아이디' value={this.state.id} onChange={this.inputID} />
                        <br /><br />
                        <Input type="password" placeholder='비밀번호' value={this.state.pw} onChange={this.inputPW} />
                        <br /><br />
                        <Input type="text" placeholder='이름' value={this.state.name} onChange={this.inputName} />
                        <br /><br />
                        <Input type="text" placeholder='이메일' value={this.state.email} onChange={this.inputEmail} />
                        <br /><br />
                        <Input type="text" placeholder='전화번호' value={this.state.phone} onChange={this.inputPhone} />
                        <br /><br />
                        <Dropdown placeholder='타입' search selection options={this.state.typeOptions} onChange={this.inputType} />
                        <br /><br />
                        <Button primary fluid content='회원가입' onClick={this.handleSubmit} primary />
                    </Segment>
                </div>
            </div>
        );
    }
}