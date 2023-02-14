import React from "react";

const Button = (props) => {
    const {btnText="" , btnHandler =() => {}, btnBackground="black"} = props
    return <button onClick={btnHandler} style={{backgroundColor: btnBackground, color: 'white'}} >{btnText}</button>
}