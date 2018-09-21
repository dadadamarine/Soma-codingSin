import express from 'express';
import mongodb from 'mongodb';
import dotenv from 'dotenv'

dotenv.config();
const router = express.Router();
const MongoClient = mongodb.MongoClient;
const dbHost = process.env.DB_HOST;
const dbName = process.env.DB_USER;
const dbCollection = process.env.DB_COLLECTION_CONTENTS;
const dbCollectionCount = process.env.DB_COLLECTION_COUNT;


router.post('/contentWrite', function(req, res){
    const u_type = String(req.body.type);
    const u_title = String(req.body.title);
    const u_content = String(req.body.content);
    const u_chapter = String(req.body.chapter);
    MongoClient.connect(dbHost, function(error, client) {
        if(error) console.log(error);
        else {
            const db = client.db(dbName);
            db.collection(dbCollection).insert({type:u_type,title:u_title,no:getNextSequence(u_type),content:u_content,chapter:u_chapter}, function(err, doc){
                if(err) console.log(err);
                res.send("ok");
            });
            client.close();
        }
    });
});

function getNextSequence(name) {
    MongoClient.connect(dbHost, function(error, client) {
        if(error) console.log(error);
        else {
            const db = client.db(dbName);
            db.collection(dbCollectionCount).findOneAndUpdate(
                { _id: name },
                { $inc: { seq: 1 } }, 
                { upsert:true, returnNewDocument: true },
                function(err, res){
                    if(err) console.log(err);
                    else{
                        client.close();
                        return res.value.seq;
                    }
                }      
            );
        }
    });
 }