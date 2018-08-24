import React, { Component } from 'react';
import * as service from '../request/lecture';
import { Segment, Input, Button, Divider, Dropdown } from 'semantic-ui-react';
import style from './lectureReg.css';

export default class lectureReg extends Component {
    constructor(props) {
        super(props);
        this.state = {title:'', description:'', schedule:'', price:''};
     
        this.inputTITLE = this.inputTITLE.bind(this);
        this.inputDESCRIPTION = this.inputDESCRIPTION.bind(this);
        this.inputSCHEDULE = this.inputSCHEDULE.bind(this);
        this.inputPRICE = this.inputPRICE.bind(this);
    }
    inputTITLE(event) {
        this.setState({ title: event.target.value });
    }
    inputDESCRIPTION(event) {
        this.setState({ description: event.target.value });
    }
    inputSCHEDULE(event) {
        this.setState({ schedule: event.target.value });
    }
    inputPRICE(event) {
        this.setState({ price: event.target.value });
    }
    handleSubmit(event) {
        const curosr =this;
        service.lectureRegister(this.state.title, this.state.description, this.state.schedule, this.state.price).then(function (res) {
            if(String(res.data)=="ok"){
                alert("과외등록에 성공하였습니다!");
                location.href="/lecture"
            }
            else alert("과외등록에 실패했습니다!");
        }).catch(function (error) {
            alert('error massage : '+error);
        });
        event.preventDefault();
    }
    render() {
        return (
            <div className={style.wrapper}>
                <div className={style.lectureBox}>
                    <Segment padded>
                        <Input type="text" placeholder='강의제목' value={this.state.title} onChange={this.inputTITLE} />
                        <br /><br />
                        <textarea className={style.despBox} placeholder='강의설명' value={this.state.description} onChange={this.inputDESCRIPTION} />
                        <br /><br />
                        <Input type="text" placeholder='강의시간' value={this.state.schedule} onChange={this.inputSCHEDULE} />
                        <br /><br />
                        <Input type="text" placeholder='가격' value={this.state.price} onChange={this.inputPRICE} />
                        <br /><br />
                        <Button primary fluid content='과외등록' onClick={this.handleSubmit} primary />
                    </Segment>
                </div>
            </div>
        );
    }
}