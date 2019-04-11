const express = require('express');
const Router = express.Router();
const bodyParser = require('body-parser');
//引入数据库
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// 创建json编码解析（把请求头content-type值为application/json时的数据格式化到request.body中）
const jsonParser = bodyParser.json();


Router.get('/', urlencodedParser, jsonParser, (req, res) => {
    // console.log(222)

    let { m } = req.query;  //解构 
    //   console.log(m)
    // console.log(2222222)
  

    MongoClient.connect("mongodb://localhost:27017", async function (err, client) {
        if (err) throw err;
        // console.log('竟来了')

        let db = client.db('shj'); //连接数据库
        // 使用某个集合
        let collecton = db.collection('cart');
        // console.log(2525)
        // console.log(m)

        // collecton.insertOne({ username,  password: md5(password) }, (err, data) => {
        //     console.log(data);
        // });

        //渲染
        if (m == 'xuanran') {
            // console.log(11224)
            // let {username,password} = req.body.params;
            let data = await collecton.find().toArray();
            // console.log(data)
            res.send(data)
            }  
            
        //加数量
        if (m == 'jia') {
            // console.log(11224)

            let {id,num} = req.query;
            console.log(id,num)
            let date=1;
            let data =await collecton.updateOne({commonId:id*1},{$set:{qty:num*1+date*1}});
            // let data = await collecton.find({id}).toArray();
            // console.log(data)
            res.send(data)
            } 
        
        //减数量
        if (m == 'jian') {
            // console.log(11224)
            // let {username,password} = req.body.params;
            let {id,num} = req.query;
            // console.log(num)
            // console.log(id)
            let date=1;
            let data =await collecton.updateOne({commonId:id*1},{$set:{qty:num*1-date*1}});
            // console.log(data)
            res.send(data)
            }  


            if (m == 'del') {
                // console.log(11224)
                // let {username,password} = req.body.params;
                let {goodsid} = req.query;
                console.log(goodsid)
                for(let i=0;i<goodsid.length;i++){
                    await collecton.remove({commonId:goodsid[i]*1});
                }
                res.send('ok')
                }  
    });
});



module.exports = Router;