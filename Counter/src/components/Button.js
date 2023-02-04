import React from "react";

class Button extends React.Component {
    render(){
        return <button onClick={this.props.handleButtonFunction}>{this.props.buttonText}</button>
    }
}

export default Button;