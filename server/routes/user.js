import express from 'express';
import mongodb from 'mongodb';
import CryptoJS from 'crypto-js';

const router = express.Router();
const MongoClient = mongodb.MongoClient;
const dbHost = process.DB_HOST;
const dbName = process.DB_USER;

router.post('/login', function(req, res){
    const u_id = String(req.body.id);
    const u_pw = String(req.body.pw);
    MongoClient.connect(dbHost, function(error, client) {
        if(error) console.log(error);
        else {
            const db = client.db(dbName);
            db.collection('user').find({$and:[{id:u_id},{pw:u_pw}]}).toArray(function(err, doc){
                if(err) console.log(err);
                if(doc[0]){
                    if(Number(doc[0].active)==0) res.send("active");
                    else {
                        req.session.user_id=doc[0].name;
                        res.cookie("user", doc[0].name);
                        res.send("ok");
                    }
                }
                else res.send("fail");
            });
            client.close();
        }
    });
});
router.post('/logout', function(req, res){
    req.session.destroy(function(err){
        if(err) console.log(err);

        res.clearCookie('sid');
        res.clearCookie('user');
        res.send("ok");
     });
});
router.post('/signup', function(req, res){
    const u_id = String(req.body.id);
    const u_pw = String(req.body.pw);
    const u_name = String(req.body.name);
    const u_email = String(req.body.email);
    const u_phone = String(req.body.phone);
    const u_type = String(req.body.type);
    MongoClient.connect(dbHost, function(error, client) {
        if(error) console.log(error);
        else {
            const db = client.db(dbName);
            db.collection('user').find({$or:[{id:u_id},{name:u_name}]}).count(function(err, doc){
                if(err) console.log(err);
                if(Number(doc)==0){
                    db.collection('user').insert({id:u_id,pw:u_pw,name:u_name,email:u_email,u_phone,u_type,active:0,active_code:String(CryptoJS.SHA256(String(Date.now())))}, function(err, doc){
                        if(err) console.log(err);
                        res.send("ok");
                    });
                }
                else res.send("fail");
                client.close();
            });
        }
    });
});


export default router;