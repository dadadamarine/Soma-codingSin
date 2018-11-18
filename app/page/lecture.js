import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import * as service from '../request/lecture';
import { Segment, Input, Button, Divider } from 'semantic-ui-react';
import style from './lecture.css';
import * as cookie from '../util/cookie';

export default class lecture extends Component {
    constructor(props) {
        super(props);
        this.state = {isLogin:cookie.getCookie('user'), type:'', list:[], cursor:0};
        const curosr = this;
        service.getType().then(function (res) {
            curosr.setState({ type: res.data });
        }).catch(function (error) {
            alert('error massage : '+error);
        });
        this.changeBanner1 = this.changeBanner1.bind(this);
        this.changeBanner2 = this.changeBanner2.bind(this);
        this.changeBanner3 = this.changeBanner3.bind(this);
        this.changeBanner4 = this.changeBanner4.bind(this);
        this.changeBanner5 = this.changeBanner5.bind(this);
        this.leftClick = this.leftClick.bind(this);
        this.rightClick = this.rightClick.bind(this);
    }
   componentDidMount(){
        const cursor =this;
        service.lectureList().then(function (res) {
            cursor.setState({list:res.data});
            document.querySelector("."+style.bannerWrapper).style.background="url('"+cursor.state.list[0].img+"')";
            document.querySelector("."+style.bannerWrapper).style.backgroundSize="cover";
            document.querySelector("."+style.bannerWrapper).style.backgroundPosition="center";
        }).catch(function (error) {
            alert('error massage : '+error);
        });
    }
    leftClick(e){
        let cur=this.state.cursor;
        let tmp=cur-1<0?4:cur-1;
        if(tmp==0) this.changeBanner1.call();
        else if(tmp==1) this.changeBanner2.call();
        else if(tmp==2) this.changeBanner3.call();
        else if(tmp==3) this.changeBanner4.call();
        else if(tmp==4) this.changeBanner5.call();
    }
    rightClick(e){
        let cur=this.state.cursor;
        let tmp=cur+1>4?0:cur+1;
        if(tmp==0) this.changeBanner1.call();
        else if(tmp==1) this.changeBanner2.call();
        else if(tmp==2) this.changeBanner3.call();
        else if(tmp==3) this.changeBanner4.call();
        else if(tmp==4) this.changeBanner5.call();
    }
    changeBanner1(e){
        this.setState({cursor:0});
        document.querySelector("."+style.bannerWrapper).style.background="url('"+this.state.list[0].img+"')";
        document.querySelector("."+style.bannerWrapper).style.backgroundSize="cover";
        document.querySelector("."+style.bannerWrapper).style.backgroundPosition="center";
        document.querySelectorAll("."+style.dotList+" li").forEach(function(e, i){
            if(i==0) e.setAttribute("class",style.selected);
            else e.removeAttribute('class');
        });
        document.querySelectorAll("."+style.imgListItem+" div").forEach(function(e, i){
            if(i==0) e.setAttribute("class", [style.image, style.selected].join(' '));
            else {
                e.removeAttribute('class');
                e.setAttribute("class", style.image);
            }
        });
    }
    changeBanner2(e){
        this.setState({cursor:1});
        document.querySelector("."+style.bannerWrapper).style.background="url('"+this.state.list[1].img+"')";
        document.querySelector("."+style.bannerWrapper).style.backgroundSize="cover";
        document.querySelector("."+style.bannerWrapper).style.backgroundPosition="center";
        document.querySelectorAll("."+style.dotList+" li").forEach(function(e, i){
            if(i==1) e.setAttribute("class",style.selected);
            else e.removeAttribute('class');
        });
        document.querySelectorAll("."+style.imgListItem+" div").forEach(function(e, i){
            if(i==1) {
                e.removeAttribute('class');
                e.setAttribute("class", [style.image, style.selected].join(' '));
            }
            else {
                e.removeAttribute('class');
                e.setAttribute("class", style.image);
            }
        });
    }
    changeBanner3(e){
        this.setState({cursor:2});
        document.querySelector("."+style.bannerWrapper).style.background="url('"+this.state.list[2].img+"')";
        document.querySelector("."+style.bannerWrapper).style.backgroundSize="cover";
        document.querySelector("."+style.bannerWrapper).style.backgroundPosition="center";
        document.querySelectorAll("."+style.dotList+" li").forEach(function(e, i){
            if(i==2) e.setAttribute("class",style.selected);
            else e.removeAttribute('class');
        });
        document.querySelectorAll("."+style.imgListItem+" div").forEach(function(e, i){
            if(i==2) e.setAttribute("class", [style.image, style.selected].join(' '));
            else {
                e.removeAttribute('class');
                e.setAttribute("class", style.image);
            }
        });
    }
    changeBanner4(e){
        this.setState({cursor:3});
        document.querySelector("."+style.bannerWrapper).style.background="url('"+this.state.list[3].img+"')";
        document.querySelector("."+style.bannerWrapper).style.backgroundSize="cover";
        document.querySelector("."+style.bannerWrapper).style.backgroundPosition="center";
        document.querySelectorAll("."+style.dotList+" li").forEach(function(e, i){
            if(i==3) e.setAttribute("class",style.selected);
            else e.removeAttribute('class');
        });
        document.querySelectorAll("."+style.imgListItem+" div").forEach(function(e, i){
            if(i==3) e.setAttribute("class", [style.image, style.selected].join(' '));
            else {
                e.removeAttribute('class');
                e.setAttribute("class", style.image);
            }
        });
    }
    changeBanner5(e){
        this.setState({cursor:4});
        document.querySelector("."+style.bannerWrapper).style.background="url('"+this.state.list[4].img+"')";
        document.querySelector("."+style.bannerWrapper).style.backgroundSize="cover";
        document.querySelector("."+style.bannerWrapper).style.backgroundPosition="center";
        document.querySelectorAll("."+style.dotList+" li").forEach(function(e, i){
            if(i==4) e.setAttribute("class",style.selected);
            else e.removeAttribute('class');
        });
        document.querySelectorAll("."+style.imgListItem+" div").forEach(function(e, i){
            if(i==4) e.setAttribute("class", [style.image, style.selected].join(' '));
            else {
                e.removeAttribute('class');
                e.setAttribute("class", style.image);
            }
        });
    }

    render() {


        return (
            
            <div className={style.wrapper}>
                <div className={style.bannerWrapper}>

                    <div className={style.left} >
                        <div className={style.button} onClick={this.leftClick}></div>
                    </div>
                    
                    {/* 여기부터 배너의 중간 컨텐츠들 */}
                    <div className={style.content}>
                        <div className={style.topSection}>
                            <div className={style.mainPhrase}></div>
                            <div className={style.bgSelectorList}>
                                
                                <ul className={style.dotList}>
                                    <li className={style.selected}></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                                
                                <ul className={style.imgList}>
                                    <li className={style.imgListItem} onClick={this.changeBanner1}>
                                        <div className={[style.image, style.selected].join(' ')}>
                                            {/* <img src={this.state.list[0].img} alt=""/> */}
                                            <img src={require('../resources/img/lecture/banner/top/top1.png')} />
                                        </div>
                                        <p>추천 과외 No.1</p>
                                    </li>
                                    <li className={style.imgListItem} onClick={this.changeBanner2}>
                                        <div className={style.image}>
                                            {/* <img src={this.state.list[1].img} alt=""/> */}
                                            <img src={require('../resources/img/lecture/banner/top/top2.png')} />
                                        </div>
                                        <p>추천 과외 No.2</p>
                                    </li>
                                    <li className={style.imgListItem} onClick={this.changeBanner3}>
                                        <div className={style.image}>
                                            {/* <img src={this.state.list[2].img} alt=""/> */}
                                            <img src={require('../resources/img/lecture/banner/top/top3.png')} />
                                        </div>
                                        <p>추천 과외 No.3</p>
                                    </li>
                                    <li className={style.imgListItem} onClick={this.changeBanner4}>
                                        <div className={style.image}>
                                            {/* <img src={this.state.list[3].img} alt=""/> */}
                                            <img src={require('../resources/img/lecture/banner/top/top4.png')} />
                                        </div>
                                        <p>추천 과외 No.4</p>
                                    </li>
                                    <li className={style.imgListItem} onClick={this.changeBanner5}>
                                        <div className={style.image}>
                                            {/* <img src={this.state.list[4].img} alt=""/> */}
                                            <img src={require('../resources/img/lecture/banner/top/top5.png')} />
                                        </div>
                                        <p>추천 과외 No.5</p>
                                    </li>
                                </ul>

                            </div>
                        </div>
                        <div className={style.rowLine}></div>
                        <div className={style.bottomSection}>
                            <div className={style.title}><p>레벨별 강좌선택</p></div>
                            <div className={style.levelSelectorList}>
                                <div className={[style.listItem, style.selected].join(' ')}>
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
                                    <h3>테스트 하러가기<span className={style.rightTag}>></span></h3>
                                </div>
                            
                            </div>
                        </div>
                    </div>

                    {/* 배너의 오른쪽 버튼 */}
                    <div className={style.right}>
                        <div className={style.button} onClick={this.rightClick}></div>
                    </div>
                
                </div>{/* 배너 래퍼가 끝나는 지점. */}

                <div className={style.newsSection}> 
                    <div className={style.sectionTitle}>
                        <div className={style.title}>N E W</div>
                        <div className={style.underline}></div>
                    </div>

                    <div className={style.newsIcon}>
                        <img src={require('../resources/img/lecture/section1/newsIcon.png')} alt=""/>    
                    </div>
                    <div className={style.newsContext}>
                        <p>전에 알지못한 중요성을 콕 콕 찝어서 잘 알려주고 그리고 코드만 보면 이해...</p>
                    </div>
                    <div className={[style.underline, style.newsUnderline].join(' ')}></div>
                    <div className={style.newsTitle}>
                        <p>KCI / 3일 파이썬 정복 과외 甲</p>
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
                </div>{/* 뉴스 섹션이 끝나는 지점. */}
                
                
                <div className={style.lectureWrapper}>
                <div className={style.titleSection}> {/* 강의 타이틀 시작 */}
                    <div className={style.title}>
                        <div className={style.verticalBar}></div>
                        <a>신규과외</a>
                    </div>
                </div>


                    {/* 강의 컨텐츠 시작 */}

                    <div className={style.lectureList}> 
                    {this.state.list!=[]?this.state.list.map((lecture, i) => {
                        let url = "/lecture/"+lecture._id;
                        return (
                        <div style={{display:'flex'}}>
                            <div className={style.lectureBox} key={i} onClick={function(e){location.href=url}}>
                                <div className="lectureImage">
                                    <img src={lecture.img==null?require('../resources/img/logo.png'):lecture.img} className={style.lectureImage} />
                                </div>
                                <div className={style.lectureName}>{lecture.title}</div>
                                <div className={style.lectureInfo}>
                                    <span>{lecture.name}</span> / <span>{lecture.price}</span>
                                </div>
                                <div className={style.lectureInfo}>
                                    <span>{lecture.schedule}</span>
                                </div>
                                </div>
                            {i%4==3?null:<div className={style.verticalBar}></div>}
                        </div>);
                    }):null}
                    </div>

                    <div className={style.plusButton}></div>

                
                </div>{/* lecture Wrapper 끝 */}
                { this.state.type=="강사" ?<Link to="/lectureReg"><div className={style.register}><div className={style.textWrapper}>과외등록</div></div></Link>:null}</div>
        );
    }
}