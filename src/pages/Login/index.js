import React, {Component} from 'react';

import './index.less';

import Input from '../../lib/Input';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: '',
            passWord: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(field) {

        return (value) => {
            this.setState({
                [field]: value
            });
        }
    }

    render() {
        const {
            userName,
            passWord
        } = this.state;
        return (
            <div className="login-page">
                <Input 
                    value={userName}
                    onChange={this.handleChange('userName')}
                    className="login-input"
                />
                <Input 
                    value={passWord}
                    onChange={this.handleChange('passWord')}
                    className="login-input"
                />
            </div>
        );
    }
}

export default Login; 