import React, { Component } from 'react';

import Home from './pages/Home/Home'

import { HashRouter } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Home />
        </HashRouter>
      </div>
    );
  }
}

export default App;
