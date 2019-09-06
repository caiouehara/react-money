import React from 'react';
import Input from '../Input';
import axios from 'axios';

class RegisterMenu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            validate: true,
            authConfig: {
                emptyValidateUsername: false,
                emptyValidatePassword: false,
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
        this.emptyValidateUsername()
        this.validateOperation()
        this.registerUser()
        this.reset()
    }

    emptyValidateUsername = (response) => {
        let newState = this.state;

        if (newState.userData.username.inputData.inputValue.length > 0) {
            newState.authConfig.emptyValidateUsername = true;
        }

        this.setState(newState);
        return response;
    }

    emptyValidatePassword = () => {
        let newState = this.state;

        if (newState.userData.password.inputData.inputValue.length > 0) {
            newState.authConfig.emptyValidatePassword = true;
        }

        this.setState(newState);
    }

    validateOperation = () => {
        let newState = this.state;

        for (var i in newState.authConfig) {
            if (!newState.authConfig[i]) {
                newState.validate = false;
            }
        }

        this.setState(newState);
        console.log(this.state.authConfig)
        console.log('[AuthMe] Operation:', this.state.validate)
    }

    registerUser = () => {
        let newUsername = this.state.userData.username.inputData.inputValue;
        let newPassword = this.state.userData.password.inputData.inputValue;

        if (this.state.validate) {
            axios.post('http://localhost:5000/users/add', {
                username: newUsername,
                password: newPassword,
            })
            .then(console.log('[AuthMe] Register: ' + newUsername))
            .catch(function(error){
                console.log('[AuthMe] Register MongoDB API Error:' + error)
            })
        }
    }

    reset = () => {
        let newState = this.state;

        for (var i in newState.authConfig) {
            newState.authConfig[i] = false;
        }
        newState.validate = true;

        this.setState(newState);
    }

    render() {
        return (
            <div className="RegisterMenu">
                <h3>RegisterMenu</h3>
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

export default RegisterMenu;