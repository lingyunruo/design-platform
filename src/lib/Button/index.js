import React, {Component} from 'react';

import './index.less';

const typeMap = {
    'primary': 'paper-button-primary',
    'dashed': 'paper-button-dashed',
    'danger': 'paper-button-danger'
};

const sizeMap = {
    'large': 'paper-button-large',
    'small': 'paper-button-small'
};

class Button extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            type,
            size,
            children,
            className = '',
            style,
            onClick
        } = this.props;

        return (
            <button
                className={`paper-button${typeMap[type] ? ` ${typeMap[type]}` : ''}${sizeMap[size] ? ` ${sizeMap[size]}` : ''}${className ? ' ' + className : ''}`}
                style={style || {}}
                onClick={onClick}
            >
                <span>{children}</span>
            </button>
        );
    }
}

export default Button;