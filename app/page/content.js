import React,{Component} from 'react';
import style from './content.css';

export default class content extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className={style.wrapper}>
                <video autoPlay loop id="myVideo" src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.ogv"></video>
                <div className={style['banner-wrapper']}>
                    
                    <div className={style['banner-wrapper__section']}></div>
                
                </div>


            </div>



        );
    }
}