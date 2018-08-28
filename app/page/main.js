import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import style from './main.css';
import Header from '../component/sub_header';

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
        <Header />
        <div className={style.contentWrapper1}>

            <div className={style.bannerWrapper}>
              <div className={style.banner1}></div>
            </div>
          
            <div className={style.margin}></div>

            <Carousel className={style.rb} showThumbs={false} autoPlay={true}>
                <div>
                    <img src={require('../resources/img/rb1.png')} />
                    <p className="legend">코딩교육, 코딩의 신이 함께합니다.</p>
                </div>
                <div>
                    <img src={require('../resources/img/rb2.png')} />
                    <p className="legend">코딩교육, 더 이상 미룰순 없습니다.</p>
                </div>
                <div>
                    <img src={require('../resources/img/rb3.png')} />
                    <p className="legend">코딩의 신, 지금 바로 만나보세요!</p>
                </div>
            </Carousel>
            
            
          <div className={style.contentWrapper2}>
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

            <div className={style.bannerWrapper2}>
            <img className={style.banner} src={require('../resources/img/banner2.png')} />
            <div className={style.margin}></div>
            <img className={style.banner} src={require('../resources/img/banner3.png')} />
            <div className={style.margin}></div>
            </div>
            <br/><br/><br/>
            
          <div className={style.section1}>
            <div className={style.lectureString}> 
                <p>
                  이미 수많은 학생들이 1등 홈코드와 함께
                </p>
                <p>
                  <strong>진짜 코딩</strong>을 배우고 있습니다.
                </p>
            </div>
            <div className={style.reviewBanner}></div>
          </div>

        </div>
        </div>
        <div className={style.margin2}></div>
        <div className={style.section1}>
         <div className={style.lectureString}> 
                <span>
                  <strong>최고의 강사들</strong>이
                  코딩의신을 함께 만들고 있습니다.
              </span>
          </div>
          <div className={style.teacherList}></div>
        </div>

      </div>
    );
  }
}