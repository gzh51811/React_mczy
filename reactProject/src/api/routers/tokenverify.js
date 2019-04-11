const express=require('express');
const Router = express.Router();

const {verify} = require('../token');

// 创建路由
const bodyParser=require('body-parser');
//引入封装的函数MongoDB
// const db=require('../db');

const mongodb=require('mongodb');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

// 创建json编码解析（把请求头content-type值为application/json时的数据格式化到request.body中）
const jsonParser = bodyParser.json();


/**
 * ctx
 */
Router.post('/',jsonParser,urlencodedParser,async (req,res)=>{
    // res.send("22222")
    // console.log(11111111)
    // console.log(req.body.data)
   let token=req.body.data;
//    console.log(token.username)
//    console.log(22222222)
   

     //验证token
    let res1 = verify(token);
    // console.log(res1)

    if(res1){
       res.send('200')
    }else{
        res.send('404')
    // }
    
}
});

module.exports = Router;