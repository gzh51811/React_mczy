import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {HashRouter} from 'react-router-dom'
import store from './store';

// 引入react-redux
import {Provider} from 'react-redux';

ReactDOM.render(
    <Provider store={store}>
    <HashRouter>
    <App/>
    </HashRouter> 
    </Provider>,
    document.getElementById('root')
    );


serviceWorker.unregister();