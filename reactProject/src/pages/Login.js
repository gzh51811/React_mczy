import React from 'react'
import './../css/Login.css'
import withAxios from '../hoc/withAxios'
import { message, Button,Modal } from 'antd';
class Login extends React.Component{
    constructor(){
        super();
        this.state={
            msg:'',
            psw:'',
        }
       
        
    }
    msg1(e){
        this.setState({
            msg:e.target.value,
                      
            })
        }
    psw(e){
         this.setState({                                         
                psw:e.target.value,
            })
        }
         //点击注册发起axios请求
         login(){
            let msg=this.state.msg;
            let psw=this.state.psw;
            // let yzm=this.state.yzm;
            if(msg){
                if(psw){
                         console.log(this)
                         let {axios,history}=this.props;
                         // console.log(msg)
                         axios.post('http://localhost:4399/api/jiekou',{
                                 params:{
                                     username:msg,
                                     password:psw,
                                     m:'login'
                                 }
                         }).then(res=>{
                             console.log(res)
                             if(res.data.code==1){
                                localStorage.setItem("username", res.data._username);
                                localStorage.setItem("token", res.data._token);
                                 Modal.success({
                                     content: res.data.msg,
                                   });
                                   setTimeout(()=>{
                                     history.push('/mine')
                                   },2000)
                                  
                             }else{
                                 Modal.error({
                                     content: res.data.msg,
                                   });
                             }
                         })
                }else{
                 message.error('密码不能为空');
                }
            }
            else{
             message.error('手机号不能为空');
            }
            
        }


    render(){
        return <div className="Login">
                    <div className="login-top"><img src={require('./../assets/loginBack.png')} alt=""/></div>
                    <div className="login-kuang">
                        <ul className="shurukuang">
                            <li><input type="text" placeholder="请输入手机号" onChange={this.msg1.bind(this)}/></li>
                            <li><input type="password" placeholder="请输入密码" onChange={this.psw.bind(this)} />
                           </li>
                              
                        </ul>
                        <Button type="primary" onClick={this.login.bind(this)}>登录</Button>
                       <div className="botton-size">
                       <a href="javascript:;">登录代表即同意</a><a href="javascript:;">《用户协议和隐私政策》</a>
                       </div>
                    </div>
                    <div className="login-bottom">
                            <h1>你还可以用以下方式登录</h1>
                            <div className="logintu">
                            <div className="memberLogin"></div>
                                <a href="javascript:;">账号登录</a>
                               
                            </div>
                    </div>
        </div>
    }
}
Login=withAxios(Login);
export default Login;