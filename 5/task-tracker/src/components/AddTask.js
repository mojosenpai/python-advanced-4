function AddTask() {
  return (
    <form className="add-form">
        <div className="form-control">
            <label>title</label>
            <input type="text" placeholder="Add Title" />
        </div>
        <div className="form-control">
            <label>date and time</label>
            <input type="text" placeholder="Add Date & Time" />
        </div>
        <div className="form-control form-control-check">
            <label>toggle</label>
            <input type="checkbox" />
        </div>
        <input className="btn btn-block" type="submit" value="Save Task" />
    </form>
  )
}

export default AddTask