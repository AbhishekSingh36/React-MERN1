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
            firstName: ''
        }
    }
    handleOnChange = (event) => {
        this.setState ({
            firstName: event.target.value
        })
    }
    render() {
        return <div>
            <label>First Name</label>
            <input type= 'text' value={this.state.firstName} onChange={this.handleOnChange} />
        </div>
    }
}

export default App
