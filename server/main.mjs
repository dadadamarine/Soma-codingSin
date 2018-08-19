import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv'

dotenv.config();
const __dirname = path.dirname(new URL(import.meta.url).pathname);
const app = express();
let port = 80;
app.use(cookieParser(process.COOKIE_KEY));
app.use(session({
    key: 'sid',
    secret: process.SESSION_KEY,
    resave: false,
    saveUninitialized: true
}));

app.use('/', express.static(__dirname + '/../build'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

import user from './routes/user';
app.use('/reqUser', user);

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

const server = app.listen(port, () => {
    console.log('Server listening on port', port);
});