var React = require('react');
var ReactDOM = require('react-dom');
var Codemirror = require('react-codemirror');
const createReactClass = require('create-react-class');
var style= require('./ide.css');
var io = require('socket.io-client');
const socket = io.connect({ reconnect: true });

require('codemirror/mode/javascript/javascript');
require('codemirror/mode/xml/xml');
// require('codemirror/mode/markdown/markdown');
require('codemirror/mode/clike/clike');

var defaults = {
	// markdown: '# 코딩의 신에 오신걸 환영합니다. \n',
    javascript: '# 코딩의 신에 오신걸 환영합니다. \n',
    clike: '# 코딩의 신에 오신걸 환영합니다. \n'
};

var Ide = createReactClass({
	componentDidMount() {
		if(location.hash!=null){
			var cursor=this;
			var hashString = location.hash.replace('#', '');
			socket.emit('channelJoin', hashString);
			socket.on('receive', function (data) {
				cursor.setState({code_y:data});
				console.log(data);
			});
		}
	},
	getInitialState () {
		return {
			code_i: defaults.javascript,
			mode_i: 'javascript'
		};
	},
	updateCode (newCode) {
		this.setState({
			code_i: newCode
		});
		socket.emit('send', newCode);
	},
	changeMode (e) {
        var mode = e.target.value;
		this.setState({
			mode_i: mode,
			code_i: defaults[mode]
		});
	},
	render () {
		var options_i = {
			lineNumbers: true,
			readOnly: false,
			mode: this.state.mode_i
		};
		var options_y = {
			lineNumbers: true,
			readOnly: true,
			mode: this.state.mode_y
		};
		return (
			<div className={style.flexRow}>
				<div className={style.flexColumn}>
				<Codemirror ref="editor" value={this.state.code_i} onChange={this.updateCode} options={options_i} autoFocus={true} />
				<div style={{ marginTop: 10 }}>
					<select onChange={this.changeMode} value={this.state.mode_i}>
						{/* <option value="markdown">Markdown</option> */}
						<option value="javascript">JavaScript</option>
                        <option value="clike">C</option>
					</select>
				</div>
				</div>
				<div className={style.margin} />
				<div className={style.flexColumn}>
				<Codemirror ref="editor" value={this.state.code_y} options={options_y}/>
				</div>
			</div>
		);
	}
});

export default Ide;