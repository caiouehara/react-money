import React from 'react';
import LoginMenu from './LoginMenu';

class Login extends React.Component {
    render() {
        return (
            <div className="Login">
                <h3>Login</h3>
                <LoginMenu></LoginMenu>
            </div>
        );
    }
}

export default Login;
