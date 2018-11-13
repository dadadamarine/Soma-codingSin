import React,{Component} from 'react';
import style from './tutorReview.css';

class tutorDetail extends Component{
    constructor(props){
        super(props)
        this.state={isLogin:"", type:""};
    }

    render(){
        return(
            <div className={style.wrapper}>
                <div className={style.sizeWrapper}>
                    <div className={style.phraseWrapper}>  
                        <h2>강사의 멘트를 적는 곳 입니다.</h2>
                    </div>

                    <div className={style.bannerWrapper}>
                        <div className={style.banner}>
                            <img src={require("../resources/img/tutor/tutorDetailBanner.png")} alt=""/>
                        </div>

                        <div className={style.buttonList}>
                            <a href="./detail">
                                <div>소개</div>
                            </a>
                            <a href="./review">
                                <div className={style.selected}>리뷰 페이지</div>
                            </a>
                            <a href="./lecture">
                                <div>개설 강의</div>
                            </a>
                            <a href="./activity">
                                <div>활동 내역</div>
                            </a>
                            
                            
                            
                        </div>

                    </div>
 
                    <div className={[style.sizeWrapper, style.flex].join(" ")}>
                        <div className={style["arrow--left"]}></div>
                        <div className={style["review-box"]}>
                            <div>
                                <h2 className={style["review-box__title"]}>매우 친절한 강의!</h2>
                            </div>

                            <img className={style["review-box__img"]} src={require("../resources/img/tutorDetail/review/review1.png")} alt=""/>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, illo cum quisquam placeat sapiente, sit minima iure ten</p>

                                
                        </div>
                        <div className={style["review-box"]}>
                            <div>
                                <h2 className={style["review-box__title"]}>매우 친절한 강의에요!</h2>
                            </div>
                            <ul>
                                <li>한국건설기술연구원 방내화시험설비제어시스템 개111발 참여</li>
                                <li>(주)폴리스푸드(Malaysua) 속도연동지능화 프로젝트 개발 참여</li>    
                            </ul>
                            
                            <div>
                                <div className={style.verticalBar}></div>
                                <p>경력사항</p>
                            </div>
                            <ul>
                                <li>서울대 윤리교육과 대학원</li>
                                <li>현 {"<대학생 철학교실>"} 강사</li>    
                                <li>전 김영준 국어논술 학원 전임강사</li>    

                            </ul>
                                
                        </div>
                         <div className={style["review-box"]}>
                            <div>
                                <h2 className={style["review-box__title"]}>매우 친절한 강의에요!</h2>
                            </div>
                            <ul>
                                <li>한국건설기술연구원 방내화시험설비제어시스템 개111발 참여</li>
                                <li>(주)폴리스푸드(Malaysua) 속도연동지능화 프로젝트 개발 참여</li>    
                            </ul>
                            
                            <div>
                                <div className={style.verticalBar}></div>
                                <p>경력사항</p>
                            </div>
                            <ul>
                                <li>서울대 윤리교육과 대학원</li>
                                <li>현 {"<대학생 철학교실>"} 강사</li>    
                                <li>전 김영준 국어논술 학원 전임강사</li>    

                            </ul>
                                
                        </div>
                        <div className={style["arrow--right"]}></div>
                    </div>
                </div>
                    
            
            
            
            
            </div>

        );

    }
}

export default tutorDetail;