import React , {Component} from 'react';
import style from './community.css';
import {Link} from 'react-router-dom';

class community extends Component{
    constructor(props){
        super(props);
        this.state={isLogin:"", type:''};
    }




    render(){
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
                    <div className={[style.tableItem, style.orange].join(' ')}></div>


                    {/* 2번째 라인 */}
                    <div className={[style.tableItem, style.board].join(' ')}>
                        <div className={style.title}>
                            <p>강좌 소개</p>
                        </div>
                        <ul className={style.postList}>
                            <li><a href="">[칼럼] 세계의 코딩 교육</a></li>
                            <li><a href="">소프트웨어, 코딩 교육은</a></li>
                            <li><a href="">바뀌지 않는 세계의 흐름...</a></li>
                        </ul>
                    </div>                    
                    <div className={[style.tableItem, style.board].join(' ')}>
                        <div className={style.title}>
                            <p>강좌 소개</p>
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
                                    한국에서의 알고리즘
                    
                                </a>
                            </li>
                        </ul>
                    </div>    
                    <div className={[style.tableItem, style.board].join(' ')}>
                        <div className={style.title}>
                            <p>강좌 소개</p>
                        </div>
                        <ul className={style.postList}>
                            <li><a href="">[칼럼] 세계의 코딩 교육</a></li>
                            <li><a href="">소프트웨어, 코딩 교육은</a></li>
                            <li><a href="">바뀌지 않는 세계의 흐름...</a></li>
                        </ul>
                    </div>                    
                    <div className={[style.tableItem, style.board].join(' ')}>
                        <div className={style.title}>
                            <p>강좌 소개</p>
                        </div>
                        <ul className={style.postList}>
                            <li><a href="">[칼럼] 세계의 코딩 교육</a></li>
                            <li><a href="">소프트웨어, 코딩 교육은</a></li>
                            <li><a href="">바뀌지 않는 세계의 흐름...</a></li>
                        </ul>
                    </div>


                    {/* 3번째 라인 */}
                    <div className={[style.tableItem, style.empty].join(' ')}></div>
                    <div className={[style.tableItem, style.orange].join(' ')}></div>
                    <div className={[style.tableItem, style.board].join(' ')}>
                        <div className={style.title}>
                            <p>강좌 소개</p>
                        </div>
                        <ul className={style.postList}>
                            <li><a href="">[칼럼] 세계의 코딩 교육</a></li>
                            <li><a href="">소프트웨어, 코딩 교육은</a></li>
                            <li><a href="">바뀌지 않는 세계의 흐름...</a></li>
                        </ul>
                    </div>
                    <div className={[style.tableItem, style.board].join(' ')}>
                        <div className={style.title}>
                            <p>강좌 소개</p>
                        </div>
                        <ul className={style.postList}>
                            <li><a href="">[칼럼] 세계의 코딩 교육</a></li>
                            <li><a href="">소프트웨어, 코딩 교육은</a></li>
                            <li><a href="">바뀌지 않는 세계의 흐름...</a></li>
                        </ul>
                    </div>                    
                    <div className={[style.tableItem, style.image].join(' ')}></div>
                    
                   </div>
                </div> {/* 배너 래퍼가 끝나는 지점 */}








                <div className={style.sectionWrapper}>
                    <div className={style.noticeWrapper}> {/* 공지사항 섹션 시작 */}
                        <div className={style.noticeTitle}>
                            <div className={style.title}>공지사항</div>
                            <div className={style.underline}></div>
                        </div>                  

                        <div className={style.contentSection}>
                            <div className={style.newsIcon}></div>
                            <h2>[공지사항] 10월 8일 코딩의 신 우수 교육기업 TOP50 선정</h2>
                            <p>2018년 10월 8일, 한국 교육 협의회에서 주관하는 우수 교육기업에 코딩의 신이 선정되었습니다. 여러분의 뜨....   </p>
                            <div className={style.underline}></div>
                            <p className={style.date}>MON / 08 Oct 2018</p>
                            <span className={style.more}>자세히</span>
                            <div className={style.sectionUnderline}></div>
                        </div>
                    </div>
                    
                    {/* 뉴스 섹션 시작 */}
                    <div className={style.newsWrapper}>
                        <div className={style.newsTitle}>Latest News</div>
                        <div className={style.lectureList}> 
                            <div className={style.lectureBox} key={"na"}>
                                <div className="lectureImage">
                                    <Link to={ "/lecture/1"}>
                                    <img className={style.lectureImage} />
                                    </Link> 
                                </div>
                                <div className={style.lectureTitle}>[칼럼]세계의 코딩교육</div>
                                <div className={style.lectureSubTitle}>자바스크립트로 웹 테트리스 만들기</div>
                                <div className={style.underline}></div>
                                <div className={style.lectureInfo}>
                                    <span>8 October, 2018</span>
                                </div>
                            </div>

                            <div className={style.verticalBar}></div>

                            <div className={style.lectureBox} key={"na"}>
                                <div className="lectureImage">
                                    <Link to={ "/lecture/1"}>
                                    <img className={style.lectureImage} />
                                    </Link> 
                                </div>
                                <div className={style.lectureTitle}>[칼럼]세계의 코딩교육</div>
                                <div className={style.lectureSubTitle}>자바스크립트로 웹 테트리스 만들기</div>
                                <div className={style.underline}></div>
                                <div className={style.lectureInfo}>
                                    <span>8 October, 2018</span>
                                </div>
                            </div>

                            <div className={style.verticalBar}></div>

                            <div className={style.lectureBox} key={"na"}>
                                <div className="lectureImage">
                                    <Link to={ "/lecture/1"}>
                                    <img className={style.lectureImage} />
                                    </Link> 
                                </div>
                                <div className={style.lectureTitle}>[칼럼]세계의 코딩교육</div>
                                <div className={style.lectureSubTitle}>자바스크립트로 웹 테트리스 만들기</div>
                                <div className={style.underline}></div>
                                <div className={style.lectureInfo}>
                                    <span>8 October, 2018</span>
                                </div>
                            </div>

                            <div className={style.verticalBar}></div>

                            <div className={style.lectureBox} key={"na"}>
                                <div className="lectureImage">
                                    <Link to={ "/lecture/1"}>
                                    <img className={style.lectureImage} />
                                    </Link> 
                                </div>
                                <div className={style.lectureTitle}>[칼럼]세계의 코딩교육</div>
                                <div className={style.lectureSubTitle}>자바스크립트로 웹 테트리스 만들기</div>
                                <div className={style.underline}></div>
                                <div className={style.lectureInfo}>
                                    <span>8 October, 2018</span>
                                </div>
                            </div>
                        </div>  {/* lecture List 끝 */}
                    </div>
                    <div className={style.plusButton}>
                        <button onclick=""/>
                    </div>

                
                </div>{/* 1st section Wrapper 끝 */}


            </div>
        );
    }
}

export default community;
