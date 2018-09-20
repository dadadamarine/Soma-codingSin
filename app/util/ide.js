var React = require('react');
var ReactDOM = require('react-dom');
var Codemirror = require('react-codemirror');
const createReactClass = require('create-react-class');

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
	getInitialState () {
		return {
			code: defaults.javascript,
			readOnly: false,
			mode: 'javascript',
		};
	},
	updateCode (newCode) {
		this.setState({
			code: newCode
		});
	},
	changeMode (e) {
        var mode = e.target.value;
		this.setState({
			mode: mode,
			code: defaults[mode]
		});
	},
	toggleReadOnly () {
		this.setState({
			readOnly: !this.state.readOnly
		}, () => this.refs.editor.focus());
	},
	render () {
		var options = {
			lineNumbers: true,
			readOnly: this.state.readOnly,
			mode: this.state.mode
		};
		return (
			<div>
				<Codemirror ref="editor" value={this.state.code} onChange={this.updateCode} options={options} autoFocus={true} />
				<div style={{ marginTop: 10 }}>
					<select onChange={this.changeMode} value={this.state.mode}>
						{/* <option value="markdown">Markdown</option> */}
						<option value="javascript">JavaScript</option>
                        <option value="clike">C</option>
					</select>
					{/* <button onClick={this.toggleReadOnly}>Toggle read-only mode (currently {this.state.readOnly ? 'on' : 'off'})</button> */}
				</div>
			</div>
		);
	}
});

export default Ide;