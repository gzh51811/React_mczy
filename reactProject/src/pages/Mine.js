import React from 'react'
// import '../sass/common'
// import '../css/base.css'
import '../css/Mine.css'
import Dibu from './Dibu';
import withAxios from '../hoc/withAxios'



class Mine extends React.Component{
            constructor(){
                super();
                this.state={
                    username:'',
                    islogin:false
                }
            }
           componentWillMount(){
            let name = localStorage.getItem("username");
            let token1 = localStorage.getItem("token");
            if (token1) {
                // this.show_info = true;
                // this.show_login = false;
              //判断本地是否有token
              //console.log(this.user.token);
              let {axios}=this.props
              axios.post("http://localhost:4399/api/jiekou", {
                  params:{
                    m: "token",
                    data: token1
                  }
               
              }).then(res=>{
                  console.log(res)
                  if(res.data==200){
                        this.setState({
                            username:name,
                            islogin:true
                        })
                  }
              });
              
            }
           }
           quit(){
            localStorage.clear();
               this.setState({
                   islogin:false
               })
           }
           login(){
               let {history}=this.props
               history.push('/login')
           }
           reg(){
            let {history}=this.props
            history.push('/reg')
        }
     

        home(){
            let {history}=this.props
            history.push('/home')
        }
        // goods(){
        //     let {history}=this.props
        //     history.push('/mine')
        // }
        // list(){
        //     let {history}=this.props
        //     history.push('/list')
        // }
        cart(){
            let {history}=this.props
            history.push('/cart')
        }
    

    render(){
        return <div>
           <div className="header">
           <a href="javascript:;"> 
                 <img src={require("./../assets/shezhi.png")} alt=""/>
             </a> 
             <div className="message">
             <img src={require("./../assets/message.png")} alt=""/>
             </div>
             <div className="header-center-bottom">
                        <div className="header-center">
                            <img src={require('./../assets/yonghutup.png')} alt=""/>
                            {
                                this.state.islogin ? <div className="user">
                                    <span>{this.state.username}</span>
                                    <span onClick={this.quit.bind(this)}>退出</span>
                                </div> :  <div className="button">
                                        <span onClick={this.login.bind(this)}>登录/</span>
                                        <span  onClick={this.reg.bind(this)}>注册</span>
                                    </div>
                            }
                            
                        </div>
                        <div className="vipbanner">
                        <div className="vip-left">
                        <img src={require('./../assets/vipCode.png')} alt=""/>
                                <span>会员俱乐部</span>
                        </div>
                        <div className="vip-right">
                                <span className="vip-right-size">开通会员 , 立享会员价购物</span>
                                <img src={require('./../assets/Wmore.png')} alt=""/>
                        </div>   
                        </div>
             </div>
           </div>
           <div className="main">
                <div className="main-top">
                        <div className="main-top-left"> 
                               <img src={require('./../assets/giftCenter.png')} alt=""/>
                               <div className="left-size">
                               <span>礼物订单</span>
                               <i>礼物新玩法</i>
                               </div>
                               </div> 
                        <div className="main-top-right">
                        <img src={require('./../assets/partner_icon.png')} alt=""/>
                               <div className="right-size">
                               <span>合伙人</span>
                               <i>平台赋能,无忧创业</i>
                               </div>
                                </div>
                </div>
                <div className="main-bottom">
                                <div className="main-bottom-top">
                                <p>我的订单</p>
                                <div>查看更多订单<img src={require('./../assets/more.png')} alt=""/></div>
                                </div>
                                <ul className="main-bottom-center">
                                <li><img src={require('./../assets/payment.png')} alt=""/><p>待付款</p></li>
                                <li><img src={require('./../assets/ico_committed.png')} alt=""/><p>待发货</p></li>
                                <li><img src={require('./../assets/receiving.png')} alt=""/><p>待收货</p></li>
                                <li><img src={require('./../assets/evaluation.png')} alt=""/><p>待评价</p></li>
                                <li><img src={require('./../assets/customer.png')} alt=""/><p>售后</p></li>
                                </ul>
                               
                                </div>
                                <ul className="main-bottom-bottom">
                                <li style={{border:'none'}}><img src={require('./../assets/property.png')} alt=""/><p>我的钱包</p></li>
                                <li><img src={require('./../assets/collected.png')} alt=""/><p>我的收藏</p></li>
                                <li><img src={require('./../assets/footprint.png')} alt=""/><p>我的足迹</p></li>
                                <li><img src={require('./../assets/share.png')} alt=""/><p>下载App</p></li>
                                </ul>
           </div>
           <Dibu />
        </div>
    }
}
Mine=withAxios(Mine);
export default Mine;