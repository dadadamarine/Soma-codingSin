import React, { Component } from 'react';
import * as service from '../request/active';
import style from './login.css';

export default class active extends Component {
    constructor(props) {
        super(props);
        this.state = {code:this.props.match.params.code};
    }
    componentDidMount(){
        service.active(this.state.code).then(function (res) {
            if(String(res.data)=="ok"){
                location.href="/login";
            }
        }).catch(function (error) {
            alert('error massage : '+error);
        });
    }
    render() {
        return (
            <div></div>
        );
    }
}