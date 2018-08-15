import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import style from './footer.css';

export default class header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={style.footerWrapper}>
                <div className={style.footer}>
                    <p>Software Maestro 9th Team Project</p>
                    <p>정민석 김동현 전승훈</p>
                </div>
            </div>
        );
    }
}