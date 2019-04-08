/**
*   Main 渲染component部分
*/

import Components from './Components'
import React, { Component } from "react"
import { Layout, Menu, Dropdown, Button, Icon, Breadcrumb } from 'antd'
const { Header, Footer } = Layout

class Main extends Component {
    constructor(props) {
        super(props)
        // console.log("main", props.props.location.pathname)
        console.log("main", props)
        this.state = {
            nav1: '初始面板',
            nav2: ''
        }
    }

    componentWillMount() {
        console.log(this.props.props.history.location.pathname)
        this.props.props.history.listen(() => {
            switch (this.props.props.history.location.pathname) {
                case '/initpanel':
                    return this.setState({
                        ...this.state, nav1: "初始面板", nav2: ""
                    })
                case '/userinfomanagement':
                    return this.setState({
                        ...this.state, nav1: "用户信息管理", nav2: ""
                    })
                case '/shopinfomanagement':
                    return this.setState({
                        ...this.state, nav1: "商品信息管理", nav2: ""
                    })
                case '/shopclassifyone':
                    return this.setState({
                        ...this.state, nav1: "商品分类管理", nav2: "一级分类"
                    })
                case '/shopclassifytwo':
                    return this.setState({
                        ...this.state, nav1: "商品分类管理", nav2: "二级分类"
                    })
                case '/searchprofile':
                    return this.setState({
                        ...this.state, nav1: "订单信息管理", nav2: "订单查询"
                    })
                case '/orderdelivery':
                    return this.setState({
                        ...this.state, nav1: "订单信息管理", nav2: "订单配送"
                    })
                case '/refundthequery':
                    return this.setState({
                        ...this.state, nav1: "订单信息管理", nav2: "退款处理"
                    })
                case '/admin':
                    return this.setState({
                        ...this.state, nav1: "管理员信息管理", nav2: ""
                    })
                default:
            }
        })
    }

    //用户名 
    handleMenuClick(e, props) {
        console.log('click:', e)
    }

    render() {
        const menu = (
            <Menu onClick={this.handleMenuClick.bind(this)}>
                <Menu.Item key="1">退出 </Menu.Item>
                <Menu.Item key="2">修改密码 </Menu.Item>
            </Menu>
        );
        return (
            <div className="home_main">
                <Header style={{ background: '#fff', padding: 0 }} >
                    <Dropdown overlay={menu}>
                        <Button size="small" className="userlogin">
                            <Icon type="user" /> admin <Icon type="down" />
                        </Button>
                    </Dropdown>
                </Header>
                <Breadcrumb className="bread">
                    <Breadcrumb.Item href="">
                        <span>主页</span>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        {this.state.nav1}
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        {this.state.nav2}
                    </Breadcrumb.Item>
                </Breadcrumb>
                <Components />
                <Footer style={{ textAlign: 'center' }}>
                    ©2019 Created by mczy
                </Footer>
            </div>
        );
    }
}

export default Main