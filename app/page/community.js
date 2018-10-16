import React , {Component} from 'react';
import style from './community.css';
import {Link} from 'react-router-dom';

class community extends Component{
    constructor(props){
        super(props);
        this.state={isLogin:"", type:''};
    }



    render(){
        
        const searchBarKeyPressed = function(e){
/*             const temp= e.target.value;
            setTimeout(function(temp){
                console.log(temp);
                let charLength=0;
                for(let i=0; i< temp.length; i++){ // 글자수 체크
                    if(escape(temp.charAt(i)).length > 4){
                        charLength +=2;
                        
                    }else{
                        charLength+=1;
                    }
                }
                document.querySelector("#searchBar").size = charLength+1;
                console.log(charLength);
            },10,temp); */

            const temp= e.target.value;
            let charLength=0;
            for(let i=0; i< temp.length; i++){ // 글자수 체크
                if(escape(temp.charAt(i)).length > 4){
                    charLength +=2;
                }else{
                    charLength+=1;
                }
            }
            if(charLength>26) charLength= 31;
            else if(charLength > 20) charLength+=4;
            else if(charLength > 15) charLength+=3;
            else if(charLength > 10) charLength+=2;
            else{
                charLength+=1;
            }

            e.target.size = charLength;
        }

        return(
        
            <div className={style.wrapper}>
                <div className={style.bannerWrapper}>
                   <div className={style.boardTableWrapper}>

                    <div className={[style.tableItem, style.board].join(' ')}>
                        <a href="community/board">
                            <div className={style.title}>
                                <p>강좌 소개</p>
                            </div>
                            <ul className={style.postList}>
                                <li><a href="">[칼럼] 세계의 코딩 교육</a></li>
                                <li><a href="">소프트웨어, 코딩 교육은</a></li>
                                <li><a href="">바뀌지 않는 세계의 흐름...</a></li>
                            </ul>
                        </a>
                    </div>
                    <div className={[style.tableItem, style.empty].join(' ')}></div>
                    <div className={[style.tableItem, style.board].join(' ')}>
                        <a href="community/board">
                            <div className={style.title}>
                                <p>컨텐츠 리뷰</p>
                            </div>
                            <ul className={style.postList}>
                                <li><a href="">[칼럼] 세계의 코딩 교육</a></li>
                                <li><a href="">소프트웨어, 코딩 교육은</a></li>
                                <li><a href="">바뀌지 않는 세계의 흐름...</a></li>
                            </ul>
                        </a>
                    </div>
                        
                    <div className={[style.tableItem, style.empty].join(' ')}></div>
                    <div className={[style.tableItem, style.orange].join(' ')}></div>


                    {/* 2번째 라인 */}
                    <div className={[style.tableItem, style.board].join(' ')}>
                        <a href="community/board">
                            <div className={style.title}>
                                <p>공지사항</p>
                            </div>
                            <ul className={style.postList}>
                                <li><a href="">[칼럼] 세계의 코딩 교육</a></li>
                                <li><a href="">소프트웨어, 코딩 교육은</a></li>
                                <li><a href="">바뀌지 않는 세계의 흐름...</a></li>
                            </ul>
                        </a>
                    </div>                    
                    <div className={[style.tableItem, style.board].join(' ')}>
                        <div className={style.title}>
                            <p>묻고 답하기</p>
                        </div>
                        <ul className={style.postList}>
                            <li><a href="">[칼럼] 세계의 코딩 교육</a></li>
                            <li><a href="">소프트웨어, 코딩 교육은</a></li>
                            <li><a href="">바뀌지 않는 세계의 흐름...</a></li>
                        </ul>
                    </div>                     
                    <div className={[style.tableItem, style.board, style.black].join(' ')}>
              
                        <ul className={style.postList}>
                            <li>
                                <a href="">
                                    [뉴스] 코딩과 알고리즘, 무엇이 다를까?
                                    <br/>
                                    한국에서의 알고리즘 교육
                    
                                </a>
                            </li>
                        </ul>
                    </div>    
                    <div className={[style.tableItem, style.board].join(' ')}>
                        <a href="">
                            <div className={style.title}>
                                <p>자유게시판</p>
                            </div>
                            <ul className={style.postList}>
                                <li><a href="">[칼럼] 세계의 코딩 교육</a></li>
                                <li><a href="">소프트웨어, 코딩 교육은</a></li>
                                <li><a href="">바뀌지 않는 세계의 흐름...</a></li>
                            </ul>
                        </a>
                    </div>                    
                    <div className={[style.tableItem, style.board].join(' ')}>
                        <a href="">
                            <div className={style.title}>
                                <p>마이페이지</p>
                            </div>
                            <ul className={style.postList}>
                                <li><a href="">[칼럼] 세계의 코딩 교육</a></li>
                                <li><a href="">소프트웨어, 코딩 교육은</a></li>
                                <li><a href="">바뀌지 않는 세계의 흐름...</a></li>
                            </ul>
                        </a>

                    </div>


                    {/* 3번째 라인 */}
                    <div className={[style.tableItem, style.empty].join(' ')}></div>
                    <div className={[style.tableItem, style.orange].join(' ')}></div>
                    <div className={[style.tableItem, style.board].join(' ')}>
                        <div className={style.title}>
                            <p>제안게시판</p>
                        </div>
                        <ul className={style.postList}>
                            <li><a href="">[칼럼] 세계의 코딩 교육</a></li>
                            <li><a href="">소프트웨어, 코딩 교육은</a></li>
                            <li><a href="">바뀌지 않는 세계의 흐름...</a></li>
                        </ul>
                    </div>
                    <div className={[style.tableItem, style.board].join(' ')}>
                        <div className={style.title}>
                            <p>강의 리뷰</p>
                        </div>
                        <ul className={style.postList}>
                            <li><a href="">[칼럼] 세계의 코딩 교육</a></li>
                            <li><a href="">소프트웨어, 코딩 교육은</a></li>
                            <li><a href="">바뀌지 않는 세계의 흐름...</a></li>
                        </ul>
                    </div>  
                    <a id="test" target="_blank" href="http://codmos.io/study/course">                 
                        <div className={[style.tableItem, style.image].join(' ')}>
                                <h3>테스트하러가기<span className={style.rightTag}>></span></h3>
                        </div>
                    </a>
                        
                   </div>
                </div> {/* 배너 래퍼가 끝나는 지점 */}







                <div className={style.fstBigWrapper}>
                    <div className={style.sectionWrapper}>

                        <div className={style.sectionTitle}>
                            <div className={style.title}>공지사항</div>
                            <div className={style.underline}></div>
                        </div>

                        <div className={style.noticeWrapper}> {/* 공지사항 섹션 시작 */}        
                            <div className={style.contentSection}>
                                <div className={style.newsIcon}></div>
                                <h2>[공지사항] 10월 8일 코딩의 신 우수 교육기업 TOP50 선정</h2>
                                <p>2018년 10월 8일, 한국 교육 협의회에서 주관하는 우수 교육기업에 코딩의 신이 선정되었습니다. 여러분의 뜨....   </p>
                                <div className={style.underline}></div>
                                <p className={style.date}>MON / 08 Oct 2018</p>
                                <div>
                                    <span className={style.more}>자세히</span>
                                </div>
                                <div className={style.rollingButtonList}>
                                    <div className={[style.button,style.clicked].join(' ')}></div>
                                    <div className={style.button}></div>
                                    <div className={style.button}></div>
                                    <div className={style.button}></div>
                                    <div className={style.button}></div>
                                    <div className={style.button}></div>
                                </div>

                                <div className={style.sectionUnderline}></div>
                            </div>
                        </div>

                        {/* 뉴스 섹션 시작 */}
                        <div className={style.newsWrapper}>
                            <div className={style.newsTitle}>
                                <a href="https://search.naver.com/search.naver?where=news&sm=tab_jum&query=%EC%BD%94%EB%94%A9%EA%B5%90%EC%9C%A1">
                                Latest News
                                </a>
                            </div>
                            <div className={style.lectureList}> 
                                <div className={style.lectureBox} key={"na"}>
                                    <Link to={ "/lecture/1"}>
                                        <img src={require("../resources/img/community/content/news1.png")} className={style.lectureImage} />
                                    </Link> 
                                    <div className={style.lectureTitle}>[칼럼] 세계의 코딩교육</div>
                                    <div className={style.lectureSubTitle}>자바스크립트로 웹 테트리스 만들기</div>
                                    <div className={style.underline}></div>
                                    <div className={style.lectureInfo}>
                                        <span>8 October, 2018</span>
                                    </div>
                                </div>

                                <div className={style.verticalBar}></div>

                                <div className={style.lectureBox} key={"na"}>
                                    <Link to={ "/lecture/1"}>
                                        <img src={require("../resources/img/community/content/news2.png")} className={style.lectureImage} />
                                    </Link> 
                                    <div className={style.lectureTitle}>[칼럼] 세계의 코딩교육</div>
                                    <div className={style.lectureSubTitle}>자바스크립트로 웹 테트리스 만들기</div>
                                    <div className={style.underline}></div>
                                    <div className={style.lectureInfo}>
                                        <span>8 October, 2018</span>
                                    </div>
                                </div>

                                <div className={style.verticalBar}></div>

                                <div className={style.lectureBox} key={"na"}>
                                    <Link to={ "/lecture/1"}>
                                        <img src={require("../resources/img/community/content/news3.png")} className={style.lectureImage} />
                                    </Link> 
                                    <div className={style.lectureTitle}>[칼럼] 세계의 코딩교육</div>
                                    <div className={style.lectureSubTitle}>자바스크립트로 웹 테트리스 만들기</div>
                                    <div className={style.underline}></div>
                                    <div className={style.lectureInfo}>
                                        <span>8 October, 2018</span>
                                    </div>
                                </div>

                                <div className={style.verticalBar}></div>

                                <div className={style.lectureBox} key={"na"}>
                                    <Link to={ "/lecture/1"}>
                                        <img src={require("../resources/img/community/content/news4.png")} className={style.lectureImage} />
                                    </Link> 
                                    <div className={style.lectureTitle}>[칼럼] 세계의 코딩교육</div>
                                    <div className={style.lectureSubTitle}>자바스크립트로 웹 테트리스 만들기</div>
                                    <div className={style.underline}></div>
                                    <div className={style.lectureInfo}>
                                        <span>8 October, 2018</span>
                                    </div>
                                </div>
                            </div>  {/* lecture List 끝 */}
                        </div>
                        <div className={style.plusButton}>
                            <button onClick=""/>
                        </div>


                    </div>{/* 1st section Wrapper 끝 */}

                </div>
 

                <div className={style.secBigWrapper}>
                    <div className={style.sectionWrapper}>
                        <div className={style.sectionTitle}>
                            <div className={style.title}>콘텐츠 리뷰</div>
                            <div className={style.underline}></div>
                        </div> 
                        <div className={style.reviewPhrase}>
                            여러강의들을 경험해본 선배들이 스스로 제작한 컨텐츠와
                            <br/>
                            1:1실시간 과외를 받아본 솔직한 리뷰까지!
                        </div>
                        <div className={style.reviewBoxList}>
                            <div className={style.boxItem}>
                                <div className={style.boxItemTop}>
                                    <img src={require("../resources/img/community/content/content1.png")} alt=""/>
                                </div>
                                <div className={style.boxItemBottom}>
                                    <p>정보올림피아드 대비</p>
                                    <p>273 문제</p>
                                </div>
                            </div>
                            <div className={style.boxItem}>
                                <div className={style.boxItemTop}>
                                    <img src={require("../resources/img/community/content/content2.png")} alt=""/>
                                </div>
                                <div className={style.boxItemBottom}>
                                    <p>정보올림피아드 대비</p>
                                    <p>273 문제</p>
                                </div>
                            </div>
                            <div className={style.boxItem}>
                                <div className={style.boxItemTop}>
                                    <img src={require("../resources/img/community/content/content3.png")} alt=""/>
                                </div>
                                <div className={style.boxItemBottom}>
                                    <p>정보올림피아드 대비</p>
                                    <p>273 문제</p>
                                </div>
                            </div>
                            <div className={style.boxItem}>
                                <div className={style.boxItemTop}>
                                    <img src={require("../resources/img/community/content/content4.png")} alt=""/>
                                </div>
                                <div className={style.boxItemBottom}>
                                    <p>정보올림피아드 대비</p>
                                    <p>273 문제</p>
                                </div>
                            </div>
                        </div> {/* 리뷰 박스 리스트 끝 */}

                        <div className={style.plusButton}>
                            <button onclick=""/>
                        </div>
                    </div>{/* 2nd section Wrapper 끝 */}
                </div>

                <div className={[style.sectionWrapper, style.questionWrapper].join(' ')}>
                    <div className={style.sectionTitle}>
                        <div className={style.title}>묻고 답하기</div>
                        <div className={[style.underline, style.search].join(' ')}></div>
                    </div> 
                </div>

                <div className={style.searchBar}>{/* 검색 창 */}
                    <input id="searchBar" onInput={searchBarKeyPressed} type="text" size="1"/>
                    <div className={style.searchIcon}></div>
                </div>

                <div className={[style.sectionWrapper, style.answerWrapper].join(' ')}>
                    <div className={style.searchResultBox}>
                        <div className={style.title}>Search Result</div>
                        <div className={style.underline}></div>
                        <ul className={style.resultList}>
                            <li>강의실</li>
                            <li className={style.highlight}>강의실 접속 오류</li>
                            <li>접속 오류</li>
                        </ul>
                    </div> 
                    <div className={style.resultListBox}>
                        <div className={style.resultItem}>
                            <p>
                                강의실 접속하는 버튼을 못 찾겠어요.
                            </p>
                        </div>
                        <div className={style.resultItem}>
                            <p>
                                <span>
                                    강의실을 접속하면 아무것도 안뜨는데
                                    <br/>어떻게 해야하나요? 
                                </span>
                            </p>
                        </div>
                        <div className={style.resultItem}>
                            <p>
                                <span>
                                    인터넷으로 버튼을 눌러도 강의실 접속이
                                    <br/>안되는 오류가 발생합니다.
                                </span>
                            </p>
                        </div>
                    </div>


                </div>{/* 3nd section Wrapper 끝 */}

                <div className={style.secBigWrapper}>
                    <div className={[style.sectionWrapper, style.freeBoardWrapper].join(' ')}>
                        <div className={style.sectionTitle}>
                            <div className={style.title}>자유 게시판</div>
                            <div className={style.underline}></div>
                        </div> 

                        <div className={[style.sectionUnderline, style.wideUnderline].join(' ')}></div>

                        <div className={style.freeBoardList}>
                            <div className={[style.imageItem, style.noImageItem].join(' ')}>
                                <p className={style.context}>
                                코딩 입문자, 어떤 언어부터 배워야 할까? 프로그래밍을 처음 배우려는 사람들이 마주하는 첫 번째 ‘난관’이 있다. 공부할 프로그래밍 언어를 고르는 일이다. 외국어를 배울 때 영어, 중국어, 아랍어 등을 동시에 익히기 어려운 것처럼 일단 어떤 언어를 배울 지 생각해야 하기 때문이다. 개발자가 주로 사용하는 프로그래밍 언어는 C, C#, 

                                
                                </p>
                                <div className={[style.underline, style.compactUnderline].join(' ')}></div>
                                <p className={style.date}>
                                    Oct 09
                                </p>
                            </div>

                            <div className={style.verticalBar}></div>

                            <div className={style.imageItem}>
                                <img src={require("../resources/img/community/content/free1.png")} alt="사진"/>
                                <p className={style.context}>
                                ‘생활코딩’이라는 프로그래밍 교육 프로그램을 운영하는 개발자 이고잉은 “자신이 하고자 하는 일이 무엇인가에 달렸다”라고 말한다. 기본기가 쌓고 싶은 건지, 당장 유용한 결과물을 만들어 내고 싶은지, 결과물을 만들고 싶다면 어떤 종류의 결과물을 원하는지에 따라 배워야 할 언어가 다 다르기 때문이다.
                                </p>
                                <div className={[style.underline, style.compactUnderline].join(' ')}></div>
                                <p className={style.date}>
                                    Oct 09
                                </p>
                            </div>

                            <div className={style.verticalBar}></div>

                            <div className={style.imageItem}>
                                <img src={require("../resources/img/community/content/free2.png")} alt="사진"/>
                                <p className={style.context}>
                                예전에 “IT 개발자, 직업으로 괜찮은가?”라는 제목의 글을 적으며, 프로그래밍이 즐거운 이유 세 가지를 꼽은 적이 있습니다. 제 얘기보다는 훨씬 더 믿음
                                </p>
                                <div className={[style.underline, style.compactUnderline].join(' ')}></div>
                                <p className={style.date}>
                                    Oct 09
                                </p>
                            </div>
                            <div className={style.imageItem}>
                                <img src={require("../resources/img/community/content/free1.png")} alt="사진"/>
                                <p className={style.context}>
                                예전에 “IT 개발자, 직업으로 괜찮은가?”라는 제목의 글을 적으며, 프로그래밍이 즐거운 이유 세 가지를 꼽은 적이 있습니다. 제 얘기보다는 훨씬 더 믿음
                                </p>
                                <div className={[style.underline, style.compactUnderline].join(' ')}></div>
                                <p className={style.date}>
                                    Oct 09
                                </p>
                            </div>

                            <div className={style.verticalBar}></div>

                            <div className={[style.imageItem,style.noImageItem].join(' ')}>
                                <p className={style.context}>
                                코딩 입문자, 어떤 언어부터 배워야 할까? 프로그래밍을 처음 배우려는 사람들이 마주하는 첫 번째 ‘난관’이 있다. 공부할 프로그래밍 언어를 고르는 일이다. 외국어를 배울 때 영어, 중국어, 아랍어 등을 동시에 익히기 어려운 것처럼 일단 어떤 언어를 배울 지 생각해야 하기 때문이다. 개발자가 주로 사용하는 프로그래밍 언어는 C, C#, 

                                </p>
                                <div className={[style.underline, style.compactUnderline].join(' ')}></div>
                                <p className={style.date}>
                                    Oct 09
                                </p>
                            </div>

                            <div className={style.verticalBar}></div>

                            <div className={style.imageItem}>
                                <img src={require("../resources/img/community/content/free2.png")} alt="사진"/>
                                <p className={style.context}>
                                ‘생활코딩’이라는 프로그래밍 교육 프로그램을 운영하는 개발자 이고잉은 “자신이 하고자 하는 일이 무엇인가에 달렸다”라고 말한다. 기본기가 쌓고 싶은 건지, 당장 유용한 결과물을 만들어 내고 싶은지, 결과물을 만들고 싶다면 어떤 종류의 결과물을 원하는지에 따라 배워야 할 언어가 다 다르기 때문이다.
                                </p>
                                <div className={[style.underline, style.compactUnderline].join(' ')}></div>
                                <p className={style.date}>
                                    Oct 09
                                </p>
                            </div>
                        </div>

                    </div>{/* 4nd section Wrapper 끝 */}
                </div>



            </div>
        );
    }
}

export default community;
