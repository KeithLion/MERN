import React,{useState} from 'react'
import './App.css';

function App() {
  const [newTask,setNewTask] = useState('')
  const [task,setTask] = useState([])
  const handleNewTask = (e)=>{
    e.preventDefault()
    console.log(newTask)
    setTask([...task, newTask])
  };
  return (
    <div>

      <form onSubmit={(e) =>{
        handleNewTask(e)
      }}>

      <input 
      onChange={(e) => {
        console.log(e)
        console.log(e.target)
        setNewTask(e.target.value);
      }}
      type='text'
      />
      <div>
      <button>Add</button>
      </div>
      </form>
      </div>
    
  );
}

export default App;
