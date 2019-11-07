
import React, {Component} from 'react';

import {render} from 'react-dom';


import HomePage from '../pages/Home';
import CreatePage from '../pages/CreatePage';

import {Route, BrowserRouter as Router} from 'react-router-dom';

import './resize.less';
import 'antd/dist/antd.css';

import {startModel, register} from 'ader';
import HomePageModel from '../pages/Home/model';

register([HomePageModel]);

let store = startModel();

const Wrapper = (props) => {

    return (
        <HomePage store={store} {...props}/>
    )
}

render(
    <Router>
        <div>
            <Route exact path="/" component={Wrapper}/>
            <Route path="/create_page" component={CreatePage}/>
        </div>
    </Router>,
    document.getElementById('root')
);