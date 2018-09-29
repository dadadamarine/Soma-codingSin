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
const io = socket.listen(http);
let port = 80;
app.use(cookieParser(process.env.COOKIE_KEY));
app.use(session({
    key: 'sid',
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: true
}));

app.use('/', express.static(__dirname + '/../build'));
app.use('/script', express.static(__dirname + '/script'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

import user from './routes/user';
app.use('/reqUser', user);

import lecture from './routes/lecture';
app.use('/reqLecture', lecture);

import admin from './routes/admin';
app.use('/admin', admin);

import contents from './routes/contents';
app.use('/contents', contents);

let indexPage="";
fs.readFile(path.resolve(__dirname,'../build/index.html'), 'utf8', function(err, data){
    indexPage=data;
});
app.get('/getScreenId.html', (req,res) =>{
    res.sendFile(path.join(__dirname+'/script/'+req.url.split('/')[1]));
});
app.get('/*.js', (req,res) =>{
    res.sendFile(path.join(__dirname+'/script/'+req.url.split('/')[1]));
});
app.get("*", function(req, res, next){
    if(req.session.user_id==null) {
        res.clearCookie('sid');
        res.clearCookie('user');
    }
    res.end(indexPage);
});

io.on('connection', function (socket) {
    socket.on('channelJoin',function(channel){
        console.log("log>"+channel);
        socket.join(channel);
    });
    socket.on('send', function (data) {
        // io.to(data.channel).emit('receive', {chat:data.msg});
        console.log("log>"+data);
        socket.broadcast.to(data.channel).emit('receive', data.msg);
    });
});

const server = http.listen(port, () => {
    console.log('Server listening on port', port);
});