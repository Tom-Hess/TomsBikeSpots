import React from 'react';

export default class MyButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    handleClick() {
        alert("login clicked");
    }
    
    render() {
        return (
            <button name={this.props.text} onClick={(this.handleClick)}>{this.props.text}</button>
        )
    }
}