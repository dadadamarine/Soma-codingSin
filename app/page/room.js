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
        service.lectureAuth(location.hash.replace('#', '')).then(function(res){
            if(res.data!="ok") location.href='/error';
        });
    }else location.href='/error';
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
    chrome.runtime.sendMessage("effkacpfpfbejgoccmoepolehjnifcnl", { message: "isInstall" },
        function (reply) {
            console.log(reply);
            if (reply) {
                if (reply.install) {
                    if (reply.install == "OK") {
                        console.log("isInstall");
                    }
                }
            }
            else {
                console.log(chrome.runtime.lastError);
                window.open("https://chrome.google.com/webstore/detail/jikodjmdnknlnjcfeconoiggckcoijji","install",null);
            }
        });
    }catch(e) {
        console.log(chrome.runtime.lastError);
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
        $("video").css("object-fit","fill");
        $("."+style.onAir+" span").removeClass(style.ico_grayDot);
        $("."+style.onAir+" span").addClass(style.ico_redDot);
        connection.openOrJoin(cursor.state.room);
            connection.addStream({
            screen: true,
            oneway: true
            });
        }
    };

    //영상 합성 : 구글에 아스키 카메라 검색.

    var connection = new RTCMultiConnection(); // server 에 있는 스크립트의 객체 받아옴
    connection.iceServers = []; // 배열에 스턴서버와 턴서버 url 넣기
    connection.iceServers.push({ // 같은 라우터 끼리 가능
        urls: 'stun:stun1.l.google.com:19302'
        // 같은 라우터 안에 있을땐 서버부하가 없는걸로 사용
    });
    connection.iceServers.push({ // 턴서버가 다른 라우터끼리일때 서로를 찾아좀.
        urls: 'turn:13.125.113.70:3478',
        credential: 'soma123!', // 아이디와 비번입력
        username: 'codingsin'
    });

    //자기 스크린을 받아옴.
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
    // 주석은 추가가 안되나!?
    // 영상 교환을 위한 데이터 타입등 정하기
    // 코딩신 9001 포트에 소켓 서버에서  서로 알방법이 없는 두사람을 연결시켜줌
    // 소켓서버의 역할: 시그널링 서버 ( 서로를 연결 시켜줌 )

    connection.session = { // 자기가 열고싶은 세션을 넣으면 됨.
        //클라이언트 페이지 단
        // 클라이언트가 자기가 오디오랑 비디오를 염.
        audio: true,
        video: true
    };

    connection.sdpConstraints.mandatory = {
        // oneway twoway랑 관련해서, 서로볼거냐 한사람만 볼거냐
        OfferToReceiveAudio: true,
        OfferToReceiveVideo: true
    };
    connection.bandwidth = { 
        //어떤 밴드위스로 보낼건지
        audio: 100,  // 50 kbps = default
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

    connection.onstream = function(event) { // 스트림 연결이 됬을때 , 소켓을 통해 결론적으로 연결됬을때 한번 실행
        console.log(event, URL.createObjectURL(event.stream)) // 이벤트에 대한거 찍고
        if(document.getElementById(event.streamid)) {
            var existing = document.getElementById(event.streamid);
            existing.parentNode.removeChild(existing);
        }
        
        var width = parseInt(connection.videosContainer.clientWidth / 2) - 20;
        // 스크린 값 받아서, 영상의 폭 설정
        
        if(event.stream.isScreen === true) {
            width = connection.videosContainer.clientWidth - 20;
        }
        
        var mediaElement = getMediaElement(event.mediaElement, {
            // 미디어 엘리먼트 , 오버 했을때 뜨는 것들 설정해주는 곳
            title: event.userid,
            buttons: ['full-screen'],
            width: width,
            showOnMouseEnter: false
        });
        if(event.type == 'remote'&& event.stream.isVideo==true && v_count==0 )  
        {   // 캠, 스크린 소리가 3개 같이 들어오는 상황  , 분류해야댐
            // 받고있는 스트림이 remote 이고(상대한테 받은거고), 캠이면 캠 태그에 영상 전달
            var video= document.getElementById('cam');
            video.setAttribute('src',URL.createObjectURL(event.stream));
            video.load();
            v_count=1;
        }
        if(event.type == 'remote' && event.stream.isScreen==true && s_count ==0 )
        {
            // 스크린일땐 스크린에 쏴줌
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
