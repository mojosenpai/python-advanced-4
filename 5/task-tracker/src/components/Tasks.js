import Task from "./Task"

function Tasks({tasks, onDelete, onToggle}) {
  
  return (
    <>
        {tasks.map(
            (current_task) => (<Task key={current_task.id} task={current_task} onDelete={onDelete} onToggle={onToggle} />)
        )}
    </>
  )
}

export default Tasks