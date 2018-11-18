import React,{Component} from 'react';
import style from './content.css';

export default class content extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className={style.wrap}>
                <div className={[style['wrapper'],style['bg-black']].join(" ")}>
                        {/* <video autoPlay loop id="myVideo" className={style["banner"]} src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.ogv"></video> */}
                        <img className={style["banner"]} src={require("../resources/img/content/content_banner.jpg")} alt=""/>
                </div>
                <div className={[style['wrapper'],style['bg-trans']].join(" ")}>
                    <div className={style["wrapper__section"]}>
                        <div className={style["selector-list"]}>
                            <div className={[style["selector-box"], style["selector-box--easy"]].join(" ")}>
                                <div className={style["selector-box__icon"]}>
                                    <img src={require("../resources/img/content/car1.png")} alt=""/>
                                </div>
                                <h1 className={style["selector-box__title"]}>레이싱 초급</h1>
                                <p className={style["selector-box__text"]}>자동차를 전진시켜 목적지에 도착해보세요!</p>
                                <button className={style["selector-box__button"]}>시작하기</button>
                            </div>

                            <div className={[style["selector-box"], style["selector-box--normal"]].join(" ")}>
                                <div className={style["selector-box__icon"]}>
                                    <img src={require("../resources/img/content/car2.png")}  alt=""/>
                                </div>
                                <h1 className={style["selector-box__title"]}>레이싱 초급</h1>
                                <p className={style["selector-box__text"]}>자동차를 전진시켜 목적지에 도착해보세요!</p>
                                <button className={style["selector-box__button"]}>시작하기</button>
                            </div>

                            <div className={[style["selector-box"], style["selector-box--hard"]].join(" ")}>
                                <div className={style["selector-box__icon"]}>
                                    <img src={require("../resources/img/content/car3.png")}  alt=""/>
                                </div>
                                <h1 className={style["selector-box__title"]}>레이싱 초급</h1>
                                <p className={style["selector-box__text"]}>자동차를 전진시켜 목적지에 도착해보세요!</p>
                                <button className={style["selector-box__button"]}>시작하기</button>
                            </div>

                        </div>
                    </div>
                </div>
                <div className={[style['wrapper'],style['bg-blue']].join(" ")}>
                    <div className={style['wrapper__section']}>
                        <div className={style['recommand-title']}>
                            <p className={style["recommand-title__text"] }>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ad neque quidem minus ex? Nulla deserunt totam, fuga Laborum ad neque quidem minus ex? Nulla deserunt totam, fuga </p>

                            <h2 className={[style["title"], style["title--highlight"] ].join(" ")}>"추천컨텐츠"</h2>
                        </div>
                    </div>
                </div>
                <div className={style["wrapper"]}>
                    <div className={style["wrapper__section"]}>
                
                        <div className={[style["flex"],style["recommand-content-margin"]].join(" ")}>
                            
                            <div className={style['content-box']}>
                                <div className={[style["content-box__img"], style["content-box__img--blue"]].join(" ")}>
                                    <a href="/content/1">
                                        <img src={require("../resources/img/content/content_blue.png")} alt=""/>
                                    </a>
                                </div>
                                <div className={style["flex"]}>
                                    <div className={style["content-box__profile"]}>
                                        <img src="" alt=""/>
                                    </div>
                                    <div className={style["content-box__info"]}>
                                        <div className={style["title--middle"]}>컨텐츠명</div>
                                        <div className={[style["star"], style["star5"]].join(" ")}>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            


                            <div className={style['content-box']}>
                                <div className={[style["content-box__img"], style["content-box__img--blue"]].join(" ")}>
                                    <img src={require("../resources/img/content/content_blue.png")} alt=""/>
                                </div>
                                <div className={style["flex"]}>
                                    <div className={style["content-box__profile"]}>
                                        <img src="" alt=""/>
                                    </div>
                                    <div className={style["content-box__info"]}>
                                        <div className={style["title--middle"]}>컨텐츠명</div>
                                        <div className={[style["star"], style["star4"]].join(" ")}></div>
                                    </div>
                                </div>
                            </div>

                            <div className={style['content-box']}>
                                <div className={[style["content-box__img"], style["content-box__img--blue"]].join(" ")}>
                                    <img src={require("../resources/img/content/content_blue.png")} alt=""/>
                                </div>
                                <div className={style["flex"]}>
                                    <div className={style["content-box__profile"]}>
                                        <img src="" alt=""/>
                                    </div>
                                    <div className={style["content-box__info"]}>
                                        <div className={style["title--middle"]}>컨텐츠명</div>
                                        <div className={[style["star"], style["star4"]].join(" ")}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* 컨텐츠 메인 페이지 */}
                <div className={style["wrapper"]}>
                    <div className={style["wrapper__section"]}>

                        <div className={style["title-section"]}>
                            <div className={style["logo"]}></div>
                            <p className={style["description"]}>원하는 컨텐츠를 쉽고 빠르게 찾아보세요.</p>
                            <div className={style.searchBarWrapper}>
                                <div className ={style.inputArea}>
                                    <input type="text" placeholder="강사의 이름을 입력하세요." className={style.searchBar}/>
                                    <div className={style.searchIcon}></div>
                                </div>
                            </div>
                        </div>

                        {/* 본문 섹션 */}
                    
                        <div className={style["context-section"]}>
                            <div className={style["navigation"]}>
                                <div className={[style["navigation__item"], style["navigation__item--selected"]].join(" ")}>컨텐츠 분류</div>
                                <div className={style["navigation__item"]}>컨텐츠 분류</div>
                                <div className={style["navigation__item"]}>컨텐츠 분류</div>
                            </div>
                            <div className={style["box-list--beige"]}>
                            

                                <div className={style['content-box']}>
                                    <div className={[style["content-box__img"], style["content-box__img"]].join(" ")}>
                                        <img src="" alt=""/>
                                    </div>
                                    <div className={style["flex"]}>
                                        <div className={style["content-box__profile"]}>
                                            <img src="" alt=""/>
                                        </div>
                                        <div className={style["content-box__info"]}>
                                            <div className={style["title--middle"]}>컨텐츠명</div>
                                            <div className={[style["star"], style["star4"]].join(" ")}></div>
                                        </div>
                                    </div>
                                </div>

                                <div className={style['content-box']}>
                                    <div className={[style["content-box__img"], style["content-box__img"]].join(" ")}>
                                        <img src="" alt=""/>
                                    </div>
                                    <div className={style["flex"]}>
                                        <div className={style["content-box__profile"]}>
                                            <img src="" alt=""/>
                                        </div>
                                        <div className={style["content-box__info"]}>
                                            <div className={style["title--middle"]}>컨텐츠명</div>
                                            <div className={[style["star"], style["star4"]].join(" ")}></div>
                                        </div>
                                    </div>
                                </div>

                                <div className={style['content-box']}>
                                    <div className={[style["content-box__img"], style["content-box__img"]].join(" ")}>
                                        <img src="" alt=""/>
                                    </div>
                                    <div className={style["flex"]}>
                                        <div className={style["content-box__profile"]}>
                                            <img src="" alt=""/>
                                        </div>
                                        <div className={style["content-box__info"]}>
                                            <div className={style["title--middle"]}>컨텐츠명</div>
                                            <div className={[style["star"], style["star5"]].join(" ")}></div>
                                        </div>
                                    </div>
                                </div>

                                <div className={style['content-box']}>
                                    <div className={[style["content-box__img"], style["content-box__img"]].join(" ")}>
                                        <img src="" alt=""/>
                                    </div>
                                    <div className={style["flex"]}>
                                        <div className={style["content-box__profile"]}>
                                            <img src="" alt=""/>
                                        </div>
                                        <div className={style["content-box__info"]}>
                                            <div className={style["title--middle"]}>컨텐츠명</div>
                                            <div className={[style["star"], style["star3"]].join(" ")}></div>
                                        </div>
                                    </div>
                                </div>

                                <div className={style['content-box']}>
                                    <div className={[style["content-box__img"], style["content-box__img"]].join(" ")}>
                                        <img src="" alt=""/>
                                    </div>
                                    <div className={style["flex"]}>
                                        <div className={style["content-box__profile"]}>
                                            <img src="" alt=""/>
                                        </div>
                                        <div className={style["content-box__info"]}>
                                            <div className={style["title--middle"]}>컨텐츠명</div>
                                            <div className={[style["star"], style["star4"]].join(" ")}></div>
                                        </div>
                                    </div>
                                </div>

                                <div className={style['content-box']}>
                                    <div className={[style["content-box__img"], style["content-box__img"]].join(" ")}>
                                        <img src="" alt=""/>
                                    </div>
                                    <div className={style["flex"]}>
                                        <div className={style["content-box__profile"]}>
                                            <img src="" alt=""/>
                                        </div>
                                        <div className={style["content-box__info"]}>
                                            <div className={style["title--middle"]}>컨텐츠명</div>
                                            <div className={[style["star"], style["star5"]].join(" ")}></div>
                                        </div>
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