import React,{useState} from 'react';
import './App.css';

function App() {
const [name, setName] = useState('')
const [age, setAge] = useState('0')
const [height, setHeight] = useState('0') 
const [superPower, setsuperPower] = useState('')


  return (
    <div className="App">
      <h1>Built a Hero</h1>
      <div>
      <label>Name: </label>
      <input type='text' className='name' onChange={(event) => {setName(event.target.value)}}/>
      <label>Age: </label>
      <input type='Number' className='age' onChange={(event) => {setAge(event.target.value)}}/>
      <label>Height: </label>
      <input type='number ' className='height'onChange={(event) => {setHeight(event.target.value)}}/>
      <label>SuperPower: </label>
      <input type='text' className='power' onChange={(event) => {setsuperPower(event.target.value)}}/>
        </div>
      <button>Display Character</button>
    
    </div>
  );
}

export default App;
