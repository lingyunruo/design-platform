import React, {Component} from 'react';

import './index.less';

import Input from '../../lib/Input';
import Button from '../../lib/Button';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: '',
            passWord: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.login = this.login.bind(this);
    }

    login() {
        fetch('/api/login', {
            body: JSON.stringify({
                userName: this.state.userName,
                passWord: this.state.passWord
            }),
            method: 'post',
            credentials: 'same-origin'
        })
            .then((res) => {
                console.log(res);
            });
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
                <Button
                    type="primary"
                    className="login-button"
                    onClick={this.login}
                >
                    登陆
                </Button>
            </div>
        );
    }
}

export default Login; 