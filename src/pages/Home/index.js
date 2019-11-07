import React, {Component} from 'react';

import './index.less';

import Button from 'antd/lib/button';
import Input from 'antd/lib/input';
import {render, relate, addModel} from 'ader';
import action from './action';

const Home = render({
    actions: {
        ma: action
    }
})(({props, state, action}) => {

    return (
        <div className="home-page">
            <div>
                <Input />
                <Button
                    onClick={action.ma.toCreatePage}
                    type="primary"
                >
                    创建页面
                </Button>
            </div>
            
        </div>
    );
});


export default relate(Home);