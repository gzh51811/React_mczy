const express = require('express');
const Router = express.Router();
var md5 = require('md5');
const bodyParser = require('body-parser');
const { create } = require('./token');
const { verify } = require('./token');

//引入数据库
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// 创建json编码解析（把请求头content-type值为application/json时的数据格式化到request.body中）
const jsonParser = bodyParser.json();


Router.post('/', urlencodedParser, jsonParser, (req, res) => {
    // console.log(222)

    let { m } = req.body.params;  //解构 
    //   console.log(m)
    // console.log(2222222)
  

    MongoClient.connect("mongodb://localhost:27017", async function (err, client) {
        if (err) throw err;
        // console.log('竟来了')

        let db = client.db('shj'); //连接数据库
        // 使用某个集合
        let collecton = db.collection('user');

        // collecton.insertOne({ username,  password: md5(password) }, (err, data) => {
        //     console.log(data);
        // });
        if (m == 'login') {
            let {username,password} = req.body.params;
            let data = await collecton.find({ $and:[{username},{password:md5(password)}]}).toArray();
            console.log(11111)
            // console.log(data)

            if (data.length > 0) {
                let _token = create(username);
                let _username = username;
                res.send({
                    msg: '登录成功',
                    _token,
                    _username,
                    code: 1
                });
            }else {
                res.send({
                    msg: '登录失败',
                    code: 0
                });
            }
        }
        
        //验证token
        if (m == 'token') {
            let { data: token } = req.body.params;
            let res1 = verify(token);
            // console.log(res1)

            if (res1) {
                res.send('200')
            } else {
                res.send('404')
            }
        }

        //验证用户名是否已注册过
        if (m =='reg') {
            console.log(111)
            let { username,password} = req.body.params;
            let res2 = await collecton.find({ username }).toArray();
            
            if (res2.length>0) {
                res.send({
                    msg: '用户名已被注册过',
                    code: 404
                });
            }else {
                 await collecton.insertOne({ username, password: md5(password) });
                res.send({
                    msg: '注册成功',
                    code: 200
                });
            }
        }
       
        


    //     //验证用户名是否已注册过
    //     if (m == 'register') {
    //         let { username,password } = req.body;
    //         let res2 = await collecton.insertOne({ username, password: md5(password) });
            
    //         if (res2) {
    //             res.send({
    //                 msg: '注册成功',
    //                 code: 200
    //             });
    //         }else {
    //             res.send({
    //                 msg: '注册失败',
    //                 code: 404
    //             });
    //         }
    //     }

    });
});



module.exports = Router;