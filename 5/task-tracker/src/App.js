import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  let [tasks, setTasks] = useState([
    {
        id: 0,
        title: 'do the dishes',
        date: 'Nov 1st',
        toggle: false
    },
    {
        id: 1,
        title: 'finish homework',
        date: 'Nov 3rd',
        toggle: true
    },
    {
        id: 2,
        title: 'clean room',
        date: 'Nov 6th',
        toggle: false
    }
  ])

  let [showForm, setShowForm] = useState(false)

  // delete function
  let onDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  } 

  // toggle function
  let onToggle = (id) => {
    setTasks(tasks.map(task => {
      if (task.id !== id) {
        return task
      }
      else {
        return {...task, toggle: !task.toggle}
      }
    }))
  }

  // add task
  let addNewTask = (task) => {
    let newTask = {...task, id: Math.floor(Math.random() * 10000) + 1}
    setTasks([...tasks, newTask])
  }

  return (
    <div className="container">
      <Header show={showForm} setShow={setShowForm} />
      {showForm? <AddTask onAdd={addNewTask} /> : <></>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={onDelete} onToggle={onToggle} /> : <p>No tasks available</p>}
      
    </div>
  );
}

export default App;
