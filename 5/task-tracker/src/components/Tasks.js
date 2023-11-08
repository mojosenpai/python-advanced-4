import Task from "./Task"

function Tasks({tasks}) {
  
  return (
    <>
        {tasks.map(
            (current_task) => (<Task key={current_task.id} task={current_task} />)
        )}
    </>
  )
}

export default Tasks