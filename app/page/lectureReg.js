import React, { Component } from 'react';
import * as service from '../request/lecture';
import { Segment, Input, Button, Divider } from 'semantic-ui-react';
import style from './lectureReg.css';
import Picker from '../util/picker';

export default class lectureReg extends Component {
    constructor(props) {
        super(props);
        this.state = {title:'', 
        description:'', 
        schedule:'', 
        price:'',    
        startValue: null,
        endValue: null,
        startOpen: false,
        endOpen: false,};
     
        this.inputTITLE = this.inputTITLE.bind(this);
        this.inputDESCRIPTION = this.inputDESCRIPTION.bind(this);
        this.inputSCHEDULE = this.inputSCHEDULE.bind(this);
        this.inputPRICE = this.inputPRICE.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onStartOpenChange = this.onStartOpenChange.bind(this);
        this.onEndOpenChange = this.onEndOpenChange.bind(this);
        this.onStartChange = this.onStartChange(this);
        this.onEndChange = this.onEndChange(this);
        this.disabledStartDate = this.disabledStartDate.bind(this);
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
    onStartOpenChange(event){
        this.setState({
            startOpen: event.target.open
        });
    }
    onEndOpenChange(event){
        this.setState({
            endOpen : event.target.open
        });
    }
    onStartChange(event){
        this.setState({
            startValue: event.target.showValue,
            startOpen: false,
            endOpen: true,
        });
    }
    onEndChange(event){
        this.setState({
            endValue: event.target.showValue,
        });
    }
    disabledStartDate(event){
        if (!event.target.showValue) {
            return false;
        }
        const startValue = this.state.startValue;
        if (!startValue) {
            return false;
        }
        return event.target.showValue.diff(startValue, 'days') < 0;
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
        const state = this.state;
        return (
            <div className={style.wrapper}>
                <div className={style.lectureBox}>
                    <Segment padded>
                        <Input type="text" placeholder='강의제목' value={this.state.title} onChange={this.inputTITLE} />
                        <br /><br />
                        <textarea className={style.despBox} placeholder='강의설명' value={this.state.description} onChange={this.inputDESCRIPTION} />
                        <br /><br />
                        <div style={{ width: 240, margin: 20 }}>
                        시작일：
                        <Picker
                            onOpenChange={this.onStartOpenChange}
                            type="start"
                            showValue={state.startValue}
                            open={this.state.startOpen}
                            value={[state.startValue, state.endValue]}
                            onChange={this.onStartChange}/>
                        종료일：
                        <Picker
                            onOpenChange={this.onEndOpenChange}
                            open={this.state.endOpen}
                            type="end"
                            showValue={state.endValue}
                            disabledDate={this.disabledStartDate}
                            value={[state.startValue, state.endValue]}
                            onChange={this.onEndChange}
                        />
                        </div>
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