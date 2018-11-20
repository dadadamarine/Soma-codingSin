import React , {Component} from 'react';
import {Redirect, Link} from 'react-router-dom';
import style from './tutor.css';
import * as cookie from '../util/cookie';
import * as service from '../request/tutor';

class tutor extends Component{
    constructor(props){
        super(props);
        this.state={
            searchValue : "" ,
            selectedTutor : null, 
            buttonClicked : [ style.selected , "","","","","",""],
            cur:0,
            list:null,
            list_view:null
        };
        let cursor =this;
        service.getTeachers().then(function (res) {
            cursor.setState({list:res.data, list_view:res.data});
        });
    }

    setList(e, num){
        //document.querySelector('.titleSection').children.className("");
        if(this.state.cur!=num){
        let arr = ["","javascript", "python"];
        arr[num] = style.selected;
        this.setState({
                buttonClicked :  arr,
                cur:num
            });
        let tmp = new Array();
        if(num==0) this.setState({
            list_view :  this.state.list
        });
        else if(this.state.list.length!=null){
            for(let i=0; i<this.state.list.length;i++){
                if(String(this.state.list[i].stack).toLowerCase().includes(this.state.buttonClicked[num])){
                    tmp.push(this.state.list[i]);
                }
            }
            this.setState({
                list_view :  tmp
            });
        }
        console.log(this.state.buttonClicked[num]);
        }
    }

    render(){
        return(
            <div styleName={style.wrapper}>
                <div className={style.bannerWrapper}>
                    <div className={style.bannerTop}>
                        <div className={style.bannerPhrase}>
                            <span>오</span>직<br/>
                            <span>당</span>신을 위해<br/>
                            <span>고</span>민하고<br/>
                            <span>고</span>뇌합니다.<br/>
                        </div>
                    </div>{/* 위쪽 배너 이미지 끝 */}
                    
                    <div className={style.bannerBottom}>
                        <div className={style.dotImage}>

                        </div>
                        <div className={style.introducePhrase}>
                            현직 개발자로 활발하게 활동하고 있는<br/>
                            <span>코딩의 신</span>의 우수한 강사진을 소개합니다.
    

                        <div className={style.searchBarWrapper}>
                            <div className ={style.inputArea}>
                            <input type="text" placeholder="강사의 이름을 입력하세요." className={style.searchBar}/>
                            <div className={style.searchIcon}></div>
                        </div>
                        
                    </div>
                        </div>
                    </div>{/* 배너 아래쪽 배치 끝 */}
                </div>{/* 배너 끝 */}
                    <div className={style.tutorListWrapper}>
                        <div className={style.titleSection}>
                            <div className={this.state.buttonClicked[0]} onClick={(e)=>this.setList(e, 0)}><a >전체보기</a></div>
                            <div className={this.state.buttonClicked[1]} onClick={(e)=>this.setList(e, 1)}><a >JavaScript</a></div>
                            <div className={this.state.buttonClicked[2]} onClick={(e)=>this.setList(e, 2)}><a >Python</a></div>
                        </div>

                        {this.state.list_view!=null?this.state.list_view.map((item, i) => {
                            return (
                            <div className={style.tutorList} key={i}>
                                <a href={"tutor/"+item._id}>
                                    <div className={style.tutorBox}>
                                        <div className={style.phraseSection}>
                                            <img src={item.banner==null?require('../resources/img/tutor/tutorPhrase/(1).png'):item.banner} alt=""/>
                                        </div>
                                        <div className={style.nameSection}> 
                                            <div><img src={item.img} alt=""/></div>
                                            <p>{item.name==null?require("../resources/img/profile.png"):item.name}</p>
                                        </div>
                                    </div>
                                </a>
                            </div>);
                        }):null}

                    </div>{/* tutorListWrapper 끝 */}
                   

                </div>
                





        );
    }
}

export default tutor;