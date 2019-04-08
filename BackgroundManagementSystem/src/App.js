import React, { Component } from 'react';
import Login from './pages/Login/index';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from './reducers';
import Home from './pages/Home/Home';
import { HashRouter } from 'react-router-dom'

// 1.创建saga中间件
const sagaMiddleware = createSagaMiddleware();

// 合并中间件
let middleware = compose(applyMiddleware(sagaMiddleware), composeWithDevTools());

// 创建一个store
// 2.将 sagaMiddleware 连接至 Store
let store = createStore(reducers, middleware);

// const store = createStore(reducers);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <HashRouter>
            <Home />
          </HashRouter>
          <Login></Login>
        </div>
      </Provider>
    );
  }
}

export default App;