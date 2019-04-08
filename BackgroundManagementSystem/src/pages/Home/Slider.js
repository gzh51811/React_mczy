/**
 *   Slider 侧边栏
 */

import React, { Component } from "react";
import { Layout, Menu, Icon } from 'antd';
const { Sider, } = Layout;
const SubMenu = Menu.SubMenu;

class Slider extends Component {
    constructor(props) {
        super(props);
        // console.log(props)
        let path = props.props.location.pathname;
        // console.log(path)
        this.state = {
            collapsed: false,
            current: path,
        }
        this.handleClick = this.handleClick.bind(this)
    }

    //控制slider
    onCollapse = (collapsed) => {
        this.setState({ collapsed });
    }

    //路由跳转
    handleClick(e) {
        console.log(e)
        this.setState({
            current: e.key,
        }, () => {
            this.props.props.history.push(e.key.toLowerCase())
        })
    }
    render() {
        return (
            <div className="home_slider">
                <Sider theme="dark  " collapsed={this.state.collapsed} onCollapse={this.onCollapse} collapsible style={{ minHeight: '100vh' }}>
                    {/* <div className="logo" >十号街后台管理系统</div>
                    <Menu theme="light " mode="inline" onClick={this.handleClick} selectedKeys={[this.state.current]}>
                        {
                            this.props.state.navs.map(item => <Menu.Item key={item.path}><Icon type={item.type} />{item.name}</Menu.Item>)
                        }
                    </Menu>
                </Sider> */}

                    <div className="logo" >十号街后台管理系统</div>
                    <Menu theme="dark" defaultSelectedKeys={['initpanel']} mode="inline" onClick={this.handleClick}>
                        <Menu.Item key="initpanel">
                            <Icon type="home" />
                            <span>初始面板</span>
                        </Menu.Item>
                        <Menu.Item key="userinfomanagement">
                            <Icon type="user" />
                            <span>用户信息管理</span>
                        </Menu.Item>
                        <Menu.Item key="shopinfomanagement">
                            <Icon type="table" />
                            <span>商品信息管理</span>
                        </Menu.Item>

                        <SubMenu key="sub1" title={<span><Icon type="tag-o" /><span>商品分类管理</span></span>}>
                            <Menu.Item key="ShopClassifyOne">
                                <Icon type="bars" />
                                <span>一级分类</span>
                            </Menu.Item>
                            <Menu.Item key="ShopClassifyTwo">
                                <Icon type="bars" />
                                <span>二级分类</span>
                            </Menu.Item>
                        </SubMenu>

                        <SubMenu key="sub2" title={<span><Icon type="profile" /><span>订单信息管理</span></span>}>
                            <Menu.Item key="SearchProfile">
                                <Icon type="bars" />
                                <span>订单查询</span>
                            </Menu.Item>
                            <Menu.Item key="OrderDelivery">
                                <Icon type="bars" />
                                <span>订单配送</span>
                            </Menu.Item>
                            <Menu.Item key="RefundTheQuery">
                                <Icon type="bars" />
                                <span>退款处理</span>
                            </Menu.Item>
                        </SubMenu>
                        <Menu.Item key="admins">
                            <Icon type="solution" />
                            <span>管理员信息管理</span>
                        </Menu.Item>

                    </Menu>
                </Sider>
            </div>
        );
    }
}

export default Slider;

