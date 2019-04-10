import React, { Component } from 'react';
import './Dibu.scss';
import withAxios from './../hoc/withAxios';
import { withRouter } from 'react-router-dom';

class Dibu extends Component {
    constructor() {
        super();
        this.state = {
            navs: [
                {
                    path: '/home'
                },
                {
                    path: '/found'
                },
                {
                    path: '/gift'
                }
            ]
        }
    }
    handleClick = (e) => {
        console.log(e)
        this.setState({
            current: e.key

        }, () => {
            console.log(e.key)
            //路由跳转：编程式导航
            // 利用withRouter()高阶组件实现history的传递
            // this.props.history.push('/' + e.key.toLowerCase());
        });

    }

    gotoFound() {
        // console.log(this.props)
        window.scrollTo(0, 0);
        let { history } = this.props;
        history.push({
            pathname: '/found'
        })
    }
    gotoHome() {
        window.scrollTo(0, 0);
        let { history } = this.props;
        history.push({
            pathname: '/home'
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
        return <div className='footer'>
            <div className='diandi'></div>
            <div className="bottom-bar-pannel J-bridge" style={{ zIndex: "90" }}>
                <ul className="tab5">
                    <li key='home' onClick={this.gotoHome.bind(this)}>
                        <span className="bar-img">
                            <i className="index"></i>
                            <p>首页</p>
                        </span>
                    </li>
                    <li key='found' onClick={this.gotoFound.bind(this)}>
                        <span className="bar-img">
                            <i className="find"></i>
                            <p>发现</p>
                        </span>
                    </li>
                    <li key='gift' onClick={this.gotoGift.bind(this)}>
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

        </div >

    }
}
Dibu = withRouter(Dibu);
Dibu = withAxios(Dibu);
export default Dibu;