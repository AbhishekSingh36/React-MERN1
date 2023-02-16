import React, {useState} from 'react';
import './App.css';
import Button from './Components/Button';

const Item = ['Hello' , 'React']
const App = () => {
  const [text, setText] = useState('Change text')
  const [text2, setText2] = useState('Change text2')
  const handleChangeText = () => {
    setText('I am changed text1')
  }
  const handleChangeText2 = () => {
    setText2('I am changed Text2')
  }
  if(text === "Change text"){
    return <div>If condition</div>
  }
  return (
    <div>
      <Button btnHandler = {handleChangeText} btnText = {text} />
      <Button btnHandler = {handleChangeText2} btnBackground="red" btnText = {text2} />
      <ul>
        {
          Item.map((item,index) => {
            return <li key={`${item}-${index}`}>{item}</li>
          })
        }
      </ul>
    </div>
  )
}

export default App;
