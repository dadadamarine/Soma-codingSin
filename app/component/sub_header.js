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
                <div className={style.menuIcon}  onClick={this.test}></div>

                <div className={style.menu}>수강 안내</div>
                <div className={style.menu}><Link to="/lecture">수강 신청</Link></div>
                <div className={style.menu}>강사 소개</div>
                <div className={style.menu}>콘텐츠 창고</div>
                <div className={style.menu}>커뮤니티</div>
                <div className={style.menu}>레벨테스트</div>
                <div className={style.menuRoom}><Link to="/myLecture">내 강의실</Link></div>
              </div>
            </div>

        );
    }
}