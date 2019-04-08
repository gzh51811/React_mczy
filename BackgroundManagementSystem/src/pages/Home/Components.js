/**
 *   页面路由渲染Components部分
 */

import { Route, Redirect, Switch } from 'react-router-dom';
import InitPanel from '../InitPanel/InitPanel'
import UserInfo from '../UserInfo/UserInfo'
import ShopInfo from '../ShopInfo/Shopnfo'
import ShopClassifyOne from '../ShopClassify/ShopClassifyOne'
import ShopClassifyTwo from '../ShopClassify/ShopClassifyTwo'
import SearchProfile from '../Profile/SearchProfile'
import RefundTheQuery from '../Profile/RefundTheQuery'
import OrderDelivery from '../Profile/OrderDelivery'
import Admins from '../Admins/Admins'

import React from "react";
import { Layout } from 'antd';
const { Content } = Layout;

export default function Components() {
    return (
        <div className="components">
            <Content style={{ margin: '0 16px', padding: 24, background: '#fff', minHeight: 420, height: 'auto' }}>
                <Switch>
                    <Route path="/initpanel" component={InitPanel} />
                    <Route path="/userinfomanagement" component={UserInfo} />
                    <Route path="/shopinfomanagement" component={ShopInfo} />
                    <Route path="/ShopClassifyOne" component={ShopClassifyOne} />
                    <Route path="/ShopClassifyTwo" component={ShopClassifyTwo} />
                    <Route path="/SearchProfile" component={SearchProfile} />
                    <Route path="/RefundTheQuery" component={RefundTheQuery} />
                    <Route path="/OrderDelivery" component={OrderDelivery} />
                    <Route path="/admins" component={Admins} />
                    <Redirect to='/initpanel'></Redirect>
                </Switch>
            </Content>
        </div>
    );
}
