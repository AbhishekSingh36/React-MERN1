import React from "react";
import Header from './components/Header';
import Display from './components/Display';
import Button from '../src/components/Button';
import Text from "./components/Text";
import { render } from "react-dom";



class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }
    }
    
    render() {
        return <div>
            <label>First Name</label>
            <input></input>
        </div>
    }
}

export default App
