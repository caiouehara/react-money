import React from 'react';
import Input from '../Input';
import axios from 'axios';

class LoginMenu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isValid: true,
            authConfig: {
                // isValidGetUsername: false,
                isValidEmptyUsername: false,
                isValidEmptyPassword: false,
                isValidEmptyEmail: false,
                isValidRegularExpEmail: false,
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
                },
                email: {
                    inputData: {
                        inputValue: '',
                        name: 'email',
                        type: 'text',
                        label: 'Email :',
                        maxLength: 15,
                    },
                    regularExp: new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
                },
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
            // .then(this.validateGetUsername)
            .then(this.validateEmptyUsername)
            .then(this.validateEmptyPassword)
            .then(this.validateEmptyEmail)
            .then(this.validateRegularExpEmail)
            .then(this.validateOperation)
            .then(this.reset)
    }

    validateGetUsername = () => {
        let newState = this.state.authConfig;
        let inputUsername = this.state.userData.username.inputData.inputValue;

        axios.get('http://localhost:5000/users')
            .then(function (res) {
                res.data.forEach(userData => {
                    if (userData.username === inputUsername) {
                        newState.isValidGetUsername = true;
                    }
                });
            })
        this.setState(newState);
    }

    validateEmptyUsername = () => {
        let newState = this.state;

        if (newState.userData.username.inputData.inputValue.length > 0) {
            newState.authConfig.isValidEmptyUsername = true;
        }

        this.setState(newState);
    }

    validateEmptyPassword = () => {
        let newState = this.state;

        if (newState.userData.password.inputData.inputValue.length > 0) {
            newState.authConfig.isValidEmptyPassword = true;
        }

        this.setState(newState);
    }

    validateEmptyEmail = () => {
        let newState = this.state;

        if (newState.userData.email.inputData.inputValue.length > 0) {
            newState.authConfig.isValidEmptyEmail = true;
        }

        this.setState(newState);
    }

    validateRegularExpEmail = () => {
        let regExp = this.state.userData.email.inputData.inputValue;
        let regExpTest = this.state.userData.email.regularExp.test(regExp);
        let newState = this.state.authConfig;
        regExpTest ? newState.isValidRegularExpEmail = true : newState.isValidRegularExpEmail = false
    }

    validateOperation = () => {
        let newState = this.state;

        for (var i in newState.authConfig) {
            if (newState.authConfig[i] === false) {
                newState.isValid = false;
            }
        }

        this.setState(newState);
        console.log(this.state.authConfig)
        console.log('[AuthMe] Operation:', this.state.isValid)
    }

    reset = () => {
        let newState = this.state;

        for (var i in newState.authConfig) {
            newState.authConfig[i] = false;
        }
        newState.isValid = true;

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
                <Input
                    nameChange={this.handleInputValue}
                    userData={this.state.userData.email}
                />
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        );
    }
}

export default LoginMenu;