import express from 'express';
import mongodb from 'mongodb';
import dotenv from 'dotenv';
import AWS from 'aws-sdk';

dotenv.config();
const router = express.Router();
const MongoClient = mongodb.MongoClient;
const dbHost = process.env.DB_HOST;
const dbName = process.env.DB_USER;
const dbCollection = process.env.DB_COLLECTION_LECTURE;
const objectId = mongodb.ObjectID;

AWS.config.loadFromPath(__dirname + "/config/awsconfig.json");
let s3 = new AWS.S3();

let multer = require("multer");
let multerS3 = require('multer-s3');
let upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: "data.codingsin.com",
        key: function (req, file, cb) {
             let extension = path.extname(file.originalname);
             cb(null, Date.now().toString() + extension)
        },
        acl: 'public-read-write',
    })
})

router.post('/type', function(req, res){
    res.send(req.session.user_type);
});

router.post('/list', function(req, res){
    MongoClient.connect(dbHost, function(error, client) {
        if(error) console.log(error);
        else {
            const db = client.db(dbName);
            db.collection(dbCollection).find({match:null}).toArray(function(err, doc){
                if(err) console.log(err);
                res.send(doc);
            });
            client.close();
        }
    });
});

router.post('/myList', function(req, res){
    const id=req.session.user_id;
    const type = req.session.user_type;
    if ( typeof type !== 'undefined' && type ){
        if(type=="강사"){
            MongoClient.connect(dbHost, function(error, client) {
                if(error) console.log(error);
                else {
                    const db = client.db(dbName);
                    db.collection(dbCollection).find({id:id}).toArray(function(err, doc){
                        if(err) console.log(err);
                        res.send(doc);
                    });
                    client.close();
                }
            });
        }
        else if(type=="학생"){
            MongoClient.connect(dbHost, function(error, client) {
                if(error) console.log(error);
                else {
                    const db = client.db(dbName);
                    db.collection(dbCollection).find({match:id}).toArray(function(err, doc){
                        if(err) console.log(err);
                        res.send(doc);
                    });
                    client.close();
                }
            });
        }
    }
    else res.send("none");
});

router.post('/lecture', function(req, res){
    const id=String(req.body._id);
    MongoClient.connect(dbHost, function(error, client) {
        if(error) console.log(error);
        else {
            const db = client.db(dbName);
            db.collection(dbCollection).find({_id:objectId(id)}).toArray(function(err, doc){
                if(err) console.log(err);
                res.send(doc);
            });
            client.close();
        }
    });
});

router.post('/lectureRequest', function(req, res){
    const id=String(req.body._id);
    const user=req.session.user_id;
    MongoClient.connect(dbHost, function(error, client) {
        if(error) console.log(error);
        else {
            const db = client.db(dbName);
            db.collection(dbCollection).update({_id:objectId(id)}, {$set:{match:user}}, function(err, doc){
                if(err) console.log(err);
                if(doc.result.n==1)
                    if(doc.result.nModified==1) 
                        res.send("ok");
                else res.send("fail");
                client.close();
            });
        }
    });
});

router.post('/register', upload.single("imgFile"), function (req, res, next) {
    if(req.session.user_type!="강사") res.send("fail");
    else{
        const id=req.session.user_id;
        const name=req.session.user_name;
        const email=req.session.user_email;
        const phone=req.session.user_phone;
        const title = String(req.body.title);
        const description = String(req.body.description);
        const schedule = String(req.body.schedule);
        const price = String(req.body.price);
        const img=req.files[0].location;

        MongoClient.connect(dbHost, function (error, client) {
            if (error) console.log(error);
            else {
                const db = client.db(dbName);
                db.collection(dbCollection).insert({ date: Date.now(), id:id, name: name, email: email, title: title, description: description, schedule:schedule, price:price, match:null, img:img}, function (err, doc) {
                    if (err) {
                        console.log(err);
                        res.send("fail");
                    }
                    res.send("ok");
                });
                client.close();
            }
        });
    }
});

router.post('/auth', function(req, res){
    if(req.body.id=="test_room") res.send("ok");
    else{
        try{
            console.log(req.body.id);
            const id=objectId(String(req.body.id));
            const user=req.session.user_id;
            console.log(req.session.user_type);
            const flag = req.session.user_type=="강사";
            console.log(flag);
            MongoClient.connect(dbHost, function(error, client) {
                if(error) console.log(error);
                else {
                    const db = client.db(dbName);
                    db.collection(dbCollection).find({_id:id}).toArray(function(err, doc){
                        if(err) console.log(err);
                        if(doc==null || doc==[]) {
                            console.log("null 해당 강의 존재하지않음.");
                            res.redirect('/error');
                        }
                        let json = JSON.stringify({ 
                            success: "ok", 
                            type: doc[0].type, 
                            chapter: doc[0].chapter
                          });
                        if(flag)
                            if(doc[0].id!=user) {
                                console.log("해당 강의 강사가 아님.");
                                res.redirect('/error');
                            }else res.send(json);
                        else if(doc[0].match!=user) {
                            console.log("해당 강의 학생이 아님.");
                            res.redirect('/error');
                        }
                        else res.send(json);
                    });
                    client.close();
                }
            });
        }catch(e){
            console.log("error 해당 강의 존재하지않음.");
            res.redirect('/error');
        }
    }
});
export default router;