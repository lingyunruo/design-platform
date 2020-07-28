import React from 'react';
import ReactDom from 'react-dom';
import {createStore, connect} from 'ader';
import HomePage from '../container/HomePage';
import MainModel from '../models/main';
import 'antd/dist/antd.css';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

const Home = connect(HomePage);
const store = createStore([MainModel]);

ReactDom.render(
    <Router>
        <Switch>
            <Route path="/">
                <Home store={store}/>
            </Route>
        </Switch>
    </Router>,
    document.getElementById('app')
);