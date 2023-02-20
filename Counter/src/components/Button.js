import React from "react";


// class Button extends React.Component {
//     render(){
//        const {btnClickHandler = () => {}, btnText = ''} = this.props;
//        return <button onClick={btnClickHandler}>{btnText}</button>
//         //return <button onClick={this.props.handleButtonFunction}>{this.props.buttonText}</button>
//     }
// }
const Button = (props) => {
    const {btnText = "" , btnHandler = ''} = props
    return <button onClick={btnHandler}>{btnText}</button>
}

export default Button;