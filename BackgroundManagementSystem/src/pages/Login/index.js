import React, { Component } from 'react';
import { connect } from 'react-redux';
import  {
    Form, Icon, Input, Button, Checkbox,
} from 'antd';
import './Login.scss';
import './base.css';
import * as actions from './../../actions';
import { WEBSITE_NAME } from './../../constants';

class Login extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit = (e)=> {
        console.log(this.props)
        e.preventDefault();
            this.props.form.validateFields(async (err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                // let res = await this.props.signin(values.username, values.password);
                // console.log(res);
            }
        });
    }



    render() {
        
        const { getFieldDecorator } = this.props.form;
        
        return (
            <div className="login">
                <div className="login_container">
                    <div className="brand">        
                        <h2 className="brand_text">
                            {WEBSITE_NAME}
                        </h2>
                    </div>
                    <p className="xitong_text">请使用您的账号密码登录系统</p>
                    
                    <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入您的账号" />
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入您的密码" />
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox>记住密码</Checkbox>
                        )}
                        <a className="login-form-forgot" href="javascript:void(0)">忘记密码?</a>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            登录
                        </Button>
                            <span href="" className="login_in">您还未注册？请 <a href="" style={{color: "#fff"}}>注册</a></span>
                    </Form.Item>
                </Form>
                </div>
            </div>
        )
    }

}
Login = connect(() => {
    
}, () => {
        actions
})(Login);
Login = Form.create()(Login);
export default Login;