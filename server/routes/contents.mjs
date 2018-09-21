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
    MongoClient.connect(dbHost, function(error, client) {
        if(error) console.log(error);
        else {
            const db = client.db(dbName);
            db.collection(dbCollection).find({type:u_type}).toArray(function(err, doc){
                if(err) console.log(err);
                console.log(doc);
                res.send(doc);
            });
            client.close();
        }
    });
});
export default router;