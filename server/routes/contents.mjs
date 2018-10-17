import express from 'express';
import mongodb from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();
const router = express.Router();
const MongoClient = mongodb.MongoClient;
const dbHost = process.env.DB_HOST;
const dbName = process.env.DB_USER;
const dbCollection = process.env.DB_COLLECTION_CONTENTS;

router.post('/list', function(req, res){
    const u_type=String(req.body.type);
    const u_chapter=String(req.body.chapter);
    MongoClient.connect(dbHost, function(error, client) {
        if(error) console.log(error);
        else {
            const db = client.db(dbName);
            db.collection(dbCollection).find({type:u_type, chapter:u_chapter}).toArray(function(err, doc){
                if(err) console.log(err);
                res.send(doc);
            });
            client.close();
        }
    });
});
export default router;