import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import http1 from 'http';
import socket from 'socket.io';

dotenv.config();
const __dirname = path.dirname(new URL(import.meta.url).pathname);
const app = express();
const http = http1.Server(app);
const io  = socket.listen(http);
let port = 80;
app.use(cookieParser(process.env.COOKIE_KEY));
app.use(session({
    key: 'sid',
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: true
}));

app.use('/', express.static(__dirname + '/../build'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

import user from './routes/user';
app.use('/reqUser', user);

import lecture from './routes/lecture';
app.use('/reqLecture', lecture);

let indexPage="";
fs.readFile(path.resolve(__dirname,'../build/index.html'), 'utf8', function(err, data){
    indexPage=data;
});
app.get("*", function(req, res, next){
    if(req.session.user_id==null) {
        res.clearCookie('sid');
        res.clearCookie('user');
    }
    const firstPath = req.params[0].split('/')[1];
    if(firstPath=="posts"){
        res.end(indexPage.replace(/main-/gi,"/main-"));
    }
    else res.end(indexPage);
});


//소켓

function findRoomBySocketId(value) {
    var arr = Object.keys(rooms);
    var result = null;
    for (var i = 0; i < arr.length; i++) {
        if (rooms[arr[i]][value]) {
            result = arr[i];
            break;
        }
    }

    console.log('나간 룸', result);
    return result;
}

app.get('/rooms', function (req, res) {
    res.send(rooms);
});

/**
* SOCKET
*/
var rooms = {};
var roomId = null;
var socketIds = {};
io.on('connection', function (socket) {
    // 룸접속
    socket.on('joinRoom', function (roomName, userId) {
        roomId = roomName;
        socket.join(roomId);  // 소켓을 특정 room에 binding합니다.

        // 룸에 사용자 정보 추가
        // 이미 룸이 있는경우
        if (rooms[roomId]) {
            console.log('이미 룸이 있는 경우');
            rooms[roomId][socket.id] = userId;
            // 룸 생성 후 사용자 추가
        } else {
            console.log('룸 추가');
            rooms[roomId] = {};
            rooms[roomId][socket.id] = userId;
        }
        var thisRoom = rooms[roomId];
        console.log('thisRoom', thisRoom);

        // 유저 정보 추가
        io.sockets.in(roomId).emit('joinRoom', roomId, thisRoom);
        //console.log('ROOM LIST', io.sockets.adapter.rooms);
        console.log('ROOM LIST', rooms);
    });

    // 메시징
    socket.on('message', function (data) {
        //console.log('message: ' + data);

        if (data.to == 'all') {
            // for broadcasting without me
            socket.broadcast.to(data.roomId).emit('message', data);
        } else {
            // for target user
            var targetSocketId = socketIds[data.to];
            if (targetSocketId) {
                io.to(targetSocketId).emit('message', data);
            }
        }
    });
    // socket disconnect
    socket.on('disconnect', function () {
        console.log('a user disconnected', socket.id);
        var roomId = findRoomBySocketId(socket.id);
        if (roomId) {
            socket.broadcast.to(roomId).emit('leaveRoom', rooms[roomId][socket.id]); // 자신 제외 룸안의 유저ID 전달
            delete rooms[roomId][socket.id]; // 해당 유저 제거
        }
    });
});

const server = http.listen(port, () => {
    console.log('Server listening on port', port);
});