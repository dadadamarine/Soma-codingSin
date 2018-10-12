import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import * as service from '../request/lecture';
import { Segment, Input, Button, Divider } from 'semantic-ui-react';
import style from './lecture.css';
import * as cookie from '../util/cookie';

export default class lecture extends Component {
    constructor(props) {
        super(props);
        /* this.state = {isLogin:cookie.getCookie('user'), type:'', list:[]}; */
        this.state = {isLogin:"teacher", type:'강사',list:[]};
        const curosr = this;
/*         service.getType().then(function (res) {
            curosr.setState({ type: res.data });
        }).catch(function (error) {
            alert('error massage : '+error);
        }); */
    }
   /*  componentDidMount(){
        const curosr =this;
        service.lectureList().then(function (res) {
            curosr.setState({list:res.data});
            console.log(res.data);
        }).catch(function (error) {
            alert('error massage : '+error);
        });
    } */
    
    render() {
        return (
            <div className={style.wrapper}>
                <div className={style.bannerWrapper}>

                    <div className={style.left}>
                        <div className={style.button}></div>
                    </div>
                    
                    {/* 여기부터 배너의 중간 컨텐츠들 */}
                    <div className={style.content}>
                        <div className={style.topSection}>
                            <div className={style.mainPhrase}>
                               넌지금공부가땡긴다 
                            </div>
                            <div className={style.bgSelectorList}>
                                
                                <ul className={style.dotList}>
                                    <li className={style.selected}></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                                
                                <ul className={style.imgList}>
                                    <li className={style.imgListItem}>
                                        <div className={style.image}></div>
                                        <p>공부가 땡긴다</p>
                                    </li>
                                    <li className={style.imgListItem}>
                                        <div className={style.image}></div>
                                        <p>공부가 땡긴다</p>
                                    </li>
                                    <li className={style.imgListItem}>
                                        <div className={style.image}></div>
                                        <p>공부가 땡긴다</p>
                                    </li>
                                    <li className={style.imgListItem}>
                                        <div className={style.image}></div>
                                        <p>공부가 땡긴다</p>
                                    </li>
                                    <li className={style.imgListItem}>
                                        <div className={style.image}></div>
                                        <p>공부가 땡긴다</p>
                                    </li>
                                </ul>

                            </div>
                        </div>
                        <div className={style.rowLine}></div>
                        <div className={style.bottomSection}>
                            <div><p>레벨별 강좌선택</p></div>
                            <div className={style.levelSelectorList}>
                                <div className={style.listItem}>
                                    <h3>초급</h3>
                                    <p>초급강의에 대한 내용을 적는 칸입니다. 두줄 예상</p>
                                </div>
                                <div className={style.listItem}>
                                    <h3>중급</h3>
                                    <p>초급강의에 대한 내용을 적는 칸입니다. 두줄 예상</p>
                                </div>
                                <div className={style.listItem}>
                                    <h3>고급</h3>
                                    <p>초급강의에 대한 내용을 적는 칸입니다. 두줄 예상</p>
                                </div>
                                <div className={style.listItem}>
                                    <h3>고급</h3>
                                    <p>초급강의에 대한 내용을 적는 칸입니다. 두줄 예상</p>
                                </div>
                            
                            </div>
                        </div>
                    </div>

                    {/* 배너의 오른쪽 버튼 */}
                    <div className={style.right}>
                        <div className={style.button}></div>
                    </div>
                
                </div>{/* 배너 래퍼가 끝나는 지점. */}


                <div className={style.lectureWrapper}>
                    <div className={style.titleSection}> {/* 강의 타이틀 시작 */}
                        <div className={style.title}>
                            <a href="">추천강의</a>
                            <img src="../resources/img/main20/blank.jpg" />
                        </div>
                        <div><a>최신순</a></div>
                        <div><a>리뷰순</a></div>
                        <div><a>별점순</a></div>
                        <div className={style.gridButton}><img src="../resources/img/main20/blank.jpg" /></div>
                    </div>
                    {/* 강의 컨텐츠 시작 */}
                        
                    <div className={style.lectureList}> 
                        <div className={style.lectureBox} key={"na"}>
                            <div className="lectureImage">
                                <Link to={ "/lecture/1"}>
                                   <img className={style.lectureImage} />
                                </Link> 
                            </div>
                            <div className={style.lectureName}>자바스크립트로 웹 테트리스 만들기</div>
                            <div className={style.lectureInfo}>
                                <span>velopert</span>/ <span>월~ 금 3시</span><span>300,000원</span>
                            </div>
                        </div>
                        
                        <div className={style.lectureBox} key={"na"}>
                            <div className="lectureImage">
                                <Link to={ "/lecture/1"}>
                                   <img className={style.lectureImage} />
                                </Link> 
                            </div>
                            <div className={style.lectureName}>자바스크립트로 웹 테트리스 만들기</div>
                            <div className={style.lectureInfo}>
                                <span>velopert</span>/ <span>월~ 금 3시</span><span>300,000원</span>
                            </div>
                        </div>
                        <div className={style.lectureBox} key={"na"}>
                            <div className="lectureImage">
                                <Link to={ "/lecture/1"}>
                                   <img className={style.lectureImage} />
                                </Link> 
                            </div>
                            <div className={style.lectureName}>자바스크립트로 웹 테트리스 만들기</div>
                            <div className={style.lectureInfo}>
                                <span>velopert</span>/ <span>월~ 금 3시</span><span>300,000원</span>
                            </div>
                        </div>
                        <div className={style.lectureBox} key={"na"}>
                            <div className="lectureImage">
                                <Link to={ "/lecture/1"}>
                                   <img className={style.lectureImage} />
                                </Link> 
                            </div>
                            <div className={style.lectureName}>자바스크립트로 웹 테트리스 만들기</div>
                            <div className={style.lectureInfo}>
                                <span>velopert</span>/ <span>월~ 금 3시</span>/ <span>300,000원</span>
                            </div>
                        </div>

                        
                    </div>  {/* lecture List 끝 */}
                    <div className={style.plusButton}>
                            <button onclick=""/>
                        </div>

                
                </div>{/* lecture Wrapper 끝 */}



                                <div className={style.lectureWrapper}>
                    <div className={style.titleSection}> {/* 강의 타이틀 시작 */}
                        <div className={style.title}>
                            <a>추천강의</a>
                            <img src="../resources/img/main20/blank.jpg" />
                        </div>
                        <div><a>최신순</a></div>
                        <div><a>리뷰순</a></div>
                        <div><a>별점순</a></div>
                        <div className={style.gridButton}><img src="../resources/img/main20/blank.jpg" /></div>
                    </div>
                    {/* 강의 컨텐츠 시작 */}
                        
                    <div className={style.lectureList}> 
                        <div className={style.lectureBox} key={"na"}>
                            <div className="lectureImage">
                                <Link to={ "/lecture/1"}>
                                   <img className={style.lectureImage} />
                                </Link> 
                            </div>
                            <div className={style.lectureName}>자바스크립트로 웹 테트리스 만들기</div>
                            <div className={style.lectureInfo}>
                                <span>velopert</span>/ <span>월~ 금 3시</span><span>300,000원</span>
                            </div>
                        </div>
                        
                        <div className={style.lectureBox} key={"na"}>
                            <div className="lectureImage">
                                <Link to={ "/lecture/1"}>
                                   <img className={style.lectureImage} />
                                </Link> 
                            </div>
                            <div className={style.lectureName}>자바스크립트로 웹 테트리스 만들기</div>
                            <div className={style.lectureInfo}>
                                <span>velopert</span>/ <span>월~ 금 3시</span><span>300,000원</span>
                            </div>
                        </div>
                        <div className={style.lectureBox} key={"na"}>
                            <div className="lectureImage">
                                <Link to={ "/lecture/1"}>
                                   <img className={style.lectureImage} />
                                </Link> 
                            </div>
                            <div className={style.lectureName}>자바스크립트로 웹 테트리스 만들기</div>
                            <div className={style.lectureInfo}>
                                <span>velopert</span>/ <span>월~ 금 3시</span><span>300,000원</span>
                            </div>
                        </div>
                        <div className={style.lectureBox} key={"na"}>
                            <div className="lectureImage">
                                <Link to={ "/lecture/1"}>
                                   <img className={style.lectureImage} />
                                </Link> 
                            </div>
                            <div className={style.lectureName}>자바스크립트로 웹 테트리스 만들기</div>
                            <div className={style.lectureInfo}>
                                <span>velopert</span>/ <span>월~ 금 3시</span>/ <span>300,000원</span>
                            </div>
                        </div>

                        
                    </div>  {/* lecture List 끝 */}
                    <div className={style.plusButton}>
                            <button onclick=""/>
                        </div>

                
                </div>{/* lecture Wrapper 끝 */}



                                <div className={style.lectureWrapper}>
                    <div className={style.titleSection}> {/* 강의 타이틀 시작 */}
                        <div className={style.title}>
                            <a>추천강의</a>
                            <img src="../resources/img/main20/blank.jpg" />
                        </div>
                        <div><a>최신순</a></div>
                        <div><a>리뷰순</a></div>
                        <div><a>별점순</a></div>
                        <div className={style.gridButton}><img src="../resources/img/main20/blank.jpg" /></div>
                    </div>
                    {/* 강의 컨텐츠 시작 */}
                        
                    <div className={style.lectureList}> 
                        <div className={style.lectureBox} key={"na"}>
                            <div className="lectureImage">
                                <Link to={ "/lecture/1"}>
                                   <img className={style.lectureImage} />
                                </Link> 
                            </div>
                            <div className={style.lectureName}>자바스크립트로 웹 테트리스 만들기</div>
                            <div className={style.lectureInfo}>
                                <span>velopert</span>/ <span>월~ 금 3시</span><span>300,000원</span>
                            </div>
                        </div>
                        
                        <div className={style.lectureBox} key={"na"}>
                            <div className="lectureImage">
                                <Link to={ "/lecture/1"}>
                                   <img className={style.lectureImage} />
                                </Link> 
                            </div>
                            <div className={style.lectureName}>자바스크립트로 웹 테트리스 만들기</div>
                            <div className={style.lectureInfo}>
                                <span>velopert</span>/ <span>월~ 금 3시</span><span>300,000원</span>
                            </div>
                        </div>
                        <div className={style.lectureBox} key={"na"}>
                            <div className="lectureImage">
                                <Link to={ "/lecture/1"}>
                                   <img className={style.lectureImage} />
                                </Link> 
                            </div>
                            <div className={style.lectureName}>자바스크립트로 웹 테트리스 만들기</div>
                            <div className={style.lectureInfo}>
                                <span>velopert</span>/ <span>월~ 금 3시</span><span>300,000원</span>
                            </div>
                        </div>
                        <div className={style.lectureBox} key={"na"}>
                            <div className="lectureImage">
                                <Link to={ "/lecture/1"}>
                                   <img className={style.lectureImage} />
                                </Link> 
                            </div>
                            <div className={style.lectureName}>자바스크립트로 웹 테트리스 만들기</div>
                            <div className={style.lectureInfo}>
                                <span>velopert</span>/ <span>월~ 금 3시</span>/ <span>300,000원</span>
                            </div>
                        </div>

                        
                    </div>  {/* lecture List 끝 */}
                    <div className={style.plusButton}>
                            <button onclick=""/>
                    </div>

                
                </div>{/* lecture Wrapper 끝 */}
{/*             { this.state.type=="강사" ?<div className={style.register}><div className={style.textWrapper}><Link to="/lectureReg">과외등록</Link></div></div>:null}
*/}         </div>
        );
    }
}