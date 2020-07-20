import React from 'react';

class TextBox extends React.Component {

    render() {
        return (
            <input type={this.props.type} placeholder={this.props.placeholder}></input>
        )
    }
}

export default TextBox;