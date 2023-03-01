import './App.css';
import {useState} from 'react'

function App() {
  const [todoList, setTodoList] = useState([])
  const [currentTask, setCurrentTask] = useState('')
  return (
  <div className='App'>
    <h1>ToDo List</h1>
    <div>
      <input type="text" placeholder='Task' onChange={(event) => {setCurrentTask(event.target.value)}}/>
      <button>Add Task</button>
    </div>
    <hr />
  </div>
  );
}

export default App;
