import React,{Component} from 'react';
import style from './contentDetail.css';

export default class content extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className={style.wrap}>

                <div className={style["wrapper"]}>
                    <div className={style["wrapper__section"]}>
                
                        <div className={[style["flex"], style["flex--content-detail-title"]].join(" ")} >
                            <div className={[style["content-box__img"], style["content-box__img--blue"]].join(" ")}>
                                <img src="" alt=""/>
                            </div>

                            <div className={style['context']}>
                                <p className={style["title--big"]}> 제목 입력 부분입니다. </p>
                                <p className={style["title--middle"]}>컨텐츠명 컨텐츠명 컨텐츠명 컨텐츠명 컨텐츠명 컨텐츠명 컨텐츠명 컨텐츠명 컨텐츠명 컨텐츠명 컨텐츠명컨텐츠명 컨텐츠명</p>
                                <div className={style["tag-list"]}>
                                    <div className={style["tag-button"]}>WEB</div>
                                    <div className={style["tag-button"]}>HTML5</div>
                                    <div className={style["tag-button"]}>CODE</div>
                                </div>
                                <div className={style["recommand-button"]}>추천</div>
                            </div>

                        </div>
                    </div>
                </div>


                {/* 컨텐츠 메인 페이지 */}
                <div className={style["wrapper"]}>
                    <div className={style["wrapper__section"]}>


                        {/* 본문 섹션 */}
                    
                        <div className={style["context-section"]}>
                            <div className={style["navigation"]}>
                                <div className={[style["navigation__item"], style["navigation__item--selected"]].join(" ")}>컨텐츠 분류</div>
                                <div className={style["navigation__item"]}>컨텐츠 분류</div>
                                <div className={style["navigation__item"]}>컨텐츠 분류</div>
                            </div>
                            <div className={style["box-list--beige"]}>
                            

                                <div className={style['content-box']}>
                                    <div className={[style["content-box__img"], style["content-box__img"]].join(" ")}>
                                        <img src="" alt=""/>
                                    </div>
                                    <div className={style["flex"]}>
                                        <div className={style["content-box__profile"]}>
                                            <img src="" alt=""/>
                                        </div>
                                        <div className={style["content-box__info"]}>
                                            <div className={style["title--middle"]}>컨텐츠명</div>
                                            <div className={style["stars"]}>별별별</div>
                                        </div>
                                    </div>
                                </div>

                                <div className={style['content-box']}>
                                    <div className={[style["content-box__img"], style["content-box__img"]].join(" ")}>
                                        <img src="" alt=""/>
                                    </div>
                                    <div className={style["flex"]}>
                                        <div className={style["content-box__profile"]}>
                                            <img src="" alt=""/>
                                        </div>
                                        <div className={style["content-box__info"]}>
                                            <div className={style["title--middle"]}>컨텐츠명</div>
                                            <div className={style["stars"]}>별별별</div>
                                        </div>
                                    </div>
                                </div>

                                <div className={style['content-box']}>
                                    <div className={[style["content-box__img"], style["content-box__img"]].join(" ")}>
                                        <img src="" alt=""/>
                                    </div>
                                    <div className={style["flex"]}>
                                        <div className={style["content-box__profile"]}>
                                            <img src="" alt=""/>
                                        </div>
                                        <div className={style["content-box__info"]}>
                                            <div className={style["title--middle"]}>컨텐츠명</div>
                                            <div className={style["stars"]}>별별별</div>
                                        </div>
                                    </div>
                                </div>

                                <div className={style['content-box']}>
                                    <div className={[style["content-box__img"], style["content-box__img"]].join(" ")}>
                                        <img src="" alt=""/>
                                    </div>
                                    <div className={style["flex"]}>
                                        <div className={style["content-box__profile"]}>
                                            <img src="" alt=""/>
                                        </div>
                                        <div className={style["content-box__info"]}>
                                            <div className={style["title--middle"]}>컨텐츠명</div>
                                            <div className={style["stars"]}>별별별</div>
                                        </div>
                                    </div>
                                </div>

                                <div className={style['content-box']}>
                                    <div className={[style["content-box__img"], style["content-box__img"]].join(" ")}>
                                        <img src="" alt=""/>
                                    </div>
                                    <div className={style["flex"]}>
                                        <div className={style["content-box__profile"]}>
                                            <img src="" alt=""/>
                                        </div>
                                        <div className={style["content-box__info"]}>
                                            <div className={style["title--middle"]}>컨텐츠명</div>
                                            <div className={style["stars"]}>별별별</div>
                                        </div>
                                    </div>
                                </div>

                                <div className={style['content-box']}>
                                    <div className={[style["content-box__img"], style["content-box__img"]].join(" ")}>
                                        <img src="" alt=""/>
                                    </div>
                                    <div className={style["flex"]}>
                                        <div className={style["content-box__profile"]}>
                                            <img src="" alt=""/>
                                        </div>
                                        <div className={style["content-box__info"]}>
                                            <div className={style["title--middle"]}>컨텐츠명</div>
                                            <div className={style["stars"]}>별별별</div>
                                        </div>
                                    </div>
                                </div>






                            </div>
                        </div>



                    </div>
                </div>

                        
                    
                
                </div>



        );
    }
}