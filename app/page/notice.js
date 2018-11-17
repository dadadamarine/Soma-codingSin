import React ,{Component} from "react";
import style from "./notice.css";
import community from "./community";

export default class notice extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className={style.wrap}>
                <div className={style.wrapper}>
                    <div className={style.banner}>
                        <div className={style.banner__description}>
                            <p>
                            코딩의 신은 온라인 코딩 과외 플랫폼입니다.<br/>
                                코딩의 신은 온라인 코딩 과외 플랫폼입니다.코딩의 신은 온라인 코딩 과외 플랫폼입니다.
                            </p>
                        </div>
                        <div className={style.banner__category}>
                            <div>
                                <a href="/">Home</a>
                                <a href="/community">커뮤니티</a>
                                <a href="/community/notice">공지사항</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={style.wrapper}>
                    <div className={style["wrapper__section"]}>
                        <div className={style.flex}>
                            <div className={style["title"]}>
                                <div>
                                    <h2>코딩의 신</h2>
                                    <p className={style["sub-title"]}>공지사항</p>
                                </div>
                            </div>
                            <div>
                                <div className={[style["community-banner"], style["flex"]].join(" ")}>
                                    <a href=""><div className={style["community-banner__item"]}> 자유게시판 </div></a>
                                    <a href=""><div className={style["community-banner__item"]}> 제안 및 건의 </div></a>
                                    <a href=""><div className={style["community-banner__item"]}> 컨텐츠 리뷰 </div></a>
                                    <a href=""><div className={style["community-banner__item"]}> 묻고 답하기 </div></a>
                                    <a href=""><div className={[style["community-banner__item"], style["community-banner__item--selected"]].join(" ")}> 공지사항 </div></a>
                                </div>

                                <ul className={style["community-list"]}>
                                    <li className={style["community-list__head"]}>
                                        <p>내용</p>
                                        <p>등록일</p>
                                    </li>
                                    
                                    <li className={style["community-list__item"]}>
                                        <a href="">개인정보 처리방침 계정안내</a>
                                        <p>2018-11-07</p>
                                    </li>
                                    <li className={style["community-list__item"]}>
                                        <a href="">개인정보 이전 안내</a>
                                        <p>2018-11-01</p>
                                    </li>
                                    <li className={style["community-list__item"]}>
                                        <a href=""> [안내]계정을 안전하게 지키는 TIP! </a>
                                        <p>2018-11-01</p>
                                    </li>
                                </ul> 
                                <div className={[style["flex--center"], style["height--eight"]].join(" ")}>
                                    <div className={style["page-selector"]}>
                                        <div className={style["page-selector__arrow"]}>≪</div>
                                        <div className={style["page-selector__arrow"]}>
                                        ＜  
                                        </div>
                                        <div className={style["page-selector__num"]}>
                                            <a href="" className={style.selected}>1</a>
                                            <a href="">2</a>
                                            <a href="">3</a>
                                            <a href="">4</a>
                                            <a href="">5</a>
                                            <a href="">6</a>
                                            <a href="">7</a>
                                            <a href="">8</a>
                                            <a href="">9</a>
                                            <a href="">10</a>
                                        </div>
                                        <div className={style["page-selector__arrow"]}>
                                        ＞
                                        </div>
                                        <div className={style["page-selector__arrow"]}>
                                        ≫
                                        </div>
                                    </div>
                                </div>
                                
                                <div className={style["flex--center"]}>
                                    <div className={style["search"]}>
                                        12
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