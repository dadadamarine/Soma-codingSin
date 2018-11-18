import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import * as service from '../request/lecture';
import { Segment, Input, Button, Divider } from 'semantic-ui-react';
import style from './myLecture.css';
import * as cookie from '../util/cookie';

export default class myLecture extends Component {
    constructor(props) {
        super(props);
        this.state = {isLogin:cookie.getCookie('user'), list:[]};
        const curosr = this;
        service.myLectureList().then(function (res) {
            if(res.data!="none") curosr.setState({ list: res.data });
        }).catch(function (error) {
            alert('error massage : '+error);
        });
    }
    componentDidMount(){
    }
    render() {
        return (
            <div className={style.wrapper}>
                <div className={style["banner-wrapper"]}>
                    <div className={style["banner-wrapper__section"]}>
                        <div className={style["banner"]}>
                            <h1 className={style["banner__title"]}>나의 강의실</h1>
                            <p className={style["banner__description"]}>선택이 아닌 필수가 된 코딩, 강의를 듣는곳입니다.</p>
                        </div>
                    </div>
                </div>
                <div className={style["content-wrapper"]}>
                    <div className={style["content-wrapper__section"]}>
                        <div className={style.nav}>
                            <div className={[style.nav__menu, style['nav__menu--selected']].join(' ')}><a href="myLecture">내 강의실</a></div>
                            <div className={style.nav__menu}><a href="#">결재 정보</a></div>
                            <div className={style.nav__menu}><a href="#">내가 쓴 글</a></div>
                            <div className={style.nav__menu}><a href="#">이용 문의</a></div>
                        </div>
                    </div>
                </div>


                <div className={style["content-wrapper"]}>
                    <div className={style["content-wrapper__section"]}>
                        <div className={style["lecture-list"]}>
                            <div className={style["lecture-list__title-section"]}>
                                <div className={style.title}>오늘 둘러본 강의</div>
                                <div className={style.more}>전체보기</div>
                            </div>
                            <div className={style["lecture-list__list-section"]}>
                                <img src={require('../resources/img/lecture/section2/section2_1.png')} alt=""/>
                                <img src={require('../resources/img/lecture/section2/section2_2.png')} alt=""/>
                                <img src={require('../resources/img/lecture/section2/section2_3.png')} alt=""/>
                                <img src={require('../resources/img/lecture/section2/section2_4.png')} alt=""/>
                                <img src={require('../resources/img/lecture/section2/section2_5.png')} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style["content-wrapper--gray"]}>
                    <div className={style["content-wrapper__section"]}>
                        <div className={style.phrase}>
                            현재 총 <span>{this.state.list.length}</span>개의 수강중인 강의가 있습니다.
                        </div>
                        <div className={style["lecture-list"]}>
                        {this.state.list!=[]?this.state.list.map((lecture, i) => {
                            let url = "/room#"+lecture._id;
                            return (
                            <a href="">
                                <div className={style['study-box']}>
                                    <a href="1222">
                                        <div className={style['study-box__fav--active']}></div>
                                    </a>
                                    <div className={style['study-box__counter']}>{lecture.chapter}</div>
                                    <button className={style['study-box__study-button']}><a href={url}>과외방 입장</a></button>
                                    <div className={style['study-box__title']}>{lecture.type==0?"[Javascript] ":"[Python] "}{lecture.title}</div>
                                    <div className={style['study-box__date']}>
                                        <p>{lecture.schedule}</p>
                                    </div>
                                </div>
                            </a>);
                            }):null}
                            <a href="lecture">
                                <div className={style['study-box--recommand']}>
                                    <img className={style['study-box--recommand__img']} src={require("../resources/img/mylecture/recommand.jpg")} alt=""/>
                                    <div className={style['study-box--recommand__text']}>
                                        <h2>맞춤형 강의</h2>
                                        <p>소통중심, 이해중심</p>
                                        <p>더보기</p>
                                    </div>

                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}