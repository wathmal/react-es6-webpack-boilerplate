/**
 * Created by wathmal on 3/5/17.
 */
import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import App from './App';
import Landing from './components/Landing/Landing';
import About from './components/About/About';

module.exports =(
     <Route path="/" component={App}>
        <IndexRoute component={Landing}/>
         <Route path="/about" component={About}/>
     </Route>
);