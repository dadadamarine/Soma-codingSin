import express from 'express';
import mongodb from 'mongodb';
import dotenv from 'dotenv'

dotenv.config();
const router = express.Router();
const MongoClient = mongodb.MongoClient;
const dbHost = process.env.DB_HOST;
const dbName = process.env.DB_USER;
const dbCollection = process.env.DB_COLLECTION_LECTURE;

router.post('/type', function(req, res){
    res.send(req.session.user_type);
});

router.post('/list', function(req, res){
    MongoClient.connect(dbHost, function(error, client) {
        if(error) console.log(error);
        else {
            const db = client.db(dbName);
            db.collection(dbCollection).find().toArray(function(err, doc){
                if(err) console.log(err);
                res.send(doc);
            });
            client.close();
        }
    });
});

router.post('/register', function (req, res) {
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

        MongoClient.connect(dbHost, function (error, client) {
            if (error) console.log(error);
            else {
                const db = client.db(dbName);
                db.collection(dbCollection).insert({ date: Date.now(), id:id, name: name, email: email, title: title, description: description, schedule:schedule, price:price, match:null}, function (err, doc) {
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
export default router;