import React,{Component} from 'react';
import style from './content';
//import video from '../resources/video/content/game.mp4';

export default class content extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className={style.wrapper}>
                <video autoplay muted loop id="myVideo" src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.ogv" type="video/ogv"></video>
                <div className={style['banner-wrapper']}>
                    
                    <div className={style['banner-wrapper__section']}></div>
                
                </div>


            </div>



        );
    }
}