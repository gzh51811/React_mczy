import React, { Component } from 'react';
import './Dibu.scss';
import withAxios from './../hoc/withAxios';

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
    render() {
        return <div className='footer'>
            <div className='diandi'></div>
            <div className="bottom-bar-pannel J-bridge" style={{ zIndex: "10" }}>
                <ul className="tab5">
                    <li key='home'>
                        <span className="bar-img">
                            <i className="index"></i>
                            <p>首页</p>
                        </span>
                    </li>
                    <li key='found'>
                        <span className="bar-img">
                            <i className="find"></i>
                            <p>发现</p>
                        </span>
                    </li>
                    <li key='gift'>
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
Dibu = withAxios(Dibu);
export default Dibu;