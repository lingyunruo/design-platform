import React, {Component} from 'react';

import './index.less';

class Area extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="drag-area">
                {this.props.children}
            </div>
        );
    }
}

export default Area;