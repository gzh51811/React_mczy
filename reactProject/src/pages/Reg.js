import React from 'react'
// import {withRouter} from 'react-router-dom'
import withAxios from '../hoc/withAxios'
import './../css/Reg.css'
import { message, Button,Modal } from 'antd';
// import '../js/yanzhenma.js'

class Reg extends React.Component{
        constructor(){
            super();
            this.state={
                msg:'',
                psw:'',
                psws:'',
                yzm:'',
                yzm1:'点击刷新',
            }
           
            
        }
        //初始化
        msg1(e){
            this.setState({
                            msg:e.target.value,
                          
                            })
                        }
                        msg3(e){
                            this.setState({                                         
                                            psw:e.target.value,
                                            })
                                        }
                        msg2(e){
                            this.setState({ 
                                            psws:e.target.value
                                        })
                                        }
                                        msg4(e){
                                            this.setState({ 
                                                            yzm:e.target.value
                                                        })
                                                        }
        //手机号
        msg(){
                let username=this.state.msg;
                            // console.log(username)
                if(username){
                 let username1=/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/
                            // console.log(2222)
                 if(username1.test(username)){
                            //  console.log(2222)
                        }
                        else{
                             message.error('手机号格式错误');
                                     }
                             }
                                else{
                      message.error('手机号不能为空');
           }
        }
        //密码
        psw(){
                let psw=this.state.psw;
                if(psw){
                    let psw1=/^[\w]*6$/
                    if(psw1.test(psw)){
                        // console.log(12221)
                    }
                    else{
                        message.error('密码格式错误');
                      }
                        }
                        else{
                            message.error('密码不能为空');
                          }
                    }

        //确认密码
        psws(){
                let psw=this.state.psw;
                let psws=this.state.psws;
                // console.log(psw)
                // console.log(psws)
                if(psws){
                   
                    if(psw==psws){
                        // console.log(1)
                    }
                    else{
                        message.error('两次密码不一致');
                      }
                        }
                        else{
                            message.error('密码不能为空');
                          }
                    }

                    //验证随机验证码
                    yzm(){
                    let yzm=this.state.yzm;
                    let yzm1=this.state.yzm1.toLocaleLowerCase();
                    // console.log(yzm)
                    // console.log(yzm1)
                    if(yzm){
                        if(yzm==yzm1){
                            // console.log(1)
                        }
                        else{
                            message.error('验证码不正确');
                        }
                            }
                            else{
                                message.error('验证码不能为空');
                            }
                        }
                        
                    //随机验证码
                   yzm1(){
                    function randomNum(min, max) {
                        //Math.random()    0 - 0.999
                        //Math.random()*101   0- 100.999
                        //parsInt(Math.random()*101)  0-100
                        return parseInt(Math.random() * (max - min + 1)) + min;
                    }
                    var str = '';
                    var str2 = '0123456789zxcvbnmlkjhgfdsaqwertyuiopZXCVBNMLKJHGFDSAQWERTYUIOP';
                
                    //只要可以生成随机下标就可以获取到对应的字符
                    for (var i = 0; i < 4; i++) {
                        var num =randomNum(0, str2.length - 1);
                        str += str2.charAt(num);
                    }
                    this.setState({
                        yzm1:str
                    })
                    return str; //返回值  
                   }

                   //点击注册发起axios请求
                   reg(){
                       let msg=this.state.msg;
                       let psw=this.state.psw;
                       let yzm=this.state.yzm;
                       if(msg){
                           if(psw){
                               if(psw){
                                   if(yzm){
                                    console.log(this)
                                    let {axios,history}=this.props;
                                    // console.log(msg)
                                    axios.post('http://localhost:4399/api/jiekou',{
                                            params:{
                                                username:msg,
                                                password:psw,
                                                m:'reg'
                                            }
                                    }).then(res=>{
                                        console.log(res)
                                        if(res.data.code==200){
                                            Modal.success({
                                                content: res.data.msg,
                                              });
                                              setTimeout(()=>{
                                                history.push('/login')
                                              },2000)
                                             
                                        }else{
                                            Modal.error({
                                                content: res.data.msg,
                                              });
                                        }
                                    })
                                   }else{
                                    message.error('验证码不能为空');
                                   }
                               }else{
                                message.error('密码不能为空');
                               }
                           }else{
                            message.error('密码不能为空');
                           }
                       }
                       else{
                        message.error('手机号不能为空');
                       }
                       
                   }
                  


    render(){
        let {msg}=this.state;
        return <div className="Reg">
                      <div className="reg-top"><img src={require('./../assets/loginBack.png')} alt=""/></div>
                    <div className="reg-kuang">
                        <ul className="shurukuang">
                            <li><input type="text" placeholder="请输入手机号" onChange={this.msg1.bind(this)} onBlur={this.msg.bind(this)}/></li>
                            <li><input type="password" placeholder="请输入密码" onChange={this.msg3.bind(this)} onBlur={this.psw.bind(this)}/> </li>
                            <li><input type="password" placeholder="请再次输入密码" onChange={this.msg2.bind(this)} onBlur={this.psws.bind(this)}/></li>
                            <li>
                                <input type="text" placeholder="请输入验证码" onChange={this.msg4.bind(this)} onBlur={this.yzm.bind(this)}/>
                                <div className="yanzhengma"><div onClick={this.yzm1.bind(this)}>{this.state.yzm1}</div><a href="javascript:;" onClick={this.yzm1.bind(this)}>看不清,换一张</a></div>
                                </li>
                        </ul>
                        <Button type="primary" onClick={this.reg.bind(this)}>注册</Button>
                       <div className="botton-size">
                       <a href="javascript:;">注册请阅读</a><a href="javascript:;">《用户协议和隐私政策》</a>
                       </div>
                    </div>
        </div>
    }
}
Reg=withAxios(Reg);

export default Reg;