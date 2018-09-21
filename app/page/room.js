import React, { Component } from 'react';
import socketIOClient from 'socket.io-client'
import style from './room.css';
import img from '../resources/img/main.png';
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;
import Highlight from 'react-highlight';
import Code from '../util/ide';

export default class room extends Component {
  constructor(props) {
    super();
    this.state = {
        endpoint: "https://codingsin.com",
        toggle:true
    }

    this.view1Click = this.view1Click.bind(this);
    this.view2Click = this.view2Click.bind(this);
    this.screenChange = this.screenChange.bind(this);
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
                      <div className={style.problemTitle}>scope_issue</div>
                      <div className={style.problemContent}>
                      <Highlight language="javascript">{`
<html>
<body>
<div id="divScope0">Click me! DIV 0</div>
<div id="divScope1">Click me! DIV 1</div>
<div id="divScope2">Click me! DIV 2</div>
<script>
function setDivClick(index) {
    document.getElementById("divScope" + index).addEventListener(
        "click",
        function () {
            alert("You clicked div #" + index);
        },
        false
    );
}
var i, len = 3;
for (i = 0; i < len; i++) {
    setDivClick(i);
}
</script>
</body>
</html>`}
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
