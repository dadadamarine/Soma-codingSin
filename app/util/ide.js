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
require('codemirror/mode/clike/clike');
var io = require('socket.io-client');
const socket = io.connect({ reconnect: true });

export default class room extends Component {
	constructor(props) {
		super();
		this.state = {hash:location.hash.replace('#', ''), code_i:"",code_y:"", mode_i:{name:"javascript"},mode_y:{name:"javascript"}, mode_intro:{javascript: '# 코딩의 신에 오신걸 환영합니다. \n',clike: '// 코딩의 신에 오신걸 환영합니다. \n'}};
		var cursor=this;

		socket.emit('channelJoin', this.state.hash);
		socket.on('receive', function (data) {
			cursor.setState({code_y:data});
		});
		this.changeMode = this.changeMode.bind(this);
		this.setState({code_i:this.state.mode_intro.javascript});
		this.instance = null;
	}
	componentDidMount() {
		socket.emit('send', {channel:this.state.hash, msg:this.state.mode_intro.javascript});
	}
	changeMode (e) {
		let mode = e.target.value;
		let intro = this.state.mode_intro[mode];
		this.setState({
			mode_i: mode,
			code_i: intro
		});
	}
	render() {
		const cursor = this;
		return (
			<div className={style.flexRow}>
				<div className={style.flexColumn}>
				<CodeMirror
					value={this.state.code_i}
					options={{
						mode: this.state.mode_i,
						theme: 'default',
						lineNumbers: true,
						autofocus: true
					}}
					onChange={(editor, data, value) => {
						socket.emit('send', {channel:cursor.state.hash, msg:value});
					}}
					editorDidMount={editor => { editor.setValue(this.state.mode_intro.javascript);}}
					autoCursor={true}
				/>
				<div style={{ marginTop: 10 }}>
					<select onChange={this.changeMode}>
						{/* <option value="markdown">Markdown</option> */}
						<option value="javascript">JavaScript</option>
                        <option value="clike">C</option>
					</select>
				</div>
				</div>
				<div className={style.margin} />
				<div className={style.flexColumn}>
				<CodeMirror
				value={this.state.code_y}
				options={{
					mode: this.state.mode_y,
					theme: 'default',
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