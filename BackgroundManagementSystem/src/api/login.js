const express = require('express');
const Router = express.Router();
const bodyParser = require('body-parser');
//引入封装了连接MongoDB的函数
// const db = require('../db');
// const token = require('../token');

const mongodb = require('mongodb');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// 创建json编码解析（把请求头content-type值为application/json时的数据格式化到request.body中）
const jsonParser = bodyParser.json();

//接收js中login.js前端传的数据
Router.post('/api/login', jsonParser, urlencodedParser, (req, res) => {
    //获取前端的传过来的用户名和密码
    console.log(req.body)
    let _username = req.body.username;
    let _password = req.body.password;
    // console.log(_username,_password)
    res.send("ok");
    // //创建MongoDB客户端
    // const MongoClient =mongodb.MongoClient;

    // //连接mongoDB
    // MongoClient.connect('mongodb://localhost:27017',
    // {useNewUrlParser:true},function(err,client){
    //     if(err) throw err;
    //     let db=client.db('weixiao');

    //     //使用集合
    //     let collecton=db.collection('user');

    //查询数据库中是否存在
    // (async () => {
    //     let name = await db.find('user', { username: _username, password: _password });
    //     // console.log(name)
    //     if (name.length) {
    //         let _token = token.create(_username);

    //         res.send({ name, token: _token, status: 'ok' })
    //     } else {
    //         res.send({ status: 'no' })
    //     }
    // })()
})
