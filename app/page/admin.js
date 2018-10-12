import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as service from '../request/admin';
import { Segment, Input, Button, Divider, Dropdown } from 'semantic-ui-react';
import style from './admin.css';

export default class admin extends Component {
    constructor(props) {
        super(props);
        this.state = {type:'', title:'', content:'', chapter:'', quiz:[]};
     
        this.inputType = this.inputType.bind(this);
        this.inputTitle = this.inputTitle.bind(this);
        this.inputContent = this.inputContent.bind(this);
        this.inputChapter = this.inputChapter.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        let elem = document.getElementById("insert_code");
        let start = 0;
        let end = 0;
        let row = 0;
        let quiz = new Array();
        let cursor = this;
        let flag=true;

        elem.addEventListener('mouseup', function(event) {
            start = event.target.selectionStart;
            end = event.target.selectionEnd;
            flag=true;
        });

        elem.addEventListener('keydown', function(event) {
            if(flag){
                flag=false;
                let tmp =String(event.target.innerHTML).split("\n");
                let offset=0;
                row=elem.value.substr(0, elem.selectionStart).split("\n").length-1;
                for(let i=0;i<row;i++){
                    offset+=tmp[i].length;
                }
                start-=(offset+row);
                end-=(offset+row+1);
                if(event.keyCode==17) {
                    let str = row+","+start+","+end;
                    quiz.push(str)
                    document.getElementById("view_code").innerText+="{"+str+"}"; 
                    cursor.setState({quiz:quiz});
                }     
            }
        });
	}
    inputType(event) {
        this.setState({ type: event.target.value });
    }
    inputTitle(event) {
        this.setState({ title: event.target.value });
    }
    inputContent(event) {
        this.setState({ content: event.target.value });
    }
    inputChapter(event) {
        this.setState({ chapter: event.target.value });
    }
    handleSubmit(event) {
        const curosr =this;
        service.contentWrite(this.state.type, this.state.title, this.state.content, this.state.chapter, this.state.quiz).then(function (res) {
            if(String(res.data)=="ok"){
                alert("문제작성 성공!");
                location.reload(true);
            }
            else alert("문제작성에 실패했습니다!");
        }).catch(function (error) {
            alert('error massage : '+error);
        });
        event.preventDefault();
    }
    render() {
        return (
            <div className={style.wrapper}>
                <div className={style.adminBox}>
                    <Segment padded>
                        <Input type="text" placeholder='언어' value={this.state.type} onChange={this.inputType} />
                        <br /><br />
                        <Input type="text" placeholder='제목' value={this.state.title} onChange={this.inputTitle} />
                        <br /><br />
                        <textarea id="insert_code" className={style.despBox} placeholder='내용' value={this.state.content} onChange={this.inputContent} />
                        <span>quiz:</span><span id="view_code"></span>
                        <br /><br />
                        <Input type="text" placeholder='챕터' value={this.state.chapter} onChange={this.inputChapter} />
                        <br /><br />
                        <Button primary fluid content='문제작성' onClick={this.handleSubmit} primary />
                    </Segment>
                </div>
            </div>
        );
    }
}