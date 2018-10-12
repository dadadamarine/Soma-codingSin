import React , {Component} from 'react';
import style from './community.css';


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
                </div>







            </div>
        );
    }
}

export default community;
