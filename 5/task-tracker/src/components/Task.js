
function Task({task}) {
  return (
    <div className="task"><h3>{task.title}</h3><p>{task.date}</p></div>
  )
}

export default Task