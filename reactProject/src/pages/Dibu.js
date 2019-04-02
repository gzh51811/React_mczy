import React from 'react';
import './Dibu.scss';

let Dibu = () => {
    return <div className='footer'>
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
                    <a href="https://www.10street.cn/wap/tmpl/member/discover.html">
                        <span className="bar-img">
                            <i className="find"></i>
                            <p>发现</p>
                        </span>
                    </a>
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
}

export default Dibu;