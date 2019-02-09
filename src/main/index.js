
import React, {Component} from 'react';

import {render} from 'react-dom';


import HomePage from '../container';
import Login from '../pages/Login';

import {Route, BrowserRouter as Router} from 'react-router-dom';

import './resize.less';

render(
    <Router>
        <div>
            <Route exact path="/" component={HomePage}/>
            <Route path="/login" component={Login} />
        </div>
    </Router>,
    document.getElementById('root')
);