import React, { Component } from 'react';
import Login from './pages/Login/index';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose} from 'redux';
import reducers from './reducers';
import Home from './pages/Home/home';

// 1.创建saga中间件
const sagaMiddleware = createSagaMiddleware();

// 合并中间件
let middleware = compose(applyMiddleware(sagaMiddleware), composeWithDevTools());

// 创建一个store
// 2.将 sagaMiddleware 连接至 Store
let store = createStore(rootReducer, middleware);

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
