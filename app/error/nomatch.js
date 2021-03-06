import React, { Component } from 'react';
import style from './nomatch.css';

export default class nomatch extends Component {
  constructor(props) {
    super();
    this.state = {};
    this.textAnimation = this.textAnimation.bind(this);
    window.setTimeout(this.textAnimation,100);
  }
  textAnimation() {
    let el = document.querySelector("." + style.textBefore);

    if (el) {
      el.className = style.textAfter;
    } else {
      el = document.querySelector("." + style.textAfter);
      el.className = style.textBefore;
    }
  }
  componentDidMount(){
    this.timer=window.setInterval(this.textAnimation, 2000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
}
  render() {
    return (
      <div className={style.notFoundWrapper}>
        <div className={style.notFound}>
          <span className={style.textBefore}>404 NOT FOUND!</span>
        </div>
      </div>
    );
  }
}