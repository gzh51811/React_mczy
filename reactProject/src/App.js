import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import {Route,Switch} from 'react-router-dom'
// import Home from './pages/Home'
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import Mine from './pages/Mine'
import Login from './pages/Login'
import Reg from './pages/Reg'
import Cart from './pages/Cart'
// import React, { Component } from 'react';
import Home from './pages/Home';
import Found from './pages/Found';
import Gift from './pages/Gift';
import Goods from './pages/Goods';
import './App.css';



class App extends Component {
    constructor(){
      super();
      this.state={
        nav:[
          {
            path:'/home',
            name:'Home'
          },
          {
            path:'/mine',
            name:'Mine'
          },
          {
            path:'/login',
            name:'Login'
          },
          {
            path:'/reg',
            name:'Reg'
          },
          {
            path:'/cart',
            name:'Cart'
          }
        ]
      }
    }



  render() {
    return <div>
      {/* <h4>111</h4> */}
   
      <Switch>
          {/* <Route path="/home" component={Home}/> */}
          <Route path="/mine" component={Mine}/>
          <Route path="/login" component={Login}/>
          <Route path="/reg" component={Reg}/>
          <Route path="/cart" component={Cart}/>
          <Route path="/gift" component={Gift} />
          <Route path="/found" component={Found} />
          <Route path="/home" component={Home} />
          <Route path="/goods" component={Goods} />
          <Redirect from="/" to="/home" />{/* 404 */}
      </Switch>
      </div>
  }
}

export default App;
