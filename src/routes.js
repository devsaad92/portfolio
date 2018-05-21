import React from 'react';
import { hashHistory, IndexRoute, Route, Router } from 'react-router';

import App from './containers/App';
import Code from './containers/Code';
import Contact from './containers/Contact';
import Home from './containers/Home';

export default (
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home}/>
        <Route path='/code' component={Code} />
        <Route path='/contact' component={Contact} />
      </Route>
    </Router>

);