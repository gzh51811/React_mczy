import React from 'react';
import './../css/Home.css';
import Dibu from './Dibu';
import { Carousel, BackTop } from 'antd';
import withAxios from '../hoc/withAxios';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            datalist: [],
            datalist1: [],
            datalist2: [],
            datalist3: [],
            datalist4: [],
            datalist5: [],
            datalist6: [],
            datalist7: [],
            datalist8: [],
            datalist9: [],
            datalist10: [],
            datalist11: [],
            datalist12: [],
            datalist13: [],
            datalist14: []
        }
        this.gotoGoods = this.gotoGoods.bind(this);

        // this.gotoGoods = this.gotoGoods.bind(this);
    }

    async componentWillMount() {
        // 使用axios
        let { data } = await this.props.axios.get('/api/home', {
            params: {
            }
        });

        // console.log(data);

        this.setState({
            datalist: data,
            datalist1: data.slice(0, 3),
            datalist2: data.slice(3, 6),
            datalist3: data.slice(6, 9),
            datalist4: data.slice(9, 12),
            datalist5: data.slice(12, 15),
            datalist6: data.slice(15, 18),
            datalist7: data.slice(18, 21),
            datalist8: data.slice(38, 41),
            datalist9: data.slice(24, 27),
            datalist10: data.slice(27, 30),
            datalist11: data.slice(30, 33),
            datalist12: data.slice(44, 47),
            datalist13: data.slice(47, 50),
            datalist14: data.slice(0, 18)
        });
    }

    gotoGoods(id) {
        // console.log(id);
        // console.log(this)
        window.scrollTo(0, 0);
        let { history } = this.props;

        history.push({
            pathname: '/goods/' + id,
            search: '?id=' + id,
            state: {
                id
            }
        })
    }
    gotoFound() {
        // console.log(this.props)
        window.scrollTo(0, 0);
        let { history } = this.props;
        history.push({
            pathname: '/found'
        })
    }
    gotoGift() {
        window.scrollTo(0, 0);
        let { history } = this.props;
        history.push({
            pathname: '/gift'
        })
    }
    render() {
        return <div id="home">
            <div className="nctouch-home-top fixed-Width" id="headerWrapper">
                <header id="header" className="transparent cohesive header-linear-gradient">
                    <div className="header-l" onClick={this.gotoGift.bind(this)}>
                        <img src={require("./../assets/fenlei.png")} />
                    </div>
                    <div className="header-wrap">
                        <div className="header-inp">
                            <i id="sousuo" className="icon sousuo"></i>
                            <span className="search-input keyword" id="keyword">请输入关键词</span>
                        </div>
                    </div>
                    <div className="header-r" onClick={this.gotoFound.bind(this)}>
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
                            <a className="vipCard">
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
                                        <a>
                                            <img src={require("./../assets/bb1.png")} />
                                            <span>9.9爆款</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a>
                                            <img src={require("./../assets/bb2.png")} />
                                            <span>新人专享</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a>
                                            <img src={require("./../assets/bb3.png")} />
                                            <span>十号精选</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a>
                                            <img src={require("./../assets/bb4.png")} />
                                            <span>领券中心</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a>
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
                                    <a>
                                        <img className="border-radio-15" src={require("./../assets/bc1.png")} />
                                    </a>
                                </li>

                                <li className="swiper-slide swiper-slide-next" style={{ width: "392px" }}>
                                    <a>
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
                                            <ul id="timeLimitGoodsUl" >
                                                {
                                                    this.state.datalist1.map(goods => {
                                                        return <li id={goods.commonId} onClick={this.gotoGoods.bind(this, goods.commonId)}>
                                                            <img src={goods.imageSrc} />
                                                            <div className="ellipsis-line2 goods-name">{goods.goodsName} </div>
                                                            <div className="ellipsis goods-price">秒杀价：<span>￥{goods.appPriceMin}</span></div>
                                                        </li>
                                                    })
                                                }
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
                                    <div className="swiper-slide swiper-slide-prev" style={{ position: 'absolute', left: '-4.5rem', transform: 'scale(0.9)' }}>
                                        {
                                            this.state.datalist.slice(0, 1).map(goods => {
                                                return <div className="swipercon" id={goods.commonId} onClick={this.gotoGoods.bind(this, goods.commonId)}>
                                                    <img src={goods.imageSrc} />
                                                    <div className="ellipsis name">{goods.goodsName}</div>
                                                    <div className="ellipsis price">会员价：<span>￥{goods.appPriceMin}</span></div>
                                                </div>
                                            })
                                        }

                                    </div>
                                    <div className="swiper-slide swiper-slide-active" style={{ position: 'absolute', left: '2rem' }}>
                                        {
                                            this.state.datalist.slice(1, 2).map(goods => {
                                                return <div className="swipercon" id={goods.commonId} onClick={this.gotoGoods.bind(this, goods.commonId)}>
                                                    <img src={goods.imageSrc} />
                                                    <div className="ellipsis name">{goods.goodsName}</div>
                                                    <div className="ellipsis price">会员价：<span>￥{goods.appPriceMin}</span></div>
                                                </div>
                                            })
                                        }
                                    </div>
                                    <div className="swiper-slide swiper-slide-next" style={{ position: 'absolute', right: '-4.5rem', transform: 'scale(0.9)' }}>
                                        {
                                            this.state.datalist.slice(2, 3).map(goods => {
                                                return <div className="swipercon" id={goods.commonId} onClick={this.gotoGoods.bind(this, goods.commonId)}>
                                                    <img src={goods.imageSrc} />
                                                    <div className="ellipsis name">{goods.goodsName}</div>
                                                    <div className="ellipsis price">会员价：<span>￥{goods.appPriceMin}</span></div>
                                                </div>
                                            })
                                        }
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
                                    {
                                        this.state.datalist2.map(goods => {
                                            return <li id={goods.commonId} onClick={this.gotoGoods.bind(this, goods.commonId)}>
                                                <img src={goods.imageSrc} />
                                                <div className="goods-name">{goods.goodsName} </div>
                                                <div className="ellipsis goods-price">会员价：<span>￥{goods.appPriceMin}</span></div>
                                            </li>
                                        })
                                    }
                                </ul>
                                <ul>
                                    {
                                        this.state.datalist3.map(goods => {
                                            return <li id={goods.commonId}>
                                                <img src={goods.imageSrc} />
                                                <div className="goods-name">{goods.goodsName} </div>
                                                <div className="ellipsis goods-price">会员价：<span>￥{goods.appPriceMin}</span></div>
                                            </li>
                                        })
                                    }
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
                                    {
                                        this.state.datalist4.map(goods => {
                                            return <li id={goods.commonId} onClick={this.gotoGoods.bind(this, goods.commonId)}>
                                                <img src={goods.imageSrc} />
                                                <div className="goods-name">{goods.goodsName} </div>
                                                <div className="ellipsis goods-price">会员价：<span>￥{goods.appPriceMin}</span></div>
                                            </li>
                                        })
                                    }
                                </ul>
                                <ul>
                                    {
                                        this.state.datalist5.map(goods => {
                                            return <li id={goods.commonId}>
                                                <img src={goods.imageSrc} />
                                                <div className="goods-name">{goods.goodsName} </div>
                                                <div className="ellipsis goods-price">会员价：<span>￥{goods.appPriceMin}</span></div>
                                            </li>
                                        })
                                    }
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
                                    {
                                        this.state.datalist6.map(goods => {
                                            return <li id={goods.commonId} onClick={this.gotoGoods.bind(this, goods.commonId)}>
                                                <img src={goods.imageSrc} />
                                                <div className="goods-name">{goods.goodsName} </div>
                                                <div className="ellipsis goods-price">会员价：<span>￥{goods.appPriceMin}</span></div>
                                            </li>
                                        })
                                    }
                                </ul>
                                <ul>
                                    {
                                        this.state.datalist7.map(goods => {
                                            return <li id={goods.commonId}>
                                                <img src={goods.imageSrc} />
                                                <div className="goods-name">{goods.goodsName} </div>
                                                <div className="ellipsis goods-price">会员价：<span>￥{goods.appPriceMin}</span></div>
                                            </li>
                                        })
                                    }
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
                                    {
                                        this.state.datalist8.map(goods => {
                                            return <li id={goods.commonId} onClick={this.gotoGoods.bind(this, goods.commonId)}>
                                                <img src={goods.imageSrc} />
                                                <div className="goods-name">{goods.goodsName} </div>
                                                <div className="ellipsis goods-price">会员价：<span>￥{goods.appPriceMin}</span></div>
                                            </li>
                                        })
                                    }
                                </ul>
                                <ul>
                                    {
                                        this.state.datalist9.map(goods => {
                                            return <li id={goods.commonId} onClick={this.gotoGoods.bind(this, goods.commonId)}>
                                                <img src={goods.imageSrc} />
                                                <div className="goods-name">{goods.goodsName} </div>
                                                <div className="ellipsis goods-price">会员价：<span>￥{goods.appPriceMin}</span></div>
                                            </li>
                                        })
                                    }
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
                                    {
                                        this.state.datalist10.map(goods => {
                                            return <li id={goods.commonId} onClick={this.gotoGoods.bind(this, goods.commonId)}>
                                                <img src={goods.imageSrc} />
                                                <div className="goods-name">{goods.goodsName} </div>
                                                <div className="ellipsis goods-price">会员价：<span>￥{goods.appPriceMin}</span></div>
                                            </li>
                                        })
                                    }
                                </ul>
                                <ul>
                                    {
                                        this.state.datalist11.map(goods => {
                                            return <li id={goods.commonId} onClick={this.gotoGoods.bind(this, goods.commonId)}>
                                                <img src={goods.imageSrc} />
                                                <div className="goods-name">{goods.goodsName} </div>
                                                <div className="ellipsis goods-price">会员价：<span>￥{goods.appPriceMin}</span></div>
                                            </li>
                                        })
                                    }
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
                                    {
                                        this.state.datalist12.map(goods => {
                                            return <li id={goods.commonId} onClick={this.gotoGoods.bind(this, goods.commonId)}>
                                                <img src={goods.imageSrc} />
                                                <div className="goods-name">{goods.goodsName} </div>
                                                <div className="ellipsis goods-price">会员价：<span>￥{goods.appPriceMin}</span></div>
                                            </li>
                                        })
                                    }
                                </ul>
                                <ul>
                                    {
                                        this.state.datalist13.map(goods => {
                                            return <li id={goods.commonId}>
                                                <img src={goods.imageSrc} />
                                                <div className="goods-name">{goods.goodsName} </div>
                                                <div className="ellipsis goods-price">会员价：<span>￥{goods.appPriceMin}</span></div>
                                            </li>
                                        })
                                    }
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
                                {
                                    this.state.datalist14.map(goods => {
                                        return <li id={goods.commonId} onClick={this.gotoGoods.bind(this, goods.commonId)}>
                                            <div className="goods-pic"><img src={goods.imageSrc} /></div>
                                            <dl className="goods-info">
                                                <dt className="ellipsis goods-name goods-names">
                                                    <img src="https://www.10street.cn/wap/images/product/vipPrice0.png" />
                                                    {goods.goodsName}
                                                </dt>
                                                <dd className="goods-price goods-prices">会员价：<em>￥{goods.appPrice0}</em>
                                                </dd>
                                                <dd className="goods-oriPrice">非会员价：￥<em>{goods.appPriceMin}</em></dd>
                                            </dl>
                                        </li>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div >
            </div>
            <Dibu />
        </div >
    }
}
Home = withAxios(Home);
export default Home;