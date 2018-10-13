import React, { Component } from 'react';
import socketIOClient from 'socket.io-client'
import style from './room.css';
import img from '../resources/img/logo.png';
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;
import Highlight from 'react-highlight';
import Code from '../util/ide';
import * as service from '../request/room';

export default class room extends Component {
  constructor(props) {
    super();
    this.state = {
        endpoint: "https://codingsin.com",
        room:"",
        toggle:true,
        cursor:0,
        list:[{title:"테스트 하하하",content:"<script>\nfor(var i = 0; i < 10; i++) {\n    var total = (total || 0) + i;\n    var last = i;\n    if (total > 16) {\n        break;\n    }\n}\nconsole.log(typeof total !== \"undefined\");\nconsole.log(typeof last !== \"undefined\");\nconsole.log(typeof i !== \"undefined\");\nconsole.log(\"total === \" + total + \" , last === \" + last);\n</script>", quiz:["1,0,2","3,4,16","5,8,12"]},
        {title:"테스트 투",content:"asdqweqweqwe", quiz:["0,0,2"]}],
        answer:[]
    }

    this.view1Click = this.view1Click.bind(this);
    this.view2Click = this.view2Click.bind(this);
    this.screenChange = this.screenChange.bind(this);
    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
    this.createQuiz = this.createQuiz.bind(this);

    const cursor =this;
    if(location.hash!=null) {
        this.setState({room:location.hash.replace('#', '')});
    }
    service.contentsList(0,0).then(function (res) {
        cursor.setState({list:res.data});
        let answer_tmp = cursor.state.answer;
        let list_tmp = cursor.state.list;
        
        for(let a=0;a<list_tmp.length;a++){
            let answer_tmp2 = new Array();
            let text = list_tmp[a].content.split('\n');
            for(let i=0;i<list_tmp[a].quiz.length;i++){
                let tmp = String(list_tmp[a].quiz[i]).split(",");
                let str = String(text[tmp[0]]).substring(tmp[1], Number(tmp[2])+1);
                answer_tmp2.push(str);
                text[tmp[0]]=String(text[tmp[0]]).replace(str,"{quiz}");
            }
            let content="";
            for(let i=0;i<text.length;i++){
                content+=text[i]+'\n';
            }
            list_tmp[a].content=content;
            answer_tmp.push(answer_tmp2);
        }
        cursor.setState({list:list_tmp, answer:answer_tmp});
    }).catch(function (error) {
        alert('error massage : '+error);
    });
    try{
    chrome.runtime.sendMessage("jikodjmdnknlnjcfeconoiggckcoijji", { message: "isInstall" },
        function (reply) {
            if (reply) {
                if (reply.install) {
                    if (reply.install == "OK") {
                        console.log("isInstall");
                    }
                }
            }
            else {
                window.open("https://chrome.google.com/webstore/detail/jikodjmdnknlnjcfeconoiggckcoijji","install",null);
            }
        });
    }catch(e) {
        window.open("https://chrome.google.com/webstore/detail/jikodjmdnknlnjcfeconoiggckcoijji","install",null);
    }
  }
  componentDidMount(){
    var v_count =0;
    var s_count =0;
    var cursor = this;
    document.getElementById('btn-screen-share').onclick = function() {
      if(location.hash==null) alert("개설된 과외 정보가 없습니다!");
      else{
        $("."+style.onAir+" span").removeClass(style.ico_grayDot);
        $("."+style.onAir+" span").addClass(style.ico_redDot);
        connection.openOrJoin(cursor.state.room);
            connection.addStream({
            screen: true,
            oneway: true
            });
        }
    };

    var connection = new RTCMultiConnection();
    connection.iceServers = [];
    connection.iceServers.push({
        urls: 'stun:stun1.l.google.com:19302'
    });
    connection.iceServers.push({
        urls: 'turn:13.125.113.70:3478',
        credential: 'soma123!',
        username: 'codingsin'
    });

    connection.getScreenConstraints = function(callback) {
        getScreenConstraints(function(error, screen_constraints) {
            if (!error) {
                screen_constraints = connection.modifyScreenConstraints(screen_constraints);
                callback(error, screen_constraints);
                return;
            }
            throw error;
        });
    };

    connection.socketURL ='https://www.codingsin.com:9001/';

    connection.session = {
        audio: true,
        video: true
    };
    connection.sdpConstraints.mandatory = {
        OfferToReceiveAudio: true,
        OfferToReceiveVideo: true
    };
    connection.bandwidth = {
        audio: 100,  // 50 kbps
        video: 1000, // 256 kbps
        screen: 3000 // 300 kbps
    };

    connection.mediaConstraints = {
        audio: true,
        video: {
            mandatory: {
                minFrameRate: 30,
                maxFrameRate: 60
            },
            optional: []
        }
    };

    connection.onstream = function(event) {
        console.log(event, URL.createObjectURL(event.stream))
        if(document.getElementById(event.streamid)) {
            var existing = document.getElementById(event.streamid);
            existing.parentNode.removeChild(existing);
        }
        
        var width = parseInt(connection.videosContainer.clientWidth / 2) - 20;
        
        if(event.stream.isScreen === true) {
            width = connection.videosContainer.clientWidth - 20;
        }
        
        var mediaElement = getMediaElement(event.mediaElement, {
            title: event.userid,
            buttons: ['full-screen'],
            width: width,
            showOnMouseEnter: false
        });
        if(event.type == 'remote'&& event.stream.isVideo==true && v_count==0 )
        {
            var video= document.getElementById('cam');
            video.setAttribute('src',URL.createObjectURL(event.stream));
            video.load();
            v_count=1;
        }
        if(event.type == 'remote' && event.stream.isScreen==true && s_count ==0 )
        {

            var video= document.getElementById('remote-screen');
            video.setAttribute('src',URL.createObjectURL(event.stream));
            video.load();
            s_count=1;
        }

        setTimeout(function() {
            mediaElement.media.play();
        }, 5000);
        mediaElement.id = event.streamid;
    };
    connection.onstreamended = function(event) {
        var mediaElement = document.getElementById(event.streamid);
        if(mediaElement) {
            mediaElement.parentNode.removeChild(mediaElement);
        }
    };

    this.view1Click();
    $("."+style.none).on("DOMSubtreeModified",function(){
        cursor.createQuiz();
    });

    $("code").on("DOMSubtreeModified",function(){
        $(".quiz").on("input", function(){
            let str=cursor.state.answer[$(this).attr("cursor")];
            if($(this).val().trim()==String(str[$(this).attr("subcursor")]).trim()){
                $(this).attr("readonly",true);
                $(this).css("color","blue");
                $(this).css("font-weight","bold");
                $(this).css("font-size","15px");
                $(this).css("text-align","center");
                $(this).css("border","0px");
            }
        });
    });
    $("."+style.sideView).height(window.innerHeight-50);
    $(".cm-s-default").height(window.innerHeight-100);
    $( window ).resize(function() {
        $("."+style.sideView).height(window.innerHeight-50);
        $(".cm-s-default").height(window.innerHeight-100);
     });
  }
  componentWillUnmount() {
  }
  createQuiz(){
    try{
    let cursor=this;
    let str= $("."+style.none).html();
    let tmp= this.state.answer[this.state.cursor];
    for(var i=0;i<tmp.length;i++)
        str=str.replace("{quiz}","<input class='quiz' type='text' cursor='"+this.state.cursor+"' subcursor='"+i+"' data='"+tmp[i]+"'size='"+tmp[i].length+"'/>");
    $("code").html(str);
    }catch(e) {
    }
  }

  view1Click(){
    $("."+style.progress).css("display","flex");
    $("."+style.problem).css("display","none");
    $("."+style.sideButton1).addClass(style.isselected);
    $("."+style.sideButton2).removeClass(style.isselected);
  }
  view2Click(){
    $("."+style.progress).css("display","none");
    $("."+style.problem).css("display","flex");
    $("."+style.sideButton1).removeClass(style.isselected);
    $("."+style.sideButton2).addClass(style.isselected);
  }
  screenChange(event){
    if(this.state.toggle){
      this.setState({toggle:false});
      $("."+style.toggle+" span:first-child").removeClass(style.toggleSelect).addClass(style.toggleNotSelect);
      $("."+style.toggle+" span:last-child").removeClass(style.toggleNotSelect).addClass(style.toggleSelect);
      $("."+style.roomMain).css("display","none");
      $("."+style.webIde).css("display","block");
    }else{
      this.setState({toggle:true});
      $("."+style.toggle+" span:first-child").removeClass(style.toggleNotSelect).addClass(style.toggleSelect);
      $("."+style.toggle+" span:last-child").removeClass(style.toggleSelect).addClass(style.toggleNotSelect);
      $("."+style.roomMain).css("display","block");
      $("."+style.webIde).css("display","none");
    }
  }

  prev(event){
    $("."+style.problemNext).css("display","block");
    this.setState({flag:true, cursor:this.state.cursor-1});
    if(this.state.cursor==1) $("."+style.problemPrev).css("display","none");
  }

  next(event){
    $("."+style.problemPrev).css("display","block");
    this.setState({flag:true, cursor:this.state.cursor+1});
    if(this.state.cursor==this.state.list.length-2) $("."+style.problemNext).css("display","none");
  }
  
  render() {
    return (
      <div className={style.container}>
          <div className={style.header}>
              <a href="/"><div className={style.logo}></div></a>
              <div className={style.onAir}>
                <span className={style.ico_grayDot}></span>
                <p>On Air</p>
              </div>
              <div className={style.survey}>
                <span className={style.icon_survey}></span>
                <p className={style.middleText} id="btn-screen-share">과외시작</p>
              </div>
          </div>
        <div className={style.mainWrapper}>
        <div className={style.sideView}>
            <div className={style.sideBottom}>
                <div className={style.viewContainer}>
                    <video className={style.camScreen} autoPlay controls poster={img} src="" id="cam"></video>
                    </div>
                    <div className={style.settingView}>
                    </div>
            </div>
              <div className={style.sideTop}>
                <div className={style.viewContainer2}>
                      <div className={style.progress}>
                      </div>
                      <div className={style.problem}>
                      <div className={style.problemTitle}><div className={style.problemPrev} onClick={this.prev}>←</div>{this.state.list[this.state.cursor].title}<div className={style.problemNext} onClick={this.next}>→</div></div>
                      <div className={style.problemContent}>
                      <Highlight className="html"></Highlight>
                      <div className={style.none}> {`${this.state.list[this.state.cursor].content}`}</div>
                      </div>
                      </div>
                </div>
                <div className={style.nav}> 
                    <div className={style.sideButton1} onClick={this.view1Click}><img src={require("../resources/img/room/survey.png")} width="30" height="30"/><span>수업 진도</span></div>
                    <div className={style.sideButton2} onClick={this.view2Click}><img src={require("../resources/img/room/question.png")} width="30" height="30"/><span>문제 보기</span></div>
                </div>
                <div className={style.bottomMenu}> 
                <div className={style.exitWrapper}>
                <div className={style.exit}>
                </div>
                </div>
                <div className={style.toggle} onClick={this.screenChange}>
                    <span className={style.toggleSelect}>screen</span>
                    <span className={style.toggleNotSelect}>editor</span>
                </div>
                </div>
              </div>
            </div>
            <div className={style.roomWrapper} id="screen-wrap">
                <video className={style.roomMain} autoPlay controls poster={img} src="" id="remote-screen"></video>
                <div className={style.webIde}><Code room={this.state.room}/></div>
            </div>
        </div>
      </div>
    );
  }
}
