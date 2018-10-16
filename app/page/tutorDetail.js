import React,{Component} from 'react';
import style from './tutorDetail.css';
import Link from 'react-router-dom';

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
                            <div className={style.selected}>소개</div>
                            <div>리뷰 페이지</div>
                            <div>개설 강의</div>
                            <div>활동 내역</div>
                        </div>

                    </div>

                
                    <div className={style.contextWrapper}>
                        <div>
                            <div className={style.verticalBar}></div>
                            <p>프로젝트</p>
                        </div>
                        <ul>
                            <li>한국건설기술연구원 방내화시험설비제어시스템 개발 참여</li>
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
                </div>
                    
            
            
            
            
            </div>

        );

    }
}

export default tutorDetail;