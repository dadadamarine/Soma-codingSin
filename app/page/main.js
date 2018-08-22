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
              <div className={style.menuIcon}></div>
              <div className={style.menu}>수강 안내</div>
              <div className={style.menu} onClick={this.test}>수강신청</div>
              <div className={style.menu}>강사 소개</div>
              <div className={style.menu}>콘텐츠 창고</div>
              <div className={style.menu}>커뮤니티</div>
              <div className={style.menu}>레벨테스트</div>
              <div className={style.menuRoom}>
                <a>내 강의실</a>
              </div>
          </div>

        </div>

        <div className={style.contentWrapper1}>



            <div className={style.bannerWrapper}>
              <div className={style.banner1}></div>
            </div>
          
            <div className={style.margin}></div>

            <div className={style.contentWrapper2}>
              <div className={style.bannerWrapper}>
                <div className={style.banner2}></div>
              </div>
            

            <div className={style.margin2}></div>

          <div className={style.section1}>
            <h2 className={style.lectureString}> 
              <span>
                <strong>여러분의 꿈과 목표를 향해,</strong>
                 오늘도 최선을 다하는 코딩의신 선생님이 되겠습니다.
             </span>
            </h2>

            <ul className={style.lectureList}>
              <li className={style.lecture1} ></li>
              <li className={style.lecture2} ></li>
              <li className={style.lecture3} ></li>
              <li className={style.lecture1} ></li>
              <li className={style.lecture2} ></li>
              <li className={style.lecture3} ></li>
              <li className={style.lecture1} ></li>
              <li className={style.lecture2} ></li>
              <li className={style.lecture3} ></li>
              <li className={style.lecture1} ></li>
            </ul>
          </div>
          
          <div className={style.margin2}></div>


          <div className={style.section1}>
            <h2 className={style.lectureString}> 
                <span>
                  <strong>100% 솔직후기</strong>
              </span>
            </h2>
            <div className={style.reviewBanner}></div>
          </div>

        </div>
        </div>
        <div className={style.margin2}></div>
        <div className={style.section1}>
         <h2 className={style.lectureString}> 
                <span>
                  <strong>최고의 강사들</strong>이
                  코딩의신을 함께 만들고 있습니다.
              </span>
          </h2>
          <div className={style.teacherList}></div>
        </div>

        <div className={style.footer}>
          <div className={style.footerImage}></div>
        </div>

      </div>
    );
  }
}