import React, {Component} from 'react';

import './index.less';

import {Link} from 'react-router-dom';


class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                主页面
                <div>
                    <Link to="/login">登陆</Link>
                </div>
            </div>
        );
    }
}

export default HomePage;