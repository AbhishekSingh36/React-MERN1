import React from "react";
import Header from './components/Header';
import Display from './components/Display';
import Button from '../src/components/Button';
import Text from "./components/Text";
import { render } from "react-dom";



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

const App  = () => {
    return <div>
        <button>Start</button>
        <p>12</p>
        <button>Stop</button>
    </div>
}

export default App
