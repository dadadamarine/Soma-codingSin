import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import http1 from 'http';

dotenv.config();
const __dirname = path.dirname(new URL(import.meta.url).pathname);
const app = express();
const http = http1.Server(app);
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

let indexPage="";
fs.readFile(path.resolve(__dirname,'../build/index.html'), 'utf8', function(err, data){
    indexPage=data;
});
app.get('/script/RTCMultiConnection.min.js', (req,res) =>{
    res.sendFile(path.join(__dirname+'/script/RTCMultiConnection.min.js'));
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

app.get('/rooms', function (req, res) {
    res.send(rooms);
});

const server = http.listen(port, () => {
    console.log('Server listening on port', port);
});