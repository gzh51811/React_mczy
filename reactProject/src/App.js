import React, { Component } from 'react';
import Home from './pages/Home';
import './App.css';
import { Route, Redirect, Switch } from 'react-router-dom';


class App extends Component {
  constructor() {
    super();
    this.state = {
      navs: [
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/home" component={Home} />
          <Redirect from="/" to="/home" />{/* 404 */}
        </Switch>
      </div>
    );
  }
}

export default App;
