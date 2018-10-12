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

                    <div className={[style.tableItem, style.board].join(' ')}></div>
                    <div className={[style.tableItem, style.empty].join(' ')}></div>
                    <div className={[style.tableItem, style.board].join(' ')}></div>
                    <div className={[style.tableItem, style.empty].join(' ')}></div>
                    <div className={[style.tableItem, style.orange].join(' ')}></div>

                    <div className={[style.tableItem, style.board].join(' ')}></div>
                    <div className={[style.tableItem, style.board].join(' ')}></div>
                    <div className={[style.tableItem, style.empty].join(' ')}></div>
                    <div className={[style.tableItem, style.board].join(' ')}></div>
                    <div className={[style.tableItem, style.board].join(' ')}></div>
                    
                    <div className={[style.tableItem, style.empty].join(' ')}></div>
                    <div className={[style.tableItem, style.orange].join(' ')}></div>
                    <div className={[style.tableItem, style.board].join(' ')}></div>
                    <div className={[style.tableItem, style.board].join(' ')}></div>
                    <div className={[style.tableItem, style.image].join(' ')}></div>
                    
                   </div>
                </div>







            </div>
        );
    }
}

export default community;
