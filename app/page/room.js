import React, { Component } from 'react';
import socketIOClient from 'socket.io-client'
import style from './room.css';
import img from '../resources/img/main.png'
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

export default class room extends Component {
  constructor(props) {
    super();
    this.state = {
        endpoint: "https://homecode.xyz" 
    }

    this.camClick = this.camClick.bind(this);
    this.settingClick = this.settingClick.bind(this);
  }
  componentDidMount(){
    console.log('Loaded webrtc');

    // cross browsing
    navigator.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia || navigator.webkitGetUserMedia;
    var RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
    var RTCSessionDescription = window.RTCSessionDescription || window.mozRTCSessionDescription || window.webkitRTCSessionDescription;
    var RTCIceCandidate = window.RTCIceCandidate || window.mozRTCIceCandidate || window.webkitRTCIceCandidate;
  
    // for logic
    var socket = socketIOClient(this.state.endpoint)
    var roomId = null;
    var userId = Math.round(Math.random() * 999999) + 999999;
    var remoteUserId = null;
    var isOffer = null;
    var localStream = null;
    var peer = null; // offer or answer peer
    var iceServers = {
      'iceServers': [
        {'url': 'stun:stun1.l.google.com:19302'},
        {'url': 'stun:stun2.l.google.com:19302'},
        {'url': 'stun:stun3.l.google.com:19302'},
        {'url': 'stun:stun4.l.google.com:19302'},
        {'url': 'stun:stun.l.google.com:19302'},
        {
          'url': 'turn:13.125.113.70:3478',
          'credential': 'soma123!',
          'username': 'codingsin'
        }
      ]
    };
    var peerConnectionOptions = {
      'optional': [{
        'DtlsSrtpKeyAgreement': 'true'
      }]
    };
    var mediaConstraints = {
      'mandatory': {
        'OfferToReceiveAudio': true,
        'OfferToReceiveVideo': true
      }
    };
    var screenShare = new ScreenShare();
  
    // DOM
    var $body = $('body');
  
    /**
    * getUserMedia
    */
    function getUserMedia() {
      console.log('getUserMedia');
  
      navigator.getUserMedia({
        audio: true,
        video: true
      }, function(stream) {
        localStream = stream;
        $body.addClass('room wait');
  
        if (isOffer) {
          createPeerConnection();
          createOffer();
        }
      }, function() {
        console.error('Error getUserMedia');
      });
    }
  
    /**
    * createOffer
    * offer SDP를 생성 한다.
    */
    function createOffer() {
      console.log('createOffer', arguments);
  
      peer.addStream(localStream); // addStream 제외시 recvonly로 SDP 생성됨
      peer.createOffer(function(SDP) {
  
        SDP.sdp = SDP.sdp.replace("96 97 98 99 100 101 102 124 127 125 123", "100 101 102 124 127 125 123 96 97 98 99"); // for h.264
        //SDP.sdp = SDP.sdp.replace("42e01f", "42e028");
  
        peer.setLocalDescription(SDP);
        console.log("Sending offer description", SDP);
        send({
          sender: userId,
          to: 'all',
          sdp: SDP
        });
      }, onSdpError, mediaConstraints);
    }
  
    /**
    * createAnswer
    * offer에 대한 응답 SDP를 생성 한다.
    * @param {object} msg offer가 보내온 signaling
    */
    function createAnswer(msg) {
      console.log('createAnswer', arguments);
  
      //peer.addStream(localStream);
      peer.setRemoteDescription(new RTCSessionDescription(msg.sdp), function() {
        peer.createAnswer(function(SDP) {
          peer.setLocalDescription(SDP);
          console.log("Sending answer to peer.", SDP);
          send({
            sender: userId,
            to: 'all',
            sdp: SDP
          });
        }, onSdpError, mediaConstraints);
      }, function() {
        console.error('setRemoteDescription', arguments);
      });
    }
  
    /**
    * createPeerConnection
    * offer, answer 공통 함수로 peer를 생성하고 관련 이벤트를 바인딩 한다.
    */
    function createPeerConnection() {
      console.log('createPeerConnection', arguments);
  
      peer = new RTCPeerConnection(iceServers, peerConnectionOptions);
      console.log('new Peer', peer);
  
      peer.onicecandidate = function(event) {
        if (event.candidate) {
          send({
            userId: userId,
            to: 'all',
            label: event.candidate.sdpMLineIndex,
            id: event.candidate.sdpMid,
            candidate: event.candidate.candidate
          });
        } else {
          console.info('Candidate denied', event.candidate);
        }
      };
  
      peer.onaddstream = function(event) {
        console.log("Adding remote strem", event);
        $('#remote-screen').attr('src', URL.createObjectURL(event.stream));
        //$videoWrap.append('<video id="remote-video" autoplay="true" src="' + URL.createObjectURL(event.stream) + '"></video>');
        $body.removeClass('wait').addClass('connected');
      };
  
      peer.onremovestream = function(event) {
        console.log("Removing remote stream", event);
      };
    }
  
    /**
    * onSdpError
    */
    function onSdpError() {
      console.log('onSdpError', arguments);
    }
  
    /****************************** Below for signaling ************************/
  
    /**
    * send
    * @param {object} msg data
    */
    function send(data) {
      console.log('send', data);
  
      data.roomId = roomId;
      socket.send(data);
    }
  
    /**
    * onmessage
    * @param {object} msg data
    */
    function onmessage(data) {
      console.log('onmessage', data);
  
      var msg = data;
      var sdp = msg.sdp || null;
  
      if (!remoteUserId) {
        remoteUserId = data.userId;
      }
  
      // 접속자가 보내온 offer처리
      if (sdp) {
        if (sdp.type  == 'offer') {
          createPeerConnection();
          console.log('Adding local stream...');
          createAnswer(msg);
  
        // offer에 대한 응답 처리
        } else if (sdp.type == 'answer') {
          // answer signaling
          peer.setRemoteDescription(new RTCSessionDescription(msg.sdp));
        }
  
      // offer, answer cadidate처리
      } else if (msg.candidate) {
        var candidate = new RTCIceCandidate({
          sdpMLineIndex: msg.label,
          candidate: msg.candidate
        });
  
        peer.addIceCandidate(candidate);
      } else {
        //console.log()
      }
    }
  
    /**
     * setRoomToken
     */
    function setRoomToken() {
      //console.log('setRoomToken', arguments);
  
      if (location.hash.length > 2) {

      } else {
        location.hash = '#' + (Math.random() * new Date().getTime()).toString(32).toUpperCase().replace(/\./g, '-');
      }
    }
  
    /**
     * onLeave
     * @param {string} userId
     */
    function onLeave(userId) {
      if (remoteUserId == userId) {
        $('#remote-video').remove();
        $body.removeClass('connected').addClass('wait');
        remoteUserId = null;
      }
    }
  
    /**
     * initialize
     */
    function initialize() {
      setRoomToken();
      roomId = location.href.replace("https://homecode.xyz/room.html", '');
  
      $('#start').click(function() {
        getUserMedia();
      });
  
  
      $('#btn-screen-share').click(function() {
        screenShare.start(function(stream) {
          localStream = stream;
          isOffer = true;
  
          if (isOffer) {
            createPeerConnection();
            createOffer();
          }
        });
      });
    }
    initialize();
  
    window.getPeerStats = function() {﻿
      peer.getStats(function(res) {
        var items = [];
        res.result().forEach(function(result) {
          var item = {};
          result.names().forEach(function(name) {
            item[name] = result.stat(name);
          });
          item.id = result.id;
          item.type = result.type;
          item.timestamp = result.timestamp;
          items.push(item);
        });
        console.log(items);
      });
    }
  
    /**
     * socket handling
     */
    socket.emit('joinRoom', roomId, userId);
  
    socket.on('leaveRoom', function(userId) {
      console.log('leaveRoom', arguments);
      onLeave(userId);
    });
  
    socket.on('message', function(data) {
      onmessage(data);
    });

    Object.size = function(obj) {
        var size = 0, key;
        for (key in obj) {
          if (obj.hasOwnProperty(key)) {
            size++;
          }
        }
        return size;
    };

    function ScreenShare() {
        console.log('Loaded ScreenShare', arguments);
      
        var that = this;
        var localScreenStream = null;
        var idCount = 1;
        var successCallback = null;
        var isScreenEnded = false;
    
        function getUserMedia(sourceId, callback) {
          console.log('ScreenShare getUserMedia', arguments);
      
          navigator.getUserMedia({
            audio: false,
            video: {
              mandatory: {
                chromeMediaSource: 'desktop',
                chromeMediaSourceId: sourceId,
                maxWidth: screen.width, 
                maxHeight: screen.height, 
                maxFrameRate: 3,
              },
              optional: [
                {googLeakyBucket: true},
                {googTemporalLayeredScreencast: true}
              ]
            }
          }, function(stream) {
            callback(stream);
            localScreenStream = stream;
      
            // 브라우저밖 하단의 공유중지 박스로 종료하는경우 처리
            localScreenStream.getVideoTracks()[0].onended = function() {
              // 정상 종료시 이중으로 emit되는걸 막기 위한 처리.
              if (!isScreenEnded) {
                //parent.emit('endScreenShare');
              }
            };
          }, function(error) {
            console.error('Error getUserMedia', error);
          });
        }
    
        function start(callback) {
          successCallback = callback;
      
          // isChrome
          window.postMessage({ type: 'getScreen', id: idCount }, '*');
          idCount++;
          isScreenEnded = false;
        }
      
        function end(callback) {
          isScreenEnded = true;
          localScreenStream.getTracks().forEach(function(track) {
            track.stop();
          });
          callback && callback();
        }
      
        window.addEventListener('message', function(event) {
          console.log('window.message', event);
          if (event.origin != window.location.origin) {
            return;
          }
      
          var data = event.data;
          var type = data.type;
      
          if (type == 'gotScreen') {
            if (data.sourceId) {
              getUserMedia(data.sourceId, successCallback);
            } else {
              console.log('cancled');
              //parent.emit('endScreenShare');
            }
          } else if (type == 'getScreenPending') {
            //
          }
        });
    
        this.start = start;
        this.end = end;
      }
  }
  componentWillUnmount() {
  }

  camClick(){
    $("."+style.settingView).css("display","none");
    $("."+style.camView).css("display","block");
  }
  settingClick(){
    $("."+style.settingView).css("display","block");
    $("."+style.camView).css("display","none");
  }
  

  render() {
    return (
        <div className={style.mainWrapper}>
            <div className={style.roomWrapper} id="screen-wrap">
                <video className={style.roomMain} autoPlay controls poster={img} src="#" id="remote-screen"></video>
            </div>
            <div className={style.sideView}>
                <div className={style.nav}>
                    <div className={style.cam} onClick={this.camClick}>CAM화면</div>
                    <div className={style.setting} onClick={this.settingClick}>설정</div>
                    <div className={style.start} id="btn-screen-share">과외 준비</div>
                </div>
                <div className={style.viewContainer}>
                    <div className={style.camView}>
                    </div>
                    <div className={style.settingView}>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}