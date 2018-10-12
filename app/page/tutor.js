import React , {Component} from 'react';
import {Redirect, Link} from 'react-router-dom';
import style from './tutor.css';
import * as cookie from '../util/cookie';

class tutor extends Component{

    render(){
        return(
            <div styleName={style.wrapper}>
                <div className={style.bannerWrapper}>
                    <div className={style.bannerTop}>
                        <div className={style.bannerPhrase}>
                            <span>오</span>직<br/>
                            <span>당</span>신을 위해<br/>
                            <span>고</span>민하고<br/>
                            <span>고</span>뇌합니다.<br/>
                        </div>
                    </div>{/* 위쪽 배너 이미지 끝 */}
                    
                    <div className={style.bannerBottom}>
                        <div className={style.dotImage}>

                        </div>
                        <div className={style.introducePhrase}>
                            현직 개발자로 활발하게 활동하고 있는<br/>
                            코딩의 신의 우수한 강사진을 소개합니다.
                        </div>
                    </div>{/* 배너 아래쪽 배치 끝 */}
                </div> >{/* 배너 끝 */}
                    <div className={style.tutorListWrapper}>
                        <div className={style.titleSection}>
                            <div className={style.selected}><a>전체보기</a></div>
                            <div><a>JavaScript</a></div>
                            <div><a>Python</a></div>
                            <div><a>Java</a></div>
                            <div><a>Scratch</a></div>
                            <div><a>C</a></div>
                        </div>

                        <div className={style.tutorList}>
                            <div className={style.tutor}>1</div>
                            <div className={style.tutor}>1</div>
                            <div className={style.tutor}>1</div>
                            <div className={style.tutor}>1</div>
                            <div className={style.tutor}>1</div>
                            <div className={style.tutor}>1</div>
                            <div className={style.tutor}>1</div>
                            <div className={style.tutor}>1</div>
                            <div className={style.tutor}>1</div>
                            <div className={style.tutor}>1</div>
                            <div className={style.tutor}>1</div>
                            <div className={style.tutor}>1</div>
                            <div className={style.tutor}>1</div>
                            <div className={style.tutor}>1</div>
                            <div className={style.tutor}>1</div>
                            <div className={style.tutor}>1</div>
                            <div className={style.tutor}>1</div>
                            <div className={style.tutor}>1</div>

                        </div>
                    </div>{/* tutorListWrapper 끝 */}
                    <div className={style.searchBarWrapper}>
                        <input type="text" className={style.searchBar}/>
                    </div>

                </div>
                





        );
    }
}

export default tutor;