import React, { Component } from 'react';
import   propTypes  from 'prop-types';
import {HashRouter, Route} from 'react-router-dom';
import Login from './pages/Login';


class Routes extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <HashRouter>
                <Route path="/signin" component={Login}></Route>
            </HashRouter>
        )
    }
    
}



export default Routes;