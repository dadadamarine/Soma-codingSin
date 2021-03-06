// var React = require('react');
// var ReactDOM = require('react-dom');
// var Codemirror = require('react-codemirror');
// const createReactClass = require('create-react-class');
// var style= require('./ide.css');
// var io = require('socket.io-client');
// const socket = io.connect({ reconnect: true });

// require('codemirror/mode/javascript/javascript');
// require('codemirror/mode/xml/xml');
// // require('codemirror/mode/markdown/markdown');
// require('codemirror/mode/clike/clike');

// var defaults = {
// 	// markdown: '# 코딩의 신에 오신걸 환영합니다. \n',
//     javascript: '# 코딩의 신에 오신걸 환영합니다. \n',
//     clike: '# 코딩의 신에 오신걸 환영합니다. \n'
// };

// var Ide = createReactClass({
// 	componentDidMount() {
// 		var cursor=this;
// 		// var hashString = location.hash.replace('#', '');
// 		socket.emit('channelJoin', "test");
// 		socket.on('receive', function (data) {
// 			cursor.setState({code_y:data});
// 		});
// 	},
// 	getInitialState () {
// 		return {
// 			code_i: defaults.javascript,
// 			mode_i: 'javascript'
// 		};
// 	},
// 	updateCode (newCode) {
// 		this.setState({
// 			code_i: newCode
// 		});
// 		socket.emit('send', {channel:"test", msg:newCode});
// 	},
// 	changeMode (e) {
//         var mode = e.target.value;
// 		this.setState({
// 			mode_i: mode,
// 			code_i: defaults[mode]
// 		});
// 	},
// 	render () {
// 		var options_i = {
// 			lineNumbers: true,
// 			readOnly: false,
// 			mode: this.state.mode_i
// 		};
// 		var options_y = {
// 			lineNumbers: true,
// 			readOnly: true,
// 			mode: this.state.mode_y
// 		};
// 		return (
// 			<div className={style.flexRow}>
// 				<div className={style.flexColumn}>
// 				<Codemirror ref="editor" value={this.state.code_i} onChange={this.updateCode} options={options_i} autoFocus={true} />
// 				<div style={{ marginTop: 10 }}>
// 					<select onChange={this.changeMode} value={this.state.mode_i}>
// 						{/* <option value="markdown">Markdown</option> */}
// 						<option value="javascript">JavaScript</option>
//                         <option value="clike">C</option>
// 					</select>
// 				</div>
// 				</div>
// 				<div className={style.margin} />
// 				<div className={style.flexColumn}>
// 				<Codemirror ref="editor" value={this.state.code_y} options={options_y}/>
// 				</div>
// 			</div>
// 		);
// 	}
// });

// export default Ide;

import React, { Component } from 'react';
import { render } from 'react-dom';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import style from './ide.css';
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/python/python');
var io = require('socket.io-client');
const socket = io.connect({ reconnect: true });

export default class room extends Component {
	constructor(props) {
		super();
		let lang;
		try{
		lang=this.props.language;
		}catch(e){}
		this.state = {hash:location.hash.replace('#', ''), theme:"default", code_i:"",code_y:"", mode_i:lang==undefined?"javascript":lang, mode_y:{name:"javascript"}, mode_intro:{javascript: '// 코딩의 신에 오신걸 환영합니다. \n',python: '# 코딩의 신에 오신걸 환영합니다. \n'}};
		var cursor=this;
		// 강의 id 별로 채널 생성 및 입장
		socket.emit('channelJoin', this.state.hash);
		socket.on('receive', function (data) {
			cursor.setState({code_y:data});
		});
		this.changeMode = this.changeMode.bind(this);
		this.changeTheme = this.changeTheme.bind(this);
		this.setState({code_i:this.state.mode_intro.javascript});
		this.instance = null;
		this.instance_my= null;
	}
	componentDidMount() {
		//컴포넌트 생성후 최초 메시지 전송
		socket.emit('send', {channel:this.state.hash, msg:this.state.mode_intro.javascript});
	}
	changeMode (e) {
		//에디터 언어 변경
		let mode = e.target.value;
		let intro = this.state.mode_intro[mode];
		console.log(this.instance_my.getMode());
		this.instance_my.setOption("mode", {name:mode});
		this.instance_my.markClean();
		this.instance_my.refresh();
		console.log(this.instance_my.getMode());
		this.setState({
			mode_i: mode,
			code_i: intro
		});
	}
	changeTheme (e) {
		//에디터 테마 변경 css는 외부 파일 사용
		this.setState({
			theme: e.target.value
		});
	}
	render() {
		const cursor = this;
		return (
			<div className={style.flexRow}>
				<div className={style.flexColumn}>
				{/* 에디터 생성 */}
				<CodeMirror
					value={this.state.code_i}
					options={{
						mode: this.state.mode_i,
						theme: String(this.state.theme),
						lineNumbers: true,
						matchBrackets: true,
    					styleActiveLine: true,
						autofocus: true
					}}
					onChange={(editor, data, value) => {
						// 코드 전송
						socket.emit('send', {channel:cursor.state.hash, msg:value});
					}}
					editorDidMount={editor => { this.instance_my = editor; editor.setValue(this.state.mode_intro.javascript);}}
					autoCursor={true}
				/>
				<div style={{ marginTop: 10 }}>
					<span>언어 : </span>
					<select onChange={this.changeMode}>
					{/* 언어리스트 */}
						<option value="javascript">JavaScript</option>
                        <option value="python">python</option>
					</select>&nbsp;&nbsp;&nbsp;&nbsp;
					<span>테마 : </span>
					<select onChange={this.changeTheme}>
					{/* 테마 리스트 */}
						<option value="default">default</option>
                        <option value="cobalt">cobalt</option>
						<option value="zenburn">zenburn</option>
						<option value="pastel-on-dark">pastel-on-dark</option>
						<option value="darcula">darcula</option>
						<option value="eclipse">eclipse</option>
					</select>
				</div>
				</div>
				<div className={style.margin} />
				<div className={style.flexColumn}>
				<CodeMirror
				value={this.state.code_y}
				options={{
					mode: this.state.mode_y,
					theme: String(this.state.theme),
					lineNumbers: true,
					readOnly: true
				}}
				editorDidMount={editor => { this.instance = editor }}
				autoCursor={true}
				/>
				</div>
			</div>
		)
	}
}