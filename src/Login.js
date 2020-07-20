import React from 'react';
import TextBox from './TextBox.js';
import MyButton from './MyButton';
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
        };
    }
    render() {
        return (
        <div id ='mainDiv'>
        <p>Enter your login details:</p>
        <TextBox type="text" placeholder="username"/>

        <TextBox type="password" placeholder="password"/>
        <MyButton text="Login"/>
        </div>)
    }
}

export default Login;