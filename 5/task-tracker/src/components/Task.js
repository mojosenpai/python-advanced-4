import {FaTimes} from 'react-icons/fa'

function Task({task, onDelete, onToggle}) {
  return (
    <div className={`task ${task.toggle ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}><h3>{task.title}<FaTimes style={{color:'red'}} onClick={() => onDelete(task.id)} /></h3><p>{task.date}</p></div>
  )
}

export default Task