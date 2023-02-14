import React, {useState} from "react";

const Button = (props) => {
    const {btnText="" , btnHandler =() => {}, btnBackground="black", isDisabled=false} = props
    return <button disabled={isDisabled} onClick={btnHandler} style={{backgroundColor: btnBackground, color: 'white'}} >{btnText}</button>
}

export default Button;