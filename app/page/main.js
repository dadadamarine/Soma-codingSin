import React, { Component } from 'react';
import style from './main.css';

export default class main extends Component {
  constructor(props) {
    super();
    this.state = {};

  }
  componentDidMount(){
  }
  componentWillUnmount() {
  }
  render() {
    return (
      <div>
        <div className={style.navWrapper}>
          <div className={style.nav}>
              <div className={style.menu} onClick={this.test}>수강신청</div>
              <div className={style.menu}>코딩의 신</div>
              <div className={style.menu}>강사 소개</div>
              <div className={style.menu}>콘텐츠</div>
              <div className={style.menu}>커뮤니티</div>
              <div className={style.menu}>내 강의실</div>
          </div>
        </div>
        <div className={style.bannerWrapper}>
          <div className={style.banner1}>
          </div>
          <div className={style.margin}></div>
          <div className={style.banner2}>
          </div>
        </div>
      </div>
    );
  }
}