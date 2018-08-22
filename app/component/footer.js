import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import style from './footer.css';

export default class header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className={style.footerNav} >
                    <div className={style.contentWrap}>
                        <div className={style.siteInfo}>
                            <ul>
                                <li><a>회사소개</a></li>
                                <li><a>개인정보처리방침</a></li>
                                <li><a>이용약관</a></li>
                                <li><a>제휴문의</a></li>
                                <li><a>이메일 수집 거부</a></li>
                                <li><a>공고사항</a></li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div className={style.footerWrapper}>
                    <div className={style.footer}>
                        <p>Software Maestro 9th Team Project</p>
                        <p>정민석 김동현 전승훈</p>
                    </div>
                </div>
            </div>
        );
    }
}