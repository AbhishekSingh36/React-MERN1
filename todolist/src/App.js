import './App.css';
import {useState, useRef} from 'react'

function App() {
  const [todoList, setTodoList] = useState([])
  const [currentTask, setCurrentTask] = useState('')
  const inputTask = useRef(null)
  const addTask = () => {
    setTodoList([...todoList, currentTask]);

  }
  return (
  <div className='App'>
    <h1>ToDo List</h1>
    <div>
      <input ref={inputTask} type="text" placeholder='Task' onChange={(event) => {setCurrentTask(event.target.value)}}/>
      <button onClick={addTask}>Add Task</button>
    </div>
    <hr />
    <ul>
      <li>
        {todoList.map((val,key)=>{
           return(
            <li>{val}</li>
           )
        })}
      </li>
    </ul>
  </div>
  );
}

export default App;
