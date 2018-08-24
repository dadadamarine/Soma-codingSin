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
        <div className={style.bannerWrapper}>
          <div className={style.banner1}></div>
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
            <div className={style.bannerWrapper2}>
            <img className={style.banner} src={require('../resources/img/banner2.png')} />
            <div className={style.margin}></div>
            <img className={style.banner} src={require('../resources/img/banner3.png')} />
            <div className={style.margin}></div>
            </div>
            <br/><br/><br/>
        </div>
      </div>
    );
  }
}