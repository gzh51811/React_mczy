const express = require('express');
const Router = express.Router();


const homeRouter = require("./home");
const foundRouter = require("./found");
const giftRouter = require("./gift");
const goodsRouter = require("./goods");
//使用路由
Router.use("/home", homeRouter);
Router.use("/found", foundRouter);
Router.use("/gift", giftRouter);
Router.use("/goods", goodsRouter);

module.exports = Router;