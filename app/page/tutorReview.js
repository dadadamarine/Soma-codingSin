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
                            

                            <div className={[style["review-box__img"], style["review-box__img--2"]].join(" ")} >
                                <h2 className={style["review-box__name"]}>수강생 정O석</h2>
                            </div>

                            <p className={style["review-box__text"]}>내가 제일 좋아하는 강의는 원예나선생님의 문장확장편이다! 문장확장편 수업을 들으면서 길고 다양한 문장을 구사할수 있도록 연습할 수 있어서 너무 좋습니다ㅎㅎ 복습편으로 준비된 문장을 통해서 다양한 문장을 공부할 수있는점도 좋습</p>

                                
                        </div>
                        <div className={style["review-box"]}>
                            

                            <div className={[style["review-box__img"], style["review-box__img--1"]].join(" ")} >
                                <h2 className={style["review-box__name"]}>수강생 정O석</h2>
                            </div>

                            <p className={style["review-box__text"]}>문득 영어를 너무 놓고 있었던 제가 한심하게 느껴져서 알아보던 중에 공부를 하게 되었습니다. 아직 한달차입니다. 하지만 하루도 빠짐 없이 시간 내서 강의듣고 복습하려고 노력하고 있습니다~ 권필쌤 강의보면서 재미있게 영어 배우고 있 </p>

                                
                        </div>

                            <div className={style["review-box"]}>
                            

                            <div className={[style["review-box__img"], style["review-box__img--3"]].join(' ')} >
                                <h2 className={style["review-box__name"]}>수강생 정O석</h2>
                            </div>

                            <p className={style["review-box__text"]}>상황에 맞는 표현의 대화뿐만아니라 실제 원어민들이 말하는 문장으로 발음 연습을 할수 있어서 많은 도움이돼요! 따라하다보니 말하기뿐만아니라 연음들을 듣는 능력도 느는것 같아 뿌듯합니다^^ 외국에 나가려면 돈이 많이 들어서 늘 외 </p>

                                
                        </div>
                        <div className={style["arrow--right"]}></div>
                    </div>
                </div>
                    
            
            
            
            
            </div>

        );

    }
}

export default tutorDetail;