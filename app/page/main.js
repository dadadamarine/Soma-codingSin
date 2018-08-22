import React, { Component } from 'react';
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
          <div className={style.banner2}>
          </div>
        </div>
      </div>
    );
  }
}