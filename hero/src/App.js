import React,{useState} from 'react';
import './App.css';

function App() {
const [name, setName] = useState('')

  return (
    <div className="App">
      <h1>Built a Hero</h1>
      <label>Name: </label>
      <input type='text' className='name'/>
      <label>Age: </label>
      <input type='Number' className='age' />
      <label>Height: </label>
      <input type='text' className='height'/>
      <label>SuperPower: </label>
      <input type='text' className='power'/>
    </div>
  );
}

export default App;
