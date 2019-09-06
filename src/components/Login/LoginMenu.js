import React from 'react';
import Input from './Input';
import axios from 'axios';

class LoginMenu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
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
        .then(this.checkUsername)
    }

    checkUsername = (response) =>{
        let inputUsername = this.state.userData.username.inputData.inputValue;
        let isAny = false;

        response.data.forEach(userData => {
            if(userData.username === inputUsername){
                isAny = true;
            }
            else{
                isAny = false;
            }
        });
        return isAny;
    }

    render() {
        return (
            <div className="LoginMenu">
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