import React from 'react';
import './Home.scss';
import { Carousel, BackTop } from 'antd';

let Home = () => {
    return <div id="home">
        <div className="nctouch-home-top fixed-Width" id="headerWrapper">
            <header id="header" className="transparent cohesive header-linear-gradient">
                <div className="header-l">
                    <img src={require("./../assets/fenlei.png")} />
                </div>
                <div className="header-wrap">
                    <div className="header-inp">
                        <i id="sousuo" className="icon sousuo"></i>
                        <span className="search-input keyword" id="keyword">请输入关键词</span>
                    </div>
                </div>
                <div className="header-r">
                    <img src={require("./../assets/news.png")} />
                </div>
            </header >
            <div className="conten">
                <div className="hbanner">
                    <Carousel autoplay className='ul1'>

                        <li><img src={require("./../assets/hb1.jpg")} /></li>
                        <li><img src={require("./../assets/hb2.jpg")} /></li>
                        <li><img src={require("./../assets/hb3.jpg")} /></li>
                        <li><img src={require("./../assets/hb4.jpg")} /></li>
                        <li><img src={require("./../assets/hb5.png")} /></li>

                    </Carousel>
                    <div id="vipCardContainer">
                        <a className="vipCard" href="https://www.10street.cn/wap/tmpl/member/card/cardInfo.html">
                            <div className="vipCardTopic">
                                <div className="vipCardTitle">十号街海量会员特权</div>
                                <div id="oprateType">立即开通</div>
                            </div>
                            <div id="cardSort">
                                <div className="cardItem">
                                    <p>非会员</p>
                                    <p>7天白卡会员</p>
                                    <p>免费试用</p>
                                </div>
                                <div className="cardItem">
                                    <p>白卡会员</p>
                                    <p>100/月</p>
                                    <p>全品类券</p>
                                </div>
                                <div className="cardItem">
                                    <p>红卡会员</p>
                                    <p>200/月</p>
                                    <p>全品类券</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div id="slideContainer">
                    <img src={require("./../assets/vipdi.png")} className="vipCardBottom" />
                    <div id="mainContainer">
                        <div className="marBtw hotClassify fixed-Width">
                            <ul>
                                <li>
                                    <a href="https://www.10street.cn/wap/special.html?specialId=198">
                                        <img src={require("./../assets/bb1.png")} />
                                        <span>9.9爆款</span>
                                    </a>
                                </li>

                                <li>
                                    <a href="https://www.10street.cn/wap/special.html?specialId=509">
                                        <img src={require("./../assets/bb2.png")} />
                                        <span>新人专享</span>
                                    </a>
                                </li>

                                <li>
                                    <a href="https://www.10street.cn/wap/special.html?specialId=513">
                                        <img src={require("./../assets/bb3.png")} />
                                        <span>十号精选</span>
                                    </a>
                                </li>

                                <li>
                                    <a href="https://www.10street.cn/wap/special.html?specialId=501">
                                        <img src={require("./../assets/bb4.png")} />
                                        <span>领券中心</span>
                                    </a>
                                </li>

                                <li>
                                    <a href="https://www.10street.cn/wap/tmpl/category.html">
                                        <img src={require("./../assets/bb5.png")} />
                                        <span>热门分类</span>
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className="nctouch-home-block item-text item-text2019 marBtw">
                        <div className="tempWrap" style={{ overflow: "hidden", position: "relative", height: "30px" }}>
                            <Carousel vertical autoplay dots='false' className="item-text-list" style={{ height: '90px', position: 'relative', padding: '0px', margin: ' 0px' }}>
                                <li className="item clone" style={{ height: '30px' }}>
                                    <a>
                                        <span className="hot">NEW</span>
                                        <span className="ellipsis hotContent">清明假期发货公告详情</span>
                                    </a>
                                </li>
                                <li className="item" style={{ height: '30px' }}>
                                    <a>
                                        <span className="hot">HOT</span>
                                        <span className="ellipsis hotContent">买戴森v11新品赠300元充值卡！</span>
                                    </a>
                                </li>
                                <li className="item" style={{ height: '30px' }}>
                                    <a>
                                        <span className="hot">HOT</span>
                                        <span className="ellipsis hotContent">春日尝鲜专场，生鲜遇上酒滋味</span>
                                    </a>
                                </li>
                            </Carousel>
                        </div>
                    </div>
                    <div className="nctouch-home-block title-block mt10">
                        <div className="item-title">

                            <a href="https://www.10street.cn/wap/special.html?specialId=380">
                                <div className="title-text">新品首发</div>

                                <div className="title-more">
                                    <span>更多</span>
                                    <img src={require("./../assets/gengduo.png")} style={{ verticalAlign: 'center !important' }} />
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="swiper-container oneRowOneBlock marBtw mt5 swiper-container-horizontal">
                        <Carousel autoplay dots="false" className="swiper-wrapper">
                            <li className="swiper-slide swiper-slide-active" style={{ width: "392px" }}>
                                <a href="https://www.10street.cn/wap/tmpl/product_detail.html?commonId=11595">
                                    <img className="border-radio-15" src={require("./../assets/bc1.png")} />
                                </a>
                            </li>

                            <li className="swiper-slide swiper-slide-next" style={{ width: "392px" }}>
                                <a href="https://www.10street.cn/wap/tmpl/product_detail.html?commonId=11372">
                                    <img className="border-radio-15" src={require("./../assets/bc2.png")} />
                                </a>
                            </li>

                        </Carousel>

                        <div className="swiper-pagination swiper-pagination-bullets">
                            <span className="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
                            <span className="swiper-pagination-bullet"></span>
                        </div>

                    </div>
                    <div className="nctouch-home-block title-block mt10">
                        <div className="item-title">
                            <a href="javascript:;">
                                <div className="title-text">会员甄选</div>
                            </a>
                        </div>
                    </div>
                    <div className="nctouch-home-block border-radio-15 left-one-right-two marBtw mt5">
                        <ul className="item-pic-l1-r2">
                            <li>
                                <div>尖货</div>
                                <div>会员专享 只为挑剔的你</div>
                                <img src={require("./../assets/bd1.jpg")} />
                            </li>
                            <li>
                                <div>上新推荐</div>
                                <div>第一手好货</div>
                                <img src={require("./../assets/bd2.png")} />
                            </li>
                            <li>
                                <div>品牌街</div>
                                <div>发现品质好物</div>
                                <img src={require("./../assets/bd3.jpg")} />
                            </li>
                        </ul>
                    </div>
                    <div className="nctouch-home-block title-block mt10">
                        <div className="item-title">
                            <a href="javascript:;">
                                <div className="title-text">聚实惠</div>
                            </a>
                        </div>
                    </div>
                    <div className="timeLimitBlock marBtw mt5">
                        <div className="timeLimitTop">
                            <div className="timeLimitTitleBlock">
                                <img className="timelimitIcon" src={require("./../assets/miaosha.png")} />
                                <a className="title-more" href="tmpl/timeLimit.html">
                                    <span>更多</span>
                                    <img src={require("./../assets/gengduo.png")} />
                                </a>
                            </div>
                            <div className="add swiper-multi timeLimitSwiper" style={{ position: "relative" }}>
                                <div className="swipe-wrap" id="timeLimitSwipeWrap">
                                    <div className="item">
                                        <ul id="timeLimitGoodsUl">
                                            <li>
                                                <img src="https://image.10street.cn/image/c1/5b/c15baabc4d639a6f7ad6ae02f884c2c9.jpg" />
                                                <div className="ellipsis-line2 goods-name">CHALI茶里 </div>
                                                <div className="ellipsis goods-price">秒杀价：<span>￥149</span></div>
                                            </li>
                                        </ul>

                                        <ul id="timeLimitGoodsUl">
                                            <li>
                                                <img src="https://image.10street.cn/image/e2/0c/e20cd115a4808d14af475225d814b017.jpg" />
                                                <div className="ellipsis-line2 goods-name">超能 女士内衣专</div>
                                                <div className="ellipsis goods-price">秒杀价：<span>￥4.9</span></div>
                                            </li>
                                        </ul>

                                        <ul id="timeLimitGoodsUl">
                                            <li>
                                                <img src="https://image.10street.cn/image/1f/75/1f759586a89006d7b74fd4257bef85b1.jpg" />
                                                <div className="ellipsis-line2 goods-name">阿道夫 750M</div>
                                                <div className="ellipsis goods-price">秒杀价：<span>￥59</span></div>
                                            </li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                            <ul className="swiper-multi-wrap-index timeLimitBlockDot pagetation">
                            </ul>
                        </div>
                        <div className="timeLimitBottom">
                            <a className="timeLimitBottomItem">
                                <div>超值拼团</div>
                                <div>物美价廉 不拼不行</div>
                                <img src={require("./../assets/bd5.png")} />
                            </a>
                            <a className="timeLimitBottomItem">
                                <div>今日特惠</div>
                                <div>限量特惠  先到先得</div>
                                <img src={require("./../assets/bd4.jpg")} />
                            </a>
                        </div>
                    </div>
                    <div className="nctouch-home-block title-block mt10">
                        <div className="item-title">
                            <a href="javascript:;">
                                <div className="title-text">礼礼相送</div>
                            </a>
                        </div>
                    </div>
                    <div className="swiper-container oneRowOneBlock marBtw mt5 swiper-container-horizontal">
                        <Carousel autoplay dots="false" className="swiper-wrapper">
                            <div className="swiper-slide swiper-slide-active">
                                <a>
                                    <img className="border-radio-15" src={require("./../assets/be1.jpg")} />
                                </a>
                            </div>
                            <div className="swiper-slide swiper-slide-next">
                                <a>
                                    <img className="border-radio-15" src={require("./../assets/be2.png")} />
                                </a>
                            </div>
                        </Carousel>
                        <div className="swiper-pagination swiper-pagination-bullets">
                            <span className="swiper-pagination-bullet swiper-pagination-bullet-active"></span><span className="swiper-pagination-bullet"></span></div>
                    </div>
                    <div className="findGood">
                        <div className="lrLineTopic">
                            <div className="lineTopic">
                                <div className="findGoodline"></div>
                                <div className="text">发现好物</div>
                                <div className="findGoodline"></div>
                            </div>
                            <div className="subTitle">小米生态链精选</div>
                        </div>
                        <div className="swiper-container GoodsImgSwipe swiper-container-horizontal">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide swiper-slide-prev" style={{ position: 'absolute', left: '-4.5rem' }}>
                                    <div className="swipercon" >
                                        <img src={require("./../assets/bf1.png")} />
                                        <div className="ellipsis name">优乐随身K歌音响</div>
                                        <div className="ellipsis price">会员价：<span>￥449</span></div>
                                    </div>
                                </div>
                                <div className="swiper-slide swiper-slide-active" style={{ position: 'absolute', left: '2rem' }}>
                                    <div className="swipercon">
                                        <img src={require("./../assets/bf1.png")} />
                                        <div className="ellipsis name">素士X3电动牙刷</div>
                                        <div className="ellipsis price">会员价：<span>￥269</span></div>
                                    </div>
                                </div>
                                <div className="swiper-slide swiper-slide-next" style={{ position: 'absolute', right: '-4.5rem' }}>
                                    <div className="swipercon">
                                        <img src={require("./../assets/bf1.png")} />
                                        <div className="ellipsis name">品罗小怪兽榨汁机</div>
                                        <div className="ellipsis price">会员价：<span>￥189</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="findMoreGoods">发现更多好物</a>
                    </div>
                    <BackTop visibilityHeight>
                        <div className="fix-block-r">
                            <a href="javascript:void(0);" className="gotop-btn gotop" id="goTopBtn"><i></i></a>
                        </div>
                    </BackTop>
                    <div className="nctouch-home-block title-block mt10">
                        <div className="item-title">
                            <a>
                                <div className="title-text">3C数码</div>
                                <div className="title-more">
                                    <span>更多</span>
                                    <img src={require('./../assets/gengduo.png')} />
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="swiper-container oneRowOneBlock marBtw mt5 swiper-container-horizontal">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide swiper-slide-active" style={{ width: "4.733333*2rem" }}>
                                <a>
                                    <img className="border-radio-15" src="https://image.10street.cn/image/5e/39/5e39fbde272033a96ad5922d9a5de1c6.jpg" />
                                </a>
                            </div>

                        </div>

                    </div>
                    <div className="swiper-container oneRowThreeBlock swiper-container-horizontal">
                        <Carousel dots="false" className="swiper-wrapper">
                            <ul>
                                <li>
                                    <img src="https://image.10street.cn/image/d4/0b/d40b3d2ff25ca66e33d3be388021397c.jpg" />
                                    <div className="goods-name">苹果air平板 </div>
                                    <div className="ellipsis goods-price">会员价：<span>￥3989</span></div>
                                </li>
                                <li>
                                    <img src="https://image.10street.cn/image/a0/06/a0060f0bfe70e8d973d1444de617a7af.jpg" />
                                    <div className="goods-name">苹果mini平板</div>
                                    <div className="ellipsis goods-price">会员价：<span>￥2989</span></div>
                                </li>

                                <li>
                                    <img src="https://image.10street.cn/image/48/d2/48d2cf52347d6668a67a61f21a53c96e.jpg" />
                                    <div className="goods-name">AirPods </div>
                                    <div className="ellipsis goods-price">会员价：<span>￥1269</span></div>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <img src="https://image.10street.cn/image/d9/9f/d99f4b4d87b932a4ef02db7669f5277b.jpg" />
                                    <div className="goods-name">BO蓝牙运动耳机</div>
                                    <div className="ellipsis goods-price">会员价：<span>￥1675</span></div>
                                </li>
                            </ul>
                        </Carousel>
                    </div>
                    <div className="nctouch-home-block title-block mt10">
                        <div className="item-title">
                            <a>
                                <div className="title-text">美妆个护</div>
                                <div className="title-more">
                                    <span>更多</span>
                                    <img src={require('./../assets/gengduo.png')} />
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="swiper-container oneRowOneBlock marBtw mt5 swiper-container-horizontal">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide swiper-slide-active" style={{ width: "4.733333*2rem" }}>
                                <a>
                                    <img className="border-radio-15" src="https://image.10street.cn/image/7c/b6/7cb66f3716476d7ef3f9019bb552b8d9.jpg" />
                                </a>
                            </div>

                        </div>

                    </div>
                    <div className="swiper-container oneRowThreeBlock swiper-container-horizontal">
                        <Carousel dots="false" className="swiper-wrapper">
                            <ul>
                                <li>
                                    <img src="https://image.10street.cn/image/d4/0b/d40b3d2ff25ca66e33d3be388021397c.jpg" />
                                    <div className="goods-name">苹果air平板 </div>
                                    <div className="ellipsis goods-price">会员价：<span>￥3989</span></div>
                                </li>
                                <li>
                                    <img src="https://image.10street.cn/image/a0/06/a0060f0bfe70e8d973d1444de617a7af.jpg" />
                                    <div className="goods-name">苹果mini平板</div>
                                    <div className="ellipsis goods-price">会员价：<span>￥2989</span></div>
                                </li>

                                <li>
                                    <img src="https://image.10street.cn/image/48/d2/48d2cf52347d6668a67a61f21a53c96e.jpg" />
                                    <div className="goods-name">AirPods </div>
                                    <div className="ellipsis goods-price">会员价：<span>￥1269</span></div>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <img src="https://image.10street.cn/image/d9/9f/d99f4b4d87b932a4ef02db7669f5277b.jpg" />
                                    <div className="goods-name">BO蓝牙运动耳机</div>
                                    <div className="ellipsis goods-price">会员价：<span>￥1675</span></div>
                                </li>
                            </ul>
                        </Carousel>
                    </div>
                    <div className="nctouch-home-block title-block mt10">
                        <div className="item-title">
                            <a>
                                <div className="title-text">家用电器</div>
                                <div className="title-more">
                                    <span>更多</span>
                                    <img src={require('./../assets/gengduo.png')} />
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="swiper-container oneRowOneBlock marBtw mt5 swiper-container-horizontal">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide swiper-slide-active" style={{ width: "4.733333*2rem" }}>
                                <a>
                                    <img className="border-radio-15" src="https://image.10street.cn/image/3d/a5/3da5c2c6272d9c871f120d4f351b8b50.jpg" />
                                </a>
                            </div>

                        </div>

                    </div>
                    <div className="swiper-container oneRowThreeBlock swiper-container-horizontal">
                        <Carousel dots="false" className="swiper-wrapper">
                            <ul>
                                <li>
                                    <img src="https://image.10street.cn/image/d4/0b/d40b3d2ff25ca66e33d3be388021397c.jpg" />
                                    <div className="goods-name">苹果air平板 </div>
                                    <div className="ellipsis goods-price">会员价：<span>￥3989</span></div>
                                </li>
                                <li>
                                    <img src="https://image.10street.cn/image/a0/06/a0060f0bfe70e8d973d1444de617a7af.jpg" />
                                    <div className="goods-name">苹果mini平板</div>
                                    <div className="ellipsis goods-price">会员价：<span>￥2989</span></div>
                                </li>

                                <li>
                                    <img src="https://image.10street.cn/image/48/d2/48d2cf52347d6668a67a61f21a53c96e.jpg" />
                                    <div className="goods-name">AirPods </div>
                                    <div className="ellipsis goods-price">会员价：<span>￥1269</span></div>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <img src="https://image.10street.cn/image/d9/9f/d99f4b4d87b932a4ef02db7669f5277b.jpg" />
                                    <div className="goods-name">BO蓝牙运动耳机</div>
                                    <div className="ellipsis goods-price">会员价：<span>￥1675</span></div>
                                </li>
                            </ul>
                        </Carousel>
                    </div>
                    <div className="nctouch-home-block title-block mt10">
                        <div className="item-title">
                            <a>
                                <div className="title-text">美味生鲜</div>
                                <div className="title-more">
                                    <span>更多</span>
                                    <img src={require('./../assets/gengduo.png')} />
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="swiper-container oneRowOneBlock marBtw mt5 swiper-container-horizontal">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide swiper-slide-active" style={{ width: "4.733333*2rem" }}>
                                <a>
                                    <img className="border-radio-15" src="https://image.10street.cn/image/9b/37/9b37a7b074f4bf234e8cbc2a23e39a8a.jpg" />
                                </a>
                            </div>

                        </div>

                    </div>
                    <div className="swiper-container oneRowThreeBlock swiper-container-horizontal">
                        <Carousel dots="false" className="swiper-wrapper">
                            <ul>
                                <li>
                                    <img src="https://image.10street.cn/image/d4/0b/d40b3d2ff25ca66e33d3be388021397c.jpg" />
                                    <div className="goods-name">苹果air平板 </div>
                                    <div className="ellipsis goods-price">会员价：<span>￥3989</span></div>
                                </li>
                                <li>
                                    <img src="https://image.10street.cn/image/a0/06/a0060f0bfe70e8d973d1444de617a7af.jpg" />
                                    <div className="goods-name">苹果mini平板</div>
                                    <div className="ellipsis goods-price">会员价：<span>￥2989</span></div>
                                </li>

                                <li>
                                    <img src="https://image.10street.cn/image/48/d2/48d2cf52347d6668a67a61f21a53c96e.jpg" />
                                    <div className="goods-name">AirPods </div>
                                    <div className="ellipsis goods-price">会员价：<span>￥1269</span></div>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <img src="https://image.10street.cn/image/d9/9f/d99f4b4d87b932a4ef02db7669f5277b.jpg" />
                                    <div className="goods-name">BO蓝牙运动耳机</div>
                                    <div className="ellipsis goods-price">会员价：<span>￥1675</span></div>
                                </li>
                            </ul>
                        </Carousel>
                    </div>
                    <div className="nctouch-home-block title-block mt10">
                        <div className="item-title">
                            <a>
                                <div className="title-text">服饰箱包</div>
                                <div className="title-more">
                                    <span>更多</span>
                                    <img src={require('./../assets/gengduo.png')} />
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="swiper-container oneRowOneBlock marBtw mt5 swiper-container-horizontal">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide swiper-slide-active" style={{ width: "4.733333*2rem" }}>
                                <a>
                                    <img className="border-radio-15" src="https://image.10street.cn/image/eb/1d/eb1d35035cde4f0a9965d03df7769dd7.jpg" />
                                </a>
                            </div>

                        </div>

                    </div>
                    <div className="swiper-container oneRowThreeBlock swiper-container-horizontal">
                        <Carousel dots="false" className="swiper-wrapper">
                            <ul>
                                <li>
                                    <img src="https://image.10street.cn/image/d4/0b/d40b3d2ff25ca66e33d3be388021397c.jpg" />
                                    <div className="goods-name">苹果air平板 </div>
                                    <div className="ellipsis goods-price">会员价：<span>￥3989</span></div>
                                </li>
                                <li>
                                    <img src="https://image.10street.cn/image/a0/06/a0060f0bfe70e8d973d1444de617a7af.jpg" />
                                    <div className="goods-name">苹果mini平板</div>
                                    <div className="ellipsis goods-price">会员价：<span>￥2989</span></div>
                                </li>

                                <li>
                                    <img src="https://image.10street.cn/image/48/d2/48d2cf52347d6668a67a61f21a53c96e.jpg" />
                                    <div className="goods-name">AirPods </div>
                                    <div className="ellipsis goods-price">会员价：<span>￥1269</span></div>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <img src="https://image.10street.cn/image/d9/9f/d99f4b4d87b932a4ef02db7669f5277b.jpg" />
                                    <div className="goods-name">BO蓝牙运动耳机</div>
                                    <div className="ellipsis goods-price">会员价：<span>￥1675</span></div>
                                </li>
                            </ul>
                        </Carousel>
                    </div>
                    <div className="nctouch-home-block title-block mt10">
                        <div className="item-title">
                            <a>
                                <div className="title-text">家居日用</div>
                                <div className="title-more">
                                    <span>更多</span>
                                    <img src={require('./../assets/gengduo.png')} />
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="swiper-container oneRowOneBlock marBtw mt5 swiper-container-horizontal">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide swiper-slide-active" style={{ width: "4.733333*2rem" }}>
                                <a>
                                    <img className="border-radio-15" src="https://image.10street.cn/image/f3/14/f314f02419e4236bae7ca14eb04e2dc7.jpg" />
                                </a>
                            </div>

                        </div>

                    </div>
                    <div className="swiper-container oneRowThreeBlock swiper-container-horizontal">
                        <Carousel dots="false" className="swiper-wrapper">
                            <ul>
                                <li>
                                    <img src="https://image.10street.cn/image/d4/0b/d40b3d2ff25ca66e33d3be388021397c.jpg" />
                                    <div className="goods-name">苹果air平板 </div>
                                    <div className="ellipsis goods-price">会员价：<span>￥3989</span></div>
                                </li>
                                <li>
                                    <img src="https://image.10street.cn/image/a0/06/a0060f0bfe70e8d973d1444de617a7af.jpg" />
                                    <div className="goods-name">苹果mini平板</div>
                                    <div className="ellipsis goods-price">会员价：<span>￥2989</span></div>
                                </li>

                                <li>
                                    <img src="https://image.10street.cn/image/48/d2/48d2cf52347d6668a67a61f21a53c96e.jpg" />
                                    <div className="goods-name">AirPods </div>
                                    <div className="ellipsis goods-price">会员价：<span>￥1269</span></div>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <img src="https://image.10street.cn/image/d9/9f/d99f4b4d87b932a4ef02db7669f5277b.jpg" />
                                    <div className="goods-name">BO蓝牙运动耳机</div>
                                    <div className="ellipsis goods-price">会员价：<span>￥1675</span></div>
                                </li>
                            </ul>
                        </Carousel>
                    </div>
                    <div className="lrLineTopic">
                        <div className="lineTopic">
                            <div className="findGoodline"></div>
                            <div className="text"> 为你推荐</div>
                            <div className="findGoodline"></div>
                        </div>
                    </div>
                    <div className="nctouch-home-block item-goods">
                        <ul className="goods-list">

                            <li>
                                <div className="goods-pic"><img src="https://image.10street.cn/image/84/42/8442034ed411ddc526039eac1d18baac.jpg" /></div>
                                <dl className="goods-info">
                                    <dt className="ellipsis goods-name goods-names">
                                        <img src="https://www.10street.cn/wap/images/product/vipPrice0.png" />
                                        斐珞尔go洁面仪
                                    </dt>
                                    <dd className="goods-price goods-prices">会员价：<em>￥603.00</em>
                                    </dd>
                                    <dd className="goods-oriPrice">非会员价：￥<em>799.00</em></dd>
                                </dl>
                            </li>
                            <li>
                                <div className="goods-pic"><img src="https://image.10street.cn/image/02/d2/02d2d274eca47a5cf7aa959339e1a36c.jpg" /></div>
                                <dl className="goods-info">
                                    <dt className="ellipsis goods-name goods-names">
                                        <img src="https://www.10street.cn/wap/images/product/vipPrice0.png" />
                                        ReFa美容仪
                                    </dt>
                                    <dd className="goods-price goods-prices">会员价：<em>￥1299.00</em>
                                    </dd>
                                    <dd className="goods-oriPrice">非会员价：￥<em>1790.00</em></dd>
                                </dl>
                            </li>
                            <li>
                                <div className="goods-pic"><img src="https://image.10street.cn/image/1f/d8/1fd849a6b5bbaa3883fcb9dea94be034.jpg" /></div>
                                <dl className="goods-info">
                                    <dt className="ellipsis goods-name goods-names">
                                        <img src="https://www.10street.cn/wap/images/product/vipPrice0.png" />
                                        BO E8耳机
                                    </dt>
                                    <dd className="goods-price goods-prices">会员价：<em>￥1698.00</em>
                                    </dd>
                                    <dd className="goods-oriPrice">非会员价：￥<em>2298.00</em></dd>
                                </dl>
                            </li>
                            <li>
                                <div className="goods-pic"><img src="https://image.10street.cn/image/5b/70/5b70218f3ddf1575f0971dd94a307545.jpg" /></div>
                                <dl className="goods-info">
                                    <dt className="ellipsis goods-name goods-names">
                                        <img src="https://www.10street.cn/wap/images/product/vipPrice0.png" />
                                        同记 燕窝阿胶含
                                    </dt>
                                    <dd className="goods-price goods-prices">会员价：<em>￥25.00</em>
                                    </dd>
                                    <dd className="goods-oriPrice">非会员价：￥<em>78.00</em></dd>
                                </dl>
                            </li>
                        </ul>
                    </div>
                </div>
            </div >
            <div className='footer'>
                <div className='diandi'></div>
                <div className="bottom-bar-pannel J-bridge" style={{ zIndex: "10" }}>
                    <ul className="tab5">
                        <li className="selected">
                            <span className="bar-img">
                                <i className="index"></i>
                                <p>首页</p>
                            </span>
                        </li>
                        <li>
                            <span className="bar-img">
                                <i className="find"></i>
                                <p>发现</p>
                            </span>
                        </li>
                        <li>
                            <span className="bar-img">
                                <i className="gift"></i>
                                <p>礼礼相送</p>
                            </span>
                        </li>
                        <li>
                            <span className="bar-img">
                                <i className="cart"></i>
                                <p>购物车</p>
                            </span>
                        </li>
                        <li>
                            <span className="bar-img">
                                <i className="user"></i>
                                <p>我的</p>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
}

export default Home;