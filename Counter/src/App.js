import React from "react";
import Header from './components/Header';
import Display from './components/Display';
import Button from '../src/components/Button';
import Text from "./components/Text";
import { render } from "react-dom";



class App extends React.Component{
    render(){
        return <div>
            {/* Props Example */}
            {/* <Header headerText= 'Counter Application' />
            <Header headerText= 'Counter Application2 Props i.e Custom attributes' /> 
            <Button handleButtonFunction={()=> console.log('plus Button')} buttonText = '+'/>
            <Display displayText = 'Display'/>  
            <Button handleButtonFunction={()=> console.log('plus Button')} buttonText = '-'/> */}

            <Text displayText="Counter Application"/>
            <Button/>
            <Text displayText="12"/>
            <Button/>


        </div>
    }
}

export default App
