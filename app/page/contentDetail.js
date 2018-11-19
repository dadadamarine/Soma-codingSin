import React,{Component} from 'react';
import style from './contentDetail.css';

export default class content extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className={style.wrap}>

                <div className={[style["wrapper"],style["bg-banner--opacity"]].join(" ")}>
                    <div className={style["wrapper__section"]}>
                
                        <div className={[style["flex"], style["flex--content-detail-title"]].join(" ")} >
                            <div className={[style["content-box__img"], style["content-box__img--blue"]].join(" ")}>
                                <img src="" alt=""/>
                            </div>

                            <div className={style['context']}>
                                <h2 className={style["title--big"]}> 제목 입력 부분입니다. </h2>
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
                <div className={[[style["wrapper"], style["half-beige"]].join(" ")]}>
                    <div className={style["wrapper__section"]}>


                        {/* 본문 섹션 - 메뉴바 */}
                    
                        <div className={style["content-detail-section"]}>
                            <div className={style["navigation--overlap"]}>
                                <div className={[style["navigation--overlap__item"], style["navigation--overlap__item--selected"]].join(" ")}>컨텐츠 상세보기</div>
                                <div className={style["navigation--overlap__item"]}>리뷰 보기</div>
                            </div>
                            <div className={style["navigation--overlap__bottom"]}></div>


                            <div className={style["content-play"]}></div>
                            <div className={style["content-info"]}>
                                <div className={style["content-info__profile"]}>
                                    <div>
                                        <img src="" alt=""/>
                                    </div>
                                </div>
                                <div className={style["inline-block"]}>
                                    <div className={style["float-left"]}>
                                        <p className={style["content-info__subject"]}>웹</p>
                                        <p className={style["content-info__title"]}>제목 입력 부분입니다.</p>
                                        <p className={style["content-info__maker"]}>찬둘루</p>
                                    </div>
                                    
                                    <div className={style["float-right"]}>
                                        <div className={style["content-info__source-button"]}> 소스보기</div>
                                        <p className={style["content-info__etc"]}>
                                            <span className={[style["icon"],style["icon--eye"]].join(" ")}>123123</span>
                                            <span className={[style["icon"],style["icon--star"]].join(" ")}>232</span>
                                            <span className={[style["icon"],style["icon--message"]].join(" ")}>23</span>
                                        </p>
                                    </div>
                                    
                                </div>
                            </div>
                            
                            {/* 본문 섹션 - 내용 */}








                            
                        </div>



                    </div>
                </div>

                        
                    
                
                </div>



        );
    }
}