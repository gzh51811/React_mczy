import React from 'react';
import './Gift.scss';
import Dibu from './Dibu';
import { Menu, Carousel, BackTop } from 'antd';
import { Switch, Route } from 'react-router-dom';
import withAxios from './../hoc/withAxios';



class Gift extends React.Component {
    constructor() {
        super();
        this.state = {
            current: 'who',
            menu: [
                {
                    path: '/who'
                },
                {
                    path: '/why'
                },
                {
                    path: '/what'
                }
            ],
            datalist: [],
            datalist1: []
        }
        this.gotoGoods = this.gotoGoods.bind(this);
    }
    async componentWillMount() {
        // 使用axios
        let { data } = await this.props.axios.get('/api/gift', {
            params: {
            }
        });
        console.log(data);
        this.setState({
            datalist: data,
            datalist1: data.slice(5, 8)
        });


    }
    handleClick = (e) => {
        this.setState({
            current: e.key,
        }, () => {
            //路由跳转：编程式导航
            // 利用withRouter()高阶组件实现history的传递
            // console.log(this.props.match.url + e.key);
            this.props.history.push(this.props.match.url + '/' + e.key);
        });
    }
    gotoGoods(id) {
        // console.log(id);
        // console.log(this)
        let { history } = this.props;

        history.push({
            pathname: '/goods/' + id,
            search: '?id=' + id,
            state: {
                id
            }
        })
    }
    render() {
        let { match } = this.props;
        return <div id="gift">
            <header id="header" className="transparent cohesive header-linear-gradient">
                <div className="header-wrap">
                    <div className="header-inp">
                        <i id="sousuo" className="icon sousuo"></i>
                        <span className="search-input keyword" id="keyword">请输入关键词</span>
                    </div>
                </div>
                <div className="header-r">
                    <img src={require("./../assets/giftCart.png")} />
                </div>
            </header >
            <div className="dianding"></div>

            <div id="conten">
                <div id="headContainer" className="nctouch-main-layout fixed-Width">
                    <div className="goGuide"></div>
                    <Carousel autoplay className="swipe-wrap">
                        <div className="item">
                            <img src="https://image.10street.cn/image/71/5d/715d77f3fd95248f97167266cacfae76.png" alt="" />
                        </div>

                        <div className="item">
                            <img src="https://image.10street.cn/image/38/a0/38a0d74f848a00f62def0fd22cd05a05.png" alt="" />
                        </div>

                        <div className="item">
                            <img src="https://image.10street.cn/image/19/0c/190cdc5e1d86c6127444f7d452553d55.png" alt="" />
                        </div>
                        <div className="item">
                            <img src="https://image.10street.cn/image/f0/80/f0807d4cce038edb01a54896cb07c318.jpg" alt="" />
                        </div>
                    </Carousel>
                </div>
                <div className="giftIndexTab">
                    <Menu
                        // 顺序很重要，menu放上面就先显示，故switch路由里的东西放下面才会在menu下面显示
                        onClick={this.handleClick}
                        selectedKeys={[this.state.current]}
                        mode="horizontal" className="clearfix">
                        <Menu.Item key="who" className="fl">送给谁</Menu.Item>
                        <Menu.Item key="why" className="fl">为啥送</Menu.Item>
                        <Menu.Item key="what" className="fl">这些节要送礼</Menu.Item>
                    </Menu>
                    <Switch>
                        {/*发现的东西：已进入页面就像出现第一页的内容，把默认的写最后面，写前面会一直存在，故写在后面  */}
                        <Route path={match.path + "/why"} render={() => <div className="xtb"><div className="nctouch-home-nav fixed-Width">
                            <ul>

                                <li>
                                    <img src="https://image.10street.cn/image/9a/5d/9a5dd944bd37d76f7d181780a2d3f2be.png" alt="" />
                                </li>

                                <li>
                                    <img src="https://image.10street.cn/image/94/e7/94e778e2b627545e05edb2a7aa994b98.png" alt="" />
                                </li>

                                <li>
                                    <img src="https://image.10street.cn/image/73/9d/739d695397d1cf63ed295d227c19c32f.png" alt="" />
                                </li>

                                <li>
                                    <img src="https://image.10street.cn/image/4d/96/4d96e7163ffe201a44fbeb0de6158dc6.png" alt="" />
                                </li>

                                <li>
                                    <img src="https://image.10street.cn/image/5e/35/5e35e3e32a1e3217c0604a14f96f6a31.png" alt="" />
                                </li>

                            </ul>
                        </div>
                            <div className="nctouch-home-nav fixed-Width">
                                <ul>

                                    <li>
                                        <img src="https://image.10street.cn/image/be/83/be83fb52fe872b68baaca5aed0f88599.png" alt="" />
                                    </li>

                                    <li>
                                        <img src="https://image.10street.cn/image/7a/54/7a547e0d8b8bc90d8594b28d6d5e97f9.png" alt="" />
                                    </li>

                                    <li>
                                        <img src="https://image.10street.cn/image/00/cc/00cc76b421c58b2015012ecb598c3375.png" alt="" />
                                    </li>

                                    <li>
                                        <img src="https://image.10street.cn/image/85/aa/85aa6cd2912f2739c1b5c38d1f60eda5.png" alt="" />
                                    </li>

                                    <li>
                                        <img src="https://image.10street.cn/image/c1/04/c1046921a83a7227c649dbdce72d85d0.png" alt="" />
                                    </li>

                                </ul>
                            </div>
                        </div>} />
                        <Route path={match.path + "/what"} render={() => <div className="xtb"><div className="nctouch-home-nav fixed-Width">
                            <ul>

                                <li>
                                    <img src="https://image.10street.cn/image/e2/64/e2644789284d0bdb56eca91e95c46fb8.gif" alt="" />
                                </li>

                                <li>
                                    <img src="https://image.10street.cn/image/ef/d3/efd3c885998d75dc23f84f0e4a3d9051.png" alt="" />
                                </li>

                                <li>
                                    <img src="https://image.10street.cn/image/45/4e/454e9adb9b402bbe1eecc5857abd54d8.png" alt="" />
                                </li>

                                <li>
                                    <img src="https://image.10street.cn/image/18/7c/187cbc5a577b555ec6fd70681df5899f.png" alt="" />
                                </li>

                                <li>
                                    <img src="https://image.10street.cn/image/10/f2/10f271c1b13de8a5e93daee007622674.png" alt="" />
                                </li>

                            </ul>
                        </div>
                            <div className="nctouch-home-nav fixed-Width">
                                <ul>

                                    <li>
                                        <img src="https://image.10street.cn/image/4e/bc/4ebc57d5adbbb9065560b0a47bac94c1.png" alt="" />
                                    </li>

                                    <li>
                                        <img src="https://image.10street.cn/image/e3/f9/e3f9c4769006946e8dbc975e7b51735c.png" alt="" />
                                    </li>

                                    <li>
                                        <img src="https://image.10street.cn/image/a1/0f/a10fd35f61a4f33191098350afac76dd.png" alt="" />
                                    </li>

                                    <li>
                                        <img src="https://image.10street.cn/image/3d/40/3d4077f9ec308c998c3fad287168ea2e.png" alt="" />
                                    </li>

                                    <li>
                                        <img src="https://image.10street.cn/image/08/5e/085e978a106d2a8e0f131c955901efee.png" alt="" />
                                    </li>

                                </ul>
                            </div>
                        </div>} />
                        <Route path={match.path} render={() => <div className="xtb"><div className="nctouch-home-nav fixed-Width">
                            <ul>
                                <li>
                                    <img src="https://image.10street.cn/image/72/48/7248094988e4c9bdd053cb26e352c5d5.png" alt="" />
                                </li>

                                <li>
                                    <img src="https://image.10street.cn/image/0e/a1/0ea1aed3dd68d4362cd4d592d67b2b36.png" alt="" />
                                </li>

                                <li>
                                    <img src="https://image.10street.cn/image/96/ab/96ab978ca3bb55c425271848119099d4.png" alt="" />
                                </li>

                                <li>
                                    <img src="https://image.10street.cn/image/45/2e/452e3e868a52718a2ad5796702f540b6.png" alt="" />
                                </li>

                                <li>
                                    <img src="https://image.10street.cn/image/94/c6/94c6a0a86b656389fee86a0077ea4547.png" alt="" />
                                </li>
                            </ul>
                        </div>
                            <div className="nctouch-home-nav fixed-Width">
                                <ul>

                                    <li>
                                        <img src="https://image.10street.cn/image/26/2b/262b8494fa56221129e8aafc930a28bc.png" alt="" />
                                    </li>

                                    <li>
                                        <img src="https://image.10street.cn/image/5b/40/5b4021ca24f15cbaf7f90e7ef0e87931.png" alt="" />
                                    </li>

                                    <li>
                                        <img src="https://image.10street.cn/image/20/68/2068aa3dd67f56bbaccbc11774e9a021.png" alt="" />
                                    </li>

                                    <li>
                                        <img src="https://image.10street.cn/image/4d/94/4d94a7941310db1662cf56964bdd1c27.png" alt="" />
                                    </li>

                                    <li>
                                        <img src="https://image.10street.cn/image/db/24/db2444a771eec5072b5e536aaae4ced5.png" alt="" />
                                    </li>

                                </ul>
                            </div>
                        </div>} />
                    </Switch>

                </div>
                <div className="nctouch-home-block">
                    <ul className="item-pic-list third_list">
                        <li>
                            <img src="https://image.10street.cn/image/92/9c/929c9a5fa8f90044ff594dbb3eb8b09a.jpg" alt="" />
                        </li>
                        <li>
                            <img src="https://image.10street.cn/image/9e/21/9e218ec9a175ddce5f90eecdff2116bb.jpg" alt="" />
                        </li>
                        <li>
                            <img src="https://image.10street.cn/image/b7/06/b7067a22b5c409a1c8747bef51d523fa.jpg" alt="" />
                        </li>
                    </ul>
                </div>
                <div className="nctouch-home-block">
                    <div className="item-pic">
                        <img src="https://image.10street.cn/image/b1/e2/b1e204986d35cb0c771a3c7e5efee955.jpg" alt="" />

                    </div>
                </div>
                <div className="nctouch-home-block">
                    <div className="item-pic">
                        <img src="https://image.10street.cn/image/84/d3/84d3cbb4917b63eb317056fd967cd28c.jpg" alt="" />
                    </div>
                </div>
                <ul className="goods-list">
                    {
                        this.state.datalist.map(goods => {
                            return <li onClick={this.gotoGoods.bind(this, goods.commonId)}>
                                <div className="goods-pic"><img src={goods.imageUrl} /></div>
                                <dl className="goods-info">
                                    <dt className="goods-name goods-names">
                                        <img style={{ width: "0.34rem", marginRight: "0.05rem" }} src="https://www.10street.cn/wap/images/product/vipPrice0.png" alt="" />
                                        {goods.goodsName}
                                    </dt>
                                    <dd className="goods-price goods-prices">会员价￥<em>{goods.vipPrice}</em></dd>
                                    <dd className="goods-oriPrice">售价￥<em>{goods.goodsPrice}</em></dd>
                                </dl>
                            </li>
                        })
                    }

                </ul>
                <BackTop visibilityHeight>
                    <div className="fix-block-r">
                        <a href="javascript:void(0);" className="gotop-btn gotop" id="goTopBtn"><i></i></a>
                    </div>
                </BackTop>
            </div>
            <Dibu />
        </div>
    }
}
Gift = withAxios(Gift);
export default Gift;