import React, { useState } from "react";
import Header from './components/Header';
import Display from './components/Display';
import Button from '../src/components/Button';
import Text from "./components/Text";
import { render } from "react-dom";
import './App.css';



// class App extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             counter: 0
//         }
//     }
//     handleIncrement = () => {
//         this.setState((prevState) => ({
//             counter: prevState.counter + 1
//         }))
//     }
//     handleDecrement = () => {
//         this.setState((prevState) => ({
//             counter: prevState.counter - 1
//         }))
//     }
//     render() {
//         // Explicit conditional rendring
//         if (this.state.counter === 10) {
//             return <div>Congrats You have reached 10</div>
//         }
//         return <div>
//             {/* Props Example */}
//             {/* <Header headerText= 'Counter Application' />
//             <Header headerText= 'Counter Application2 Props i.e Custom attributes' /> 
//             <Button handleButtonFunction={()=> console.log('plus Button')} buttonText = '+'/>
//             <Display displayText = 'Display'/>  
//             <Button handleButtonFunction={()=> console.log('plus Button')} buttonText = '-'/> */}

//             {/* Inline conditional rendring */}
//             <Text displayText="Counter Application" />
//             {!this.state.counter !== 10 ?
//                 <div>
//                     <Button btnClickHandler={this.handleDecrement} btnText="-" />
//                     <Text displayText={this.state.counter} />
//                     <Button btnClickHandler={this.handleIncrement} btnText="+" />
//                 </div> : <div>Congrats - Your have reached 10</div>
//             }

//         </div>
//     }
// }



const App = () => {

    const [intervalId, setIntervalId] = useState(0);
    const [counter, setCounter] = useState(0);
    const handleStart = () => {
        clearInterval(intervalId)
        let intervalOneId = setInterval(() => {
            setCounter((prevValue) => prevValue + 1)
        }, 1000)
        console.log('Handle Start ::')
        setIntervalId(intervalOneId)
    }
    const handleStop = () => {
        clearInterval(intervalId)
    }
    return (
        <div>
            <h3>Counter Application</h3>
            <button btnText="Start" btnHandler={handleStart} />
            <p>Counter Value</p>
            <button btnText="Stop" btnHandler={handleStop} />

        </div>
    )
}

export default App
