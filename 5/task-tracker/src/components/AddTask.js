import { useState } from "react"

function AddTask({ onAdd }) {

  let [title, setTitle] = useState('')
  let [date, setDate] = useState('')
  let [toggle, setToggle] = useState(false)

  let onSubmit = (e) => {
    e.preventDefault()
    if(!title) {
      alert('Title field can\'t be empty!')
      return
    }
    onAdd({title, date, toggle})
    setTitle('')
    setDate('')
    setToggle(false)
  }

  return (
    <form className="add-form" onSubmit={onSubmit} >
        <div className="form-control">
            <label>title</label>
            <input type="text" placeholder="Add Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="form-control">
            <label>date and time</label>
            <input type="text" placeholder="Add Date & Time" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <div className="form-control form-control-check">
            <label>toggle</label>
            <input type="checkbox" checked={toggle}  onChange={(e) => setToggle(e.currentTarget.checked)}/>
        </div>
        <input className="btn btn-block" type="submit" value="Save Task" />
    </form>
  )
}

export default AddTask