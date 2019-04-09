const express = require('express');
const Router = express.Router();
const bodyParser = require('body-parser');
const db = require('../db');

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let urlencodedParser = bodyParser.urlencoded({ extended: false });
let jsonParser = bodyParser.json();

Router.get('/', urlencodedParser, jsonParser, async (req, res) => {
    //获取数据渲染
    let { id } = req.query;
    // console.log(id)
    let data = await db.find('detailgoodslist', { commonId: id * 1 });//字符串*1隐式转换为数字
    // console.log(data);
    res.send(data)
});


module.exports = Router;