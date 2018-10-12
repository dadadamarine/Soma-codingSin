import React, { Component } from 'react';
import socketIOClient from 'socket.io-client'
import style from './room.css';
import img from '../resources/img/main.png';
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
        toggle:true,
        cursor:0,
        list:[{title:"test1",content:"<script>\nfor(var i = 0; i < 10; i++) {\n    var total = (total || 0) + i;\n    var last = i;\n    if (total > 16) {\n        break;\n    }\n}\nconsole.log(typeof total !== \"undefined\");\nconsole.log(typeof last !== \"undefined\");\nconsole.log(typeof i !== \"undefined\");\nconsole.log(\"total === \" + total + \" , last === \" + last);\n</script>"},
        {title:"test3",content:"asdqweqweqwe"}
        ]
    }

    this.view1Click = this.view1Click.bind(this);
    this.view2Click = this.view2Click.bind(this);
    this.screenChange = this.screenChange.bind(this);
    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);

    const curosr =this;
    service.contentsList(0,1).then(function (res) {
        curosr.setState({list:res.data});
    }).catch(function (error) {
        alert('error massage : '+error);
    });
  }
  componentDidMount(){
    var v_count =0;
    var s_count =0;

    // document.getElementById('btn-setting').onclick = function() {
    //  connection.removeStream({screen: true });
    //  connection.addStream({
	// screen:true,
	// oneway:true
	// });
    // };

    document.getElementById('btn-screen-share').onclick = function() {
      if(location.hash==null) alert("개설된 과외 정보가 없습니다!");
      else{
        $("."+style.onAir+" span").removeClass(style.ico_grayDot);
        $("."+style.onAir+" span").addClass(style.ico_redDot);
        var hashString = location.hash.replace('#', '');
        connection.openOrJoin(hashString);
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
  }
  componentWillUnmount() {
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
      $("."+style.toggleText).text("WebIDE");
      $("."+style.roomMain).css("display","none");
      $("."+style.webIde).css("display","block");
    }else{
      this.setState({toggle:true});
      $("."+style.toggleText).text("원격화면");
      $("."+style.roomMain).css("display","block");
      $("."+style.webIde).css("display","none");
    }
  }

  prev(event){
    $("."+style.problemNext).css("display","block");
    this.setState({cursor:this.state.cursor-1});
    if(this.state.cursor==1) $("."+style.problemPrev).css("display","none");
  }

  next(event){
    $("."+style.problemPrev).css("display","block");
    this.setState({cursor:this.state.cursor+1});
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
              <div className={style.exit}>
                <span className={style.icon_exit}></span>
                <p className={style.middleText}>나가기</p>
              </div>
              <div className={style.ide} onClick={this.screenChange}>
                <span className={style.icon_survey}></span>
                <p className={style.toggleText}>원격화면</p>
              </div>
              <div className={style.survey}>
                <span className={style.icon_survey}></span>
                <p className={style.middleText} id="btn-screen-share">과외시작</p>
              </div>

              
          </div>
        <div className={style.mainWrapper}>
            <div className={style.roomWrapper} id="screen-wrap">
                <video className={style.roomMain} autoPlay controls poster={img} src="" id="remote-screen"></video>
                <div className={style.webIde}><Code /></div>
            </div>


            <div className={style.sideView}>
              <div className={style.sideTop}>
                <div className={style.nav}> 
                    <div className={style.sideButton1} onClick={this.view1Click}>수업 진도</div>
                    <div className={style.sideButton2} onClick={this.view2Click}>문제 보기</div>
                </div>
                <div className={style.viewContainer}>
                      <div className={style.progress}>
                      </div>
                      <div className={style.problem}>
                      <div className={style.problemTitle}><div className={style.problemPrev} onClick={this.prev}>←</div>{this.state.list[this.state.cursor].title}<div className={style.problemNext} onClick={this.next}>→</div></div>
                      <div className={style.problemContent}>
                      <Highlight className="html">{`${this.state.list[this.state.cursor].content}`}
                      </Highlight>
                      </div>
                      </div>
                </div>
              </div>

              <div className={style.sideBottom}>
                <div className={style.viewContainer}>
                     <video className={style.camScreen} autoPlay controls poster={img} src="" id="cam"></video>
                    </div>
                    <div className={style.settingView}>
                    </div>
              </div>
            </div>
        </div>
      </div>
    );
  }
}
