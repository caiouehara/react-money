import React from 'react';
import Input from '../Input';
import axios from 'axios';

class LoginMenu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            validate: true,
            authConfig: {
                checkUsername: false,
                emptyValidateUsername: false,
            },
            userData: {
                username: {
                    inputData: {
                        inputValue: '',
                        name: 'username',
                        type: 'text',
                        label: 'Nome :',
                        maxLength: 15,
                    },
                },
                password: {
                    inputData: {
                        inputValue: '',
                        name: 'password',
                        type: 'password',
                        label: 'Senha :',
                        maxLength: 15,
                    },
                }
            }
        }
    }

    handleInputValue = (event) => {
        let newState = this.state;
        newState.userData[event.target.name].inputData.inputValue = event.target.value;
        this.setState(newState);
    }

    handleSubmit = (event) => {
        axios.get('http://localhost:5000/users')
            .then(this.emptyValidateUsername)
            .then(this.checkUsername)
            .then(this.validateOperation)
            .then(this.reset)
    }

    emptyValidateUsername = (response) => {
        let newState = this.state;

        if (newState.userData.username.inputData.inputValue.length > 0) {
            newState.authConfig.emptyValidateUsername = true;
        }

        this.setState(newState);
        return response;
    }

    checkUsername = (response) => {
        let newState = this.state.authConfig;
        let inputUsername = this.state.userData.username.inputData.inputValue;

        response.data.forEach(userData => {
            if (userData.username === inputUsername) {
                newState.checkUsername = true;
            }
        });

        this.setState(newState);
    }

    validateOperation = () => {
        let newState = this.state;

        for(var i in newState.authConfig){
            if(!newState.authConfig[i]){
                newState.validate = false;
            }
        }

        this.setState(newState);
        console.log(this.state.authConfig)
        console.log('[AuthMe] Operation:', this.state.validate)
    }

    reset = () => {
        let newState = this.state;

        for(var i in newState.authConfig){
            newState.authConfig[i] = false;
        }
        newState.validate = true;

        this.setState(newState);
        console.log("[AuthMe] Reset")
    }

    render() {
        return (
            <div className="LoginMenu">
                <h3>LoginMenu</h3>
                <Input
                    nameChange={this.handleInputValue}
                    userData={this.state.userData.username}
                />
                <Input
                    nameChange={this.handleInputValue}
                    userData={this.state.userData.password}
                />
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        );
    }
}

export default LoginMenu;