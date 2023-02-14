import React from 'react';
import './App.css';
import Button from './Components/Button';

const App = () => {
  return (
    <Button btnHandler = {()=> console.log('Hello, This is Button')} btnText = "Options" />
  )
}

export default App;
