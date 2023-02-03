import React from "react";
import Header from './components/Header';
import Display from './components/Display';
import Button from '../src/components/Button';
import { render } from "react-dom";



class App extends React.Component{
    render(){
        return <div>
            <Header headerText= 'Counter Application' />
            <Display/>
            <Button/>

        </div>
    }
}

export default App