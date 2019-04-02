import React, { Component } from 'react';
import Login from './pages/Login/index';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';
import Home from './pages/Home/home'

const store = createStore(reducers);




class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <Login></Login>
        <Home />
      </div>
      </Provider>
    );
  }
}

export default App;
