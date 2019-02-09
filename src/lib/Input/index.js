
import React, {Component} from 'react';

import './index.less';

const sizeMap = {
    small: '24px',
    normal: '32px',
    large: '40px'
};

class Input extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: props.defaultValue
        };

        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        const {
            onChange,
            value
        } = this.props;
        
        if(!('value' in this.props)) {
            this.setState({
                value: e.target.value
            });
        }

        onChange && onChange(e.target.value);
    }

    render() {
        const {
            size = 'normal',
            value: propsValue,
            style = {},
            className = ''
        } = this.props;

        const {value: stateValue} = this.state;

        let value = stateValue;

        if('value' in this.props) {
           value = propsValue 
        }

        return (
            <input
                value={value}
                className={`paper-input${className ? ` ${className}` : ''}`}
                onChange={this.onChange}
                style={{
                    ...style,
                    height: sizeMap[size] ? sizeMap[size] : '32px'
                }}
            />
        );
    }
}

export default Input;