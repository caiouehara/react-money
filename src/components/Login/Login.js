import React from 'react';
import LoginMenu from './LoginMenu/LoginMenu';
import RegisterMenu from './RegisterMenu/RegisterMenu';

class Login extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            isRegister: false,
        }
    }

    handlePage = () =>{
        let newState = this.state;
        newState.isRegister = !newState.isRegister;
        this.setState(newState);
    }

    render() {
        return (
            <div className="Login">
                <button onClick={this.handlePage}> {this.state.isRegister ? <span>Login</span> : <span>Register</span>} </button>
                {this.state.isRegister ? <RegisterMenu/> : <LoginMenu/>}
            </div>
        );
    }
}

export default Login;
