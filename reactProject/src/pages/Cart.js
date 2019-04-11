import React from 'react'
import { Checkbox , message, Button,Modal} from 'antd';
import {connect} from 'react-redux'
import "antd/dist/antd.css";
import './../css/Cart.css'
import Dibu from './Dibu';
import withAxios from '../hoc/withAxios'
import {removecart,changeqty} from '../actions/cartAction'
// import { message, Button,Modal } from 'antd';
// import store from '../store';
const CheckboxGroup = Checkbox.Group;

// const plainOptions = [''];
// const defaultCheckedList = [''];



class Cart extends React.Component{
    constructor(){
        super();
        this.state={
            num:'',
            iscart:true,
            goods:[],
            checkedList: [],
            indeterminate: false,
            checkAll: false,
            title:0,
            price:0, 
            size:'编辑'

        }
    }
    
    //初始化
    componentWillMount(){
        
        let {axios}=this.props;
        axios.get('http://localhost:4399/api/cartjiekou',{
                params:{
                    m:'xuanran'
                }
        }).then(res=>{
            console.log(res.data)
            this.setState({
                goods:res.data,
                // num:res.data.num
            })
        })
    }

    // showModal = () => {
    //     this.setState({
    //       visible: true,
    //     });
    //   }
    
      
    

    //减数量
    jian(res,id){
        // console.log(res)
        if(res<2){
            this.setState({
                goods:this.state.goods.map(item=>{
                    return id==item.commonId ? Object.assign({},item,{qty:res}) :item;
                })
            })
        }else{
            // console.log(res)
        let {axios}=this.props;
            axios.get('http://localhost:4399/api/cartjiekou',{
                    params:{
                          m:'jian',
                          num:res,
                        id          
                }
            }).then(res=>{
                 })
                this.setState({
                    goods:this.state.goods.map(item=>{
                        return id==item.commonId ? Object.assign({},item,{qty:res-1}) :item;
                    })
                })
        }
    }


        //加数量
        jia(num,id){
            let {axios}=this.props;
            // this.state.goods.map(item=>{
                
            //     return item.num 
            // })
            // console.log(num)
            axios.get('http://localhost:4399/api/cartjiekou',{
                    params:{
                          m:'jia',
                        num,
                        id          
                }
            }).then(res=>{
                    // console.log(res)
                 })
                this.setState({
                    goods:this.state.goods.map(item=>{
                        return id==item.commonId ? Object.assign({},item,{qty:num+1}) :item;
                    })
                })
        }



    onChange(value){
       console.log()
    }

    //复选框
    onChange (id,e){
        //价格，数量
        for(let i=0;i<this.state.goods.length;i++){
            if(this.state.checkedList.indexOf(id)<0){
            if(this.state.goods[i].commonId==id){
                let num=this.state.title+this.state.goods[i].qty
                let title1=this.state.price+this.state.goods[i].qty * this.state.goods[i].appPrice0
                console.log(title1)
                this.setState({
                    price:title1,
                    title:num
                })
            }
        }else{
            if(this.state.goods[i].commonId==id){
                let num=this.state.title-this.state.goods[i].qty
                let title1=this.state.price-this.state.goods[i].qty * this.state.goods[i].appPrice0
                console.log(title1)
                this.setState({
                    price:title1,
                    title:num
                })
            }
        }
        }
       
        console.log(id)
        if(this.state.checkedList.indexOf(id)>=0){
            let date=[]
            date=this.state.checkedList;
            let index=this.state.checkedList.indexOf(id)
            date.splice(index,1)
            this.setState({
                // check:true,
                checkedList:date
            })
        }else{
            let date=[]
            date=this.state.checkedList;
            date.push(id)

            this.setState({
                // check:true,
                checkedList:date
            })
            console.log(this.state.checkedList)
        }

        
        
        // 全选的更新
        if(this.state.checkedList.length==this.state.goods.length){
            
            this.setState({
                checkAll:true
            })
        }else{
            this.setState({
                checkAll:false
            })
        }
        
    }
       
      
    
    
    
      onCheckAllChange = (e) => {
          let num=0;
          let title1=0;
        for(let i=0;i<this.state.goods.length;i++){
            num +=this.state.goods[i].qty
            title1+=this.state.goods[i].qty * this.state.goods[i].appPrice0
            this.setState({
                title:e.target.checked ? num
                :0,
                price:e.target.checked ? title1
               :0,
              checkedList: e.target.checked ? this.state.goods.map(item=>{
                  return item.commonId;
              })
              : [],
              indeterminate: false,
              checkAll: e.target.checked,
            //   iscart: e.target.checked
            });

        }
        //   console.log(e.target.checked)
       
        // console.log(this.state.checkedList)
      
    }
    //编辑
    alter(){
        if(this.state.size=='编辑'){
            this.setState({
                iscart:false,
                size:'完成'
            })
            // istrue=false;
        }else{
            // console.log(11112)
            this.setState({
                iscart:true,
                size:'编辑'
            })
            // istrue=true;
           
        }

        
    }


    
    //勾选删除
    del(){
        const confirm = Modal.confirm;
        function showDeleteConfirm() {
            confirm({
              title: '你真的要删除吗?',
              content: '',
              okText: 'Yes',
              okType: 'danger',
              cancelText: 'No',
              onOk() {
                // console.log('OK');
              },
              onCancel() {
                // console.log('Cancel');
              },
            });
          }
          showDeleteConfirm()
        // this.setState({
        //     visible: true,
        //   });
        
        let {axios}=this.props;
        axios.get('http://localhost:4399/api/cartjiekou',{
            params:{
                m:'del',
                goodsid:this.state.checkedList
            }
        }).then(res=>{
            // console.log(res)
            this.forceUpdate();
           
            for(let i=0;i<this.state.checkedList.length;i++){
                // console.log(this.state.checkedList[i])
                for(let j=0;j<this.state.goods.length;j++){
                        if(this.state.checkedList[i]==this.state.goods[j].commonId){
                            // console.log(this.state.goods[j].commonId,this.state.checkedList[i])
                            let date=[]
                            date=this.state.goods
                            date.splice(j,1)
                            let date1=[]
                            date1=this.state.checkedList
                            date1.splice(i,1)
                            this.setState({
                                goods:date,
                                checkedList:date1
                            })
                        }
                }
            }
           
            if(this.state.checkedList.length==this.state.goods.length){
            
                this.setState({
                    checkAll:true
                })
            }else{
                this.setState({
                    checkAll:false
                })
            }
        })
       
     
    }
    home(){
        let {history}=this.props
        history.push('/home')
    }
    mine(){
        let {history}=this.props
        history.push('/mine')
    }
    // list(){
    //     let {history}=this.props
    //     history.push('/list')
    // }
    cart(){
        let {history}=this.props
        history.push('/cart')
    }

    //后退页面
    go(){
        let {history}=this.props
        history.go(-1)
    }

    render(){
        // console.log(this.props)
        let {goods,checkedList,visible, confirmLoading, ModalText }=this.state
        return <div className="Cart">
                <div className="cart-header">
                            <div className="header-go" onClick={this.go.bind(this)}></div>
                            <div className="header-title">购物车</div>
                            <div className="header-compile" onClick={this.alter.bind(this)}>{this.state.size}</div>
                </div>
                <div className="cart-main">
                       <dl className="dian">
                           <dt className="dtdl">
                            <Checkbox
                                indeterminate={this.state.indeterminate}
                                onChange={this.onCheckAllChange}
                                checked={this.state.checkAll}
                            >
                            </Checkbox>
                               <div className="tianpu">
                                   <div> 官方店铺</div>
                               </div>
                               <p>优惠券</p>
                           </dt>
                       </dl>
                       <ul>
                           {
                               goods.map((item)=>{
                                return <li key={item.commonId}>
                                <div className="tupian">
                                <Checkbox onChange={this.onChange.bind(this,item.commonId)}></Checkbox>
                            <img src={require("../assets/store_b.png")} alt=""/>
                            <a href="##"> {item.goodsName}</a>
                            </div>
                            <div className="number">
                            <div className="xinxi-box">
                                 <div className="xinxi-box-left">
                                     <p> {item.goodsName} </p>
                                     <div className="price">￥{item.appPrice0}</div>
                                 </div>
                                 <div className='jia-jian'>
                                     <span onClick={this.jian.bind(this,item.qty,item.commonId)}>-</span><input type="text" value={item.qty} onChange={this.onChange.bind(this)} min="1" max="10"/><span onClick={this.jia.bind(this,item.qty,item.commonId)}>+</span>
                                 </div>
                            </div>
                            </div>
                            </li>
                               })
                           }
                           <dl className="xiaoji">
                           {
                                this.state.iscart ? <dd>共 {checkedList.length} 种 {this.state.title} 件<span>￥{this.state.price}元</span></dd> : ''
                           }
                            </dl>
                       </ul>
                     
                            <div className="like">
                                <div className="like-header">
                                <img src={require('./../assets/guess_like.png')} alt=""/>
                               
                                </div>
                                <ul className="like-goods">
                                    <li>
                                        <div>
                                        <img src={require('../assets/test.jpg')} alt="" className="img1"/></div>
                                        
                                       <div className="size"> <img src={require('../assets/vipPrice0.png')} alt=""/> 紫米（ZIM）移动电源 充电宝 </div>
                                       <p>会员价￥89.00</p>
                                       <span>售价￥99.00</span>
                                       <div className="xinxin"></div>
                                    </li>
                                    <li>
                                        <div>
                                        <img src={require('../assets/test.jpg')} alt="" className="img1"/></div>
                                        
                                       <div className="size"> <img src={require('../assets/vipPrice0.png')} alt=""/> 紫米（ZIM）移动电源 充电宝 </div>
                                       <p>会员价￥89.00</p>
                                       <span>售价￥99.00</span>
                                       <div className="xinxin"></div>
                                    </li>
                                    <li>
                                        <div>
                                        <img src={require('../assets/test.jpg')} alt="" className="img1"/></div>
                                        
                                       <div className="size"> <img src={require('../assets/vipPrice0.png')} alt=""/> 紫米（ZIM）移动电源 充电宝 </div>
                                       <p>会员价￥89.00</p>
                                       <span>售价￥99.00</span>
                                       <div className="xinxin"></div>
                                    </li>
                                </ul>
                            
                            </div>
                </div>
                <div className="cart-bottom">
                <div className="cart-bottom-left">
                  <Checkbox
            indeterminate={this.state.indeterminate}
            onChange={this.onCheckAllChange}
            checked={this.state.checkAll}
          >
           全选
          </Checkbox>
                  {/* <a href="##">全选</a> */}
                {
                    this.state.iscart ? <dl>
                    <dt>合计:</dt>
                    <dd>￥{this.state.price}</dd>
                </dl>:''
                }
                {
                    this.state.iscart ?  <span className="yunfei">(不含运费)</span>:''
                    // <div className="jiesuan">去结算</div>:''
                }
                 {
                    this.state.iscart ? 
                    <div className="jiesuan">去结算</div>: <div className="jiesuan" onClick={this.del.bind(this)}>删除
           </div>
                }
                </div>
                </div>
                <Dibu />
            </div>
    }
}
Cart=withAxios(Cart)

Cart=connect((state)=>{
    return {
        goods:state.goods
    }
},(dispatch)=>{
    return{
        change(commonId,qty){
            // console.log(commonId,qty)
            dispatch(changeqty(commonId,qty))
        }
    }
})(Cart)

export default Cart;