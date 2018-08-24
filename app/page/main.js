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
          <div className={style.banner1}>
          </div>
          <div className={style.margin}></div>
          <Carousel className={style.rb} showThumbs={false} autoPlay={true}>
                <div>
                    <img src={require('../resources/img/rb1.png')} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={require('../resources/img/rb2.png')} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={require('../resources/img/rb3.png')} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
            <br/><br/><br/>
        </div>
      </div>
    );
  }
}