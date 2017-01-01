/**
 * Created by wathmal on 11/30/16.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import App from './App';
import Landing from './components/Landing/Landing';
const app = document.getElementById('app');

// apply react router here
ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Landing}/>
        </Route>
    </Router>, app);

// ReactDOM.render(<App><Dashboard /></App>, app);