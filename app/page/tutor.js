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
                            <span>코딩의 신</span>의 우수한 강사진을 소개합니다.


                        <div className={style.searchBarWrapper}>
                            <div className ={style.inputArea}>
                            <input type="text" value="강사의 이름을 입력하세요." className={style.searchBar}/>
                            <div className={style.searchIcon}></div>
                        </div>
                        
                    </div>
                        </div>
                    </div>{/* 배너 아래쪽 배치 끝 */}
                </div>{/* 배너 끝 */}
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
                            <a href="tutor/1" onClick="window.open(this.href, '_blank', 'width=400px, height=430px, toolbars=no'); return false;">
                                <div className={style.tutorBox}>
                                    <div className={style.phraseSection}>
                                        <img src={require('../resources/img/tutor/tutorPhrase/(1).png')} alt=""/>
                                    </div>
                                    <div className={style.nameSection}> 
                                        <div><img src={require('../resources/img/tutor/tutor/  (1).png')} alt=""/></div>
                                        <p>개발 정민석</p>
                                    </div>
                                </div>
                            </a>
                            
                            <div className={style.tutorBox}>
                                <div className={style.phraseSection}>
                                    <img src={require('../resources/img/tutor/tutorPhrase/(9).png')} alt=""/>
                                </div>
                                <div className={style.nameSection}> 
                                    <div><img src={require('../resources/img/tutor/tutor/  (9).png')} alt=""/></div>
                                    <p>개발 정민석</p>
                                </div>
                            </div>
                            <div className={style.tutorBox}>
                                <div className={style.phraseSection}>
                                    <img src={require('../resources/img/tutor/tutorPhrase/(4).png')} alt=""/>
                                </div>
                                <div className={style.nameSection}> 
                                    <div><img src={require('../resources/img/tutor/tutor/  (4).png')} alt=""/></div>
                                    <p>개발 정민석</p>
                                </div>
                            </div>
                            <div className={style.tutorBox}>
                                <div className={style.phraseSection}>
                                    <img src={require('../resources/img/tutor/tutorPhrase/(5).png')} alt=""/>
                                </div>
                                <div className={style.nameSection}> 
                                    <div><img src={require('../resources/img/tutor/tutor/  (5).png')} alt=""/></div>
                                    <p>개발 정민석</p>
                                </div>
                            </div>
                            <div className={style.tutorBox}>
                                <div className={style.phraseSection}>
                                    <img src={require('../resources/img/tutor/tutorPhrase/(14).png')} alt=""/>
                                </div>
                                <div className={style.nameSection}> 
                                    <div><img src={require('../resources/img/tutor/tutor/  (14).png')} alt=""/></div>
                                    <p>개발 정민석</p>
                                </div>
                            </div>
                            <div className={style.tutorBox}>
                                <div className={style.phraseSection}>
                                    <img src={require('../resources/img/tutor/tutorPhrase/(7).png')} alt=""/>
                                </div>
                                <div className={style.nameSection}> 
                                    <div><img src={require('../resources/img/tutor/tutor/  (7).png')} alt=""/></div>
                                    <p>개발 정민석</p>
                                </div>
                            </div>
                            <div className={style.tutorBox}>
                                <div className={style.phraseSection}>
                                    <img src={require('../resources/img/tutor/tutorPhrase/(8).png')} alt=""/>
                                </div>
                                <div className={style.nameSection}> 
                                    <div><img src={require('../resources/img/tutor/tutor/  (8).png')} alt=""/></div>
                                    <p>개발 정민석</p>
                                </div>
                            </div>
                            <div className={style.tutorBox}>
                                <div className={style.phraseSection}>
                                    <img src={require('../resources/img/tutor/tutorPhrase/(3).png')} alt=""/>
                                </div>
                                <div className={style.nameSection}> 
                                    <div><img src={require('../resources/img/tutor/tutor/  (3).png')} alt=""/></div>
                                    <p>개발 정민석</p>
                                </div>
                            </div>
                            <div className={style.tutorBox}>
                                <div className={style.phraseSection}>
                                    <img src={require('../resources/img/tutor/tutorPhrase/(10).png')} alt=""/>
                                </div>
                                <div className={style.nameSection}> 
                                    <div><img src={require('../resources/img/tutor/tutor/  (10).png')} alt=""/></div>
                                    <p>개발 정민석</p>
                                </div>
                            </div>
                            <div className={style.tutorBox}>
                                <div className={style.phraseSection}>
                                    <img src={require('../resources/img/tutor/tutorPhrase/(11).png')} alt=""/>
                                </div>
                                <div className={style.nameSection}> 
                                    <div><img src={require('../resources/img/tutor/tutor/  (11).png')} alt=""/></div>
                                    <p>개발 정민석</p>
                                </div>
                            </div>
                            <div className={style.tutorBox}>
                                <div className={style.phraseSection}>
                                    <img src={require('../resources/img/tutor/tutorPhrase/(14).png')} alt=""/>
                                </div>
                                <div className={style.nameSection}> 
                                    <div><img src={require('../resources/img/tutor/tutor/  (14).png')} alt=""/></div>
                                    <p>개발 정민석</p>
                                </div>
                            </div>
                            <div className={style.tutorBox}>
                                <div className={style.phraseSection}>
                                    <img src={require('../resources/img/tutor/tutorPhrase/(13).png')} alt=""/>
                                </div>
                                <div className={style.nameSection}> 
                                    <div><img src={require('../resources/img/tutor/tutor/  (13).png')} alt=""/></div>
                                    <p>개발 정민석</p>
                                </div>
                            </div>
                            <div className={style.tutorBox}>
                                <div className={style.phraseSection}>
                                    <img src={require('../resources/img/tutor/tutorPhrase/(6).png')} alt=""/>
                                </div>
                                <div className={style.nameSection}> 
                                    <div><img src={require('../resources/img/tutor/tutor/  (6).png')} alt=""/></div>
                                    <p>개발 정민석</p>
                                </div>
                            </div>
                            <div className={style.tutorBox}>
                                <div className={style.phraseSection}>
                                    <img src={require('../resources/img/tutor/tutorPhrase/(15).png')} alt=""/>
                                </div>
                                <div className={style.nameSection}> 
                                    <div><img src={require('../resources/img/tutor/tutor/  (15).png')} alt=""/></div>
                                    <p>개발 정민석</p>
                                </div>
                            </div>
                            <div className={style.tutorBox}>
                                <div className={style.phraseSection}>
                                    <img src={require('../resources/img/tutor/tutorPhrase/(12).png')} alt=""/>
                                </div>
                                <div className={style.nameSection}> 
                                    <div><img src={require('../resources/img/tutor/tutor/  (12).png')} alt=""/></div>
                                    <p>개발 정민석</p>
                                </div>
                            </div>
                            <div className={style.tutorBox}>
                                <div className={style.phraseSection}>
                                    <img src={require('../resources/img/tutor/tutorPhrase/(2).png')} alt=""/>
                                </div>
                                <div className={style.nameSection}> 
                                    <div><img src={require('../resources/img/tutor/tutor/  (2).png')} alt=""/></div>
                                    <p>개발 정민석</p>
                                </div>
                            </div>
                            <div className={style.tutorBox}>
                                <div className={style.phraseSection}>
                                    <img src={require('../resources/img/tutor/tutorPhrase/(18).png')} alt=""/>
                                </div>
                                <div className={style.nameSection}> 
                                    <div><img src={require('../resources/img/tutor/tutor/  (18).png')} alt=""/></div>
                                    <p>개발 정민석</p>
                                </div>
                            </div>

                        </div>
                    </div>{/* tutorListWrapper 끝 */}
                   

                </div>
                





        );
    }
}

export default tutor;