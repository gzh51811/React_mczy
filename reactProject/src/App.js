import React, { Component } from 'react';
import Home from './pages/Home';
import Found from './pages/Found';
import Gift from './pages/Gift';
import Goods from './pages/Goods';
import './App.css';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';


class App extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/gift" component={Gift} />
          <Route path="/found" component={Found} />
          <Route path="/home" component={Home} />
          <Route path="/goods" component={Goods} />
          <Redirect from="/" to="/home" />{/* 404 */}
        </Switch>
      </div>
    );
  }
}
App = withRouter(App);
export default App;
