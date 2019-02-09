import React, {Component} from 'react';

import './index.less';

import Area from './Area';

class Drag extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

Drag.Area = Area;

export default Drag;