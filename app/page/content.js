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
                        
                    
                
                </div>



        );
    }
}