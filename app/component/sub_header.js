import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import style from './sub_header.css';

export default class sub_header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <div className={style.navWrapper}>
            <div className={style.nav}>
                <div className={style.menu}><Link to="/lecture">과외신청</Link></div>
                <div className={style.menu}>코딩의 신</div>
                <div className={style.menu}>강사소개</div>
                <div className={style.menu}>콘텐츠</div>
                <div className={style.menu}>커뮤니티</div>
                <div className={style.menu}>내 강의실</div>
            </div>
        </div>
        );
    }
}