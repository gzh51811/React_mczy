import React, { Component } from 'react';
import Login from './pages/Login/index';
import { Provider } from 'react-redux';
import {createStore,applyMiddleware,compose} from 'redux';
import reducers from './reducers';


const store = createStore(reducers);


class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <Login></Login>
      </div>
      </Provider>
    );
  }
}

export default App;
