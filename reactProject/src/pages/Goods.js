import React from 'react';
import './Goods.scss';
import { Carousel, BackTop } from 'antd';
import url from 'url';
import withAxios from '../hoc/withAxios';

class Goods extends React.Component {
    constructor() {
        super();
        this.state = {
            datalist: []
        }
    }

    async componentWillMount() {
        let { axios, location } = this.props;
        let { query } = url.parse(location.search, true);


        let { data } = await axios.get('/api/goods', {
            params: {
                id: query.id
            }
        })

        console.log(data);

        this.setState({
            datalist: data
        })

    }

    render() {
        return <div id="goods">
            <header id="header" className="transparent cohesive header-linear-gradient">
                <div className="header-l">
                    <i className="backDetail"></i>
                </div>
                <div className="header-title">
                    <h1>商品详情</h1>
                </div>
                <div className="header-r">
                    <i className="toHome"></i>
                    <i className="shareDetail"></i>
                </div>
            </header >
            <div className="giftSwitch">
                <img src={require("./../assets/goodsgift.png")} alt="" />
            </div>
            <div className='conten'>
                <div className='goodsbanner'>
                    {
                        this.state.datalist.map(goods => {
                            return <Carousel autoplay className='ul1'>
                                <li>
                                    <img src={goods.goodsImageList[0].imageSrc} className="J-scroll-exclude" />
                                </li>
                                <li>
                                    <img src={goods.goodsImageList[1].imageSrc} className="J-scroll-exclude" />
                                </li>
                                <li>
                                    <img src={goods.goodsImageList[2].imageSrc} className="J-scroll-exclude" />
                                </li>
                                <li>
                                    <img src={goods.goodsImageList[3].imageSrc} className="J-scroll-exclude" />
                                </li>
                            </Carousel>
                        })
                    }
                </div>
                <div className="goods-detail-price">
                    <div className="goods-batch">
                        {
                            this.state.datalist.map(goods => {
                                return <div className="memberPrice xyhclear">
                                    <div className="availablePrice">
                                        <span >
                                            <img src="https://www.10street.cn/wap/images/product/whiteTip.png" />
                                            ￥<em >{goods.goodsList[0].vipPrice}</em>
                                        </span>
                                        <i>
                                            可省 <b style={{ color: 'rgb(209, 35, 28)', fontWeight: '500' }}>￥{parseFloat(goods.webPrice2 - goods.goodsList[0].vipPrice).toFixed(2)}</b></i>
                                    </div>
                                    <div className="referencePrice">
                                        <span>
                                            非会员价￥ <em >{goods.webPrice2}</em>
                                        </span>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
                <div className="goods-detail-name">
                    {
                        this.state.datalist.map(goods => {
                            return <h3>{goods.jingle}</h3>
                        })
                    }
                    <h4 className="jingle"></h4>
                    <h4 className="regionMsg">
                        <img src={require('./../assets/haiwaigou.png')} alt="" className="buyTypeLogo" />
                        <span>欧美品牌&nbsp;&nbsp;</span>保税仓发货
                  </h4> <p></p>
                </div>
                <div className="memberCard">
                    <div className="memberCardCon1 clearfix">
                        <img src="https://www.10street.cn/wap/images/product/whiteIcon1.png" alt="" className="fl" />
                        <span className="fl">立即开通</span>
                        <p className="fr">会员年省 3865元
                 <i className="fr"></i>
                        </p>
                    </div>
                    {
                        this.state.datalist.map(goods => {
                            return <div className="memberCardCon2">您还不是会员 开通白卡会员购买<em>立省￥{parseFloat(goods.webPrice2 - goods.goodsList[0].vipPrice).toFixed(2)}元</em> 还有更多特权
                            </div>
                        })
                    }

                    <div className="overseasGoods"><span>会员包邮</span><span>会员包税</span>
                        <p>非会员不享受优惠，海关税费自理</p>
                    </div>
                </div>
                <div className="memberCardWeal clearfix">
                    <p className="fl">
                        <img src="https://www.10street.cn/wap/images/product/tick.png" alt="" className="fl" />
                        <span className="fl">海外直邮</span>
                    </p>
                    <p className="fl">
                        <img src="https://www.10street.cn/wap/images/product/tick.png" alt="" className="fl" />
                        <span className="fl">100%正品</span>
                    </p>
                    <p className="fl">
                        <img src="https://www.10street.cn/wap/images/product/tick.png" alt="" className="fl" />
                        <span className="fl">15天放心换</span>
                    </p>
                </div>
                <div className="explains">
                    <ul>
                        <li><a className="clearfix">
                            <div className="fl" style={{ color: 'rgb(51, 51, 51)' }}>海淘FAQ</div>
                            <i className="fr"></i></a>
                        </li>
                        <li><a className="clearfix">
                            <div className="fl">会员卡说明</div><i className="fr"></i><p className="fr">了解详情</p></a>
                        </li>
                        <li><a className="clearfix">
                            <div className="fl">十号街价格为何这么低，货源可信吗？</div><i className="fr"></i><p className="fr">了解详情</p></a>
                        </li>
                        <li><a className="clearfix"><div className="fl">售后保障</div>
                            <i className="fr"></i><p className="fr">了解详情</p></a>
                        </li>
                    </ul>
                </div>
                <div className="goods-detail-item">
                    <div className="evaluate-title">
                        <span className="title-left">评价 </span>
                        <span className="title-right">
                            查看全部(<em>31</em>)<i></i>
                        </span>
                    </div>
                    <div id="nctouchTagNav" className="nctouch-tag-nav evaluateNav">
                        <ul className="clearfix">
                            <li><a href="javascript:void(0);">全部</a></li>
                            <li><a href="javascript:void(0);">有图(1)</a></li>
                            <li><a href="javascript:void(0);">好评(31)</a></li>
                            <li><a href="javascript:void(0);">中评(0)</a></li>
                            <li><a href="javascript:void(0);">差评(0)</a></li>
                        </ul>
                    </div>
                </div>
                <BackTop visibilityHeight>
                    <div className="fix-block-r">
                        <a href="javascript:void(0);" className="gotop-btn gotop" id="goTopBtn"><i></i></a>
                    </div>
                </BackTop>
                <div className="imageDetail">
                    图文详情
                </div>
                <div>
                    <div className="img">
                        <img src="https://image.huiyo.com/image/de/68/de686dc165123064b4af52dd49319c77.jpg" /></div>
                    <div className="img">
                        <img src="https://image.huiyo.com/image/3b/eb/3bebb8df436db51a53e420694993ffbe.jpg" /></div>
                    <div className="img">
                        <img src="https://image.huiyo.com/image/a8/e0/a8e092d1ea6c1d1cf43daadd13eb34fd.jpg" /></div>
                    <div className="img">
                        <img src="https://image.huiyo.com/image/a4/be/a4be0f3a4c682a5fef29d87bd310568c.jpg" /></div>
                    <div className="img">
                        <img src="https://image.huiyo.com/image/84/5f/845fe5383690f35d348a2242abd13df0.jpg" /></div>
                </div>
                <div id="goodsDetailFoot" className="goods-detail-foot">
                    <div className="concern-cart">
                        <a href="javascript:;" className="handle"><em className="kefu"></em>
                            <span>客服</span></a> <a href="javascript:;" className="handle">
                            <em className="collection"></em> <span className="collectText">收藏</span></a>
                        <a href="javascript:;" className="handle"><em className="cart"></em> <span>购物车</span></a></div>
                    <div className="action-list"><div><div><a href="javascript:;" className="action-btn-other w50  black-btn">
                        <p>加入购物车</p></a> <a href="javascript:;" className="action-btn-other w50  red-btn"><p>立即购买</p>
                        </a>
                    </div>
                    </div>
                    </div>
                </div>
                <div className='diandi'></div>
            </div>

        </div>
    }
}
Goods = withAxios(Goods);
export default Goods;