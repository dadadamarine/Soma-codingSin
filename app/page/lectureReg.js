import React, { Component } from 'react';
import * as service from '../request/lecture';
import { Dropdown, Input, Button, Divider } from 'semantic-ui-react';
import style from './lectureReg.css';
import DatePicker from "react-datepicker";

export default class lectureReg extends Component {
    constructor(props) {
        super(props);
        this.state = {title:'', 
        description:'',
        startDate:null,
        endDate:null,
        schedule:'', 
        price:'',   
        type:'',
        typeOptions:[{ key: '0', value: '0', text: 'Javascript' },{ key: '1', value: '1', text: 'Python' }], 
        selectedFile:null,
        startValue: null,
        endValue: null,
        startOpen: false,
        endOpen: false};
        this.inputTITLE = this.inputTITLE.bind(this);
        this.inputDESCRIPTION = this.inputDESCRIPTION.bind(this);
        this.inputPRICE = this.inputPRICE.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeStart = this.handleChangeStart.bind(this);
        this.handleChangeEnd = this.handleChangeEnd.bind(this);
        this.inputSCHEDULE = this.inputSCHEDULE.bind(this);
        this.readURL = this.readURL.bind(this);
        this.inputType = this.inputType.bind(this);
    }
    inputTITLE(event) {
        this.setState({ title: event.target.value });
    }
    inputDESCRIPTION(event) {
        this.setState({ description: event.target.value });
    }
    inputPRICE(event) {
        let tmp =String(event.target.value).split(",").join("");
        let price=this.numberWithCommas(tmp);
        this.setState({ price: price });
    }
    inputSCHEDULE(event) {
        this.setState({ schedule: event.target.value });
    }

     formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;
    
        return [year, month, day].join('-');
    }
    handleSubmit(event) {
        const curosr =this;
        service.lectureRegister(this.state.selectedFile, this.state.title, this.state.description, this.formatDate(this.state.startDate)+"~"+this.formatDate(this.state.endDate)+" "+this.state.schedule, this.state.price, this.state.type).then(function (res) {
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
    handleChangeStart(date) {
        this.setState({
            startDate: date
        });
    }
    handleChangeEnd(date) {
        if(date<this.state.startDate) date=this.state.startDate;
        this.setState({
            endDate: date
        });
    }
    handleChangeRaw(value) {
        return;
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
    numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    inputType(event, { value }){
        this.setState({ type: value });
    }
    render() {

        return (
            <div className={style.wrapper}>
                <div className={style.lectureBox}>
                <div className={style.lectureRegTitle}>강의 등록</div>
                <div className={style.lectureReginfo}>강의 정보를 입력해주세요.</div>
                <div className={style.lectureLeft}>
                    <div className={style.lectureReginfoImgWrapper}>
                    <img className={style.lectureReginfoImg} id="image_section" />
                    </div>
                    <form><input type="file" name="imgFile" id="myFile" className={style.lectureReginfoImgSelect} onChange={this.readURL}/></form>
                </div>
                <div className={style.lectureRight}>
                    <div>
                        <div className={style["input-box"]}>
                            <p className={style["input-box__title"]}>과외명</p>
                            <input className={style["input-box__input"]} type="text" placeholder='과외 제목을 입력해주세요.' value={this.state.title} onChange={this.inputTITLE} />
                        </div>
                        <div className={style["input-box_area"]}>
                            <textarea className={style["input-box__input_area"]} type="text" placeholder='과외에서 수업할 내용을 입력해주세요.' value={this.state.description} onChange={this.inputDESCRIPTION} />
                        </div>
                        <div className={style["input-box_date"]}>
                            <p className={style["input-box__title_date"]}>기간</p>
                            <DatePicker
                                dateFormat="yyyy-MM-dd"
                                selected={this.state.startDate}
                                selectsStart
                                placeholderText="시작일"
                                onChangeRaw={(event) =>
                                    this.handleChangeRaw(event.target.value)}
                                startDate={this.state.startDate}
                                endDate={this.state.endDate}
                                onChange={this.handleChangeStart}
                            />
                            <div className={style.dateSplit}>~</div>
                            <DatePicker
                                dateFormat="yyyy-MM-dd"
                                selected={this.state.endDate}
                                selectsEnd
                                placeholderText="종료일"
                                onChangeRaw={(event) =>
                                    this.handleChangeRaw(event.target.value)}
                                startDate={this.state.startDate}
                                endDate={this.state.endDate}
                                onChange={this.handleChangeEnd}
                            />
                            <p className={style["input-box__title_date"]}>시간</p>
                            <input className={style["input-box__input"]} type="text" placeholder='ex) 매주 토요일 14시~16시' value={this.state.schedule} onChange={this.inputSCHEDULE} />
                        </div>
                        <div className={style["input-box_date"]}>
                            <p className={style["input-box__title_date"]}>과외비</p>
                            <input className={style["input-box__input"]} type="text" pattern="^-?[0-9]\d*\.?\d*$" placeholder='과외비를 입력해주세요.' value={this.state.price} onChange={this.inputPRICE} />
                            <p className={style["input-box__title_date"]}>언어</p>
                            <Dropdown placeholder='타입' search selection options={this.state.typeOptions} onChange={this.inputType} className={style.type}/>
                        </div>
                    </div>
                    <div className={style.submit}>
                    <Button primary fluid content='과외등록' onClick={this.handleSubmit} primary />
                    </div>
                </div>
            </div>
        </div>
        );
    }
}