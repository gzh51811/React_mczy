const express = require('express');
const Router = express.Router();


const regRouter = require('./jiekou'); 
const cartRouter = require('./cartjiekou'); 
//使用路由
// Router.use('/cart', cartRouter)
// Router.use('/cart1', cart1Router)
// Router.use('/goods', goodsRouter)

Router.use('/jiekou', regRouter);
Router.use('/cartjiekou', cartRouter);
const homeRouter = require("./home");
const foundRouter = require("./found");
const giftRouter = require("./gift");
const goodsRouter = require("./goods");
//使用路由
Router.use("/home", homeRouter);
Router.use("/found", foundRouter);
Router.use("/gift", giftRouter);
Router.use("/goods", goodsRouter);
// Router.use("/home", homeRouter);

module.exports = Router;