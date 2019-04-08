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



<<<<<<< HEAD
import Home from './pages/Home/Home'

import { HashRouter } from 'react-router-dom'
=======
>>>>>>> 3651b9b2ab97198108192b600adc3eb7158061f4

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
<<<<<<< HEAD
        <HashRouter>
          <Home />
        </HashRouter>
=======
        <Login></Login>
        <Home />
>>>>>>> 3651b9b2ab97198108192b600adc3eb7158061f4
      </div>
      </Provider>
    );
  }
}

export default App;
