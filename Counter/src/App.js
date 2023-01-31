import React from "react";
import Header from './components/Header';
import Display from './components/Display';
import Button from '../src/components/Button';
import { render } from "react-dom";



class App extends React.Component{
    render(){
        return <div>
            <Header/>
            <Display/>
            <Button/>
            <Header/>
        </div>
    }
}

export default App