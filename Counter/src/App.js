import React from "react";
import Header from './components/Header';
import Display from './components/Display';
import Button from '../src/components/Button';
import Text from "./components/Text";
import { render } from "react-dom";



class App extends React.Component{
    constructor(props){
        super(props)
        this.handleIncrement = this.handleIncrement.bind(this)
        this.handleDecrement = this.handleDecrement.bind(this)
    }
    handleIncrement = () => {
        console.log('Increment ::')
    }
    handleDecrement = () => {
        console.log('Decrement ::')
    }
    render(){
        return <div>
            {/* Props Example */}
            {/* <Header headerText= 'Counter Application' />
            <Header headerText= 'Counter Application2 Props i.e Custom attributes' /> 
            <Button handleButtonFunction={()=> console.log('plus Button')} buttonText = '+'/>
            <Display displayText = 'Display'/>  
            <Button handleButtonFunction={()=> console.log('plus Button')} buttonText = '-'/> */}

            <Text displayText="Counter Application"/>
            <Button btnClickHandler= {this.handleDecrement} btnText="-"/>
            <Text displayText="12"/>
            <Button btnClickHandler= {this.handleIncrement} btnText="+"/>


        </div>
    }
}

export default App
