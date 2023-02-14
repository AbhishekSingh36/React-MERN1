import React from 'react';
import './App.css';
import Button from './Components/Button';

const App = () => {
  return (
    <div>
      <Button isDisabled={false} btnHandler = {()=> console.log('Hello, This is Button1')} btnText = "Options" />
      <Button btnHandler = {()=> console.log('Hello, This is Button2')} btnBackground="red" btnText = "Options" />
    </div>
  )
}

export default App;
