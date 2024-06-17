import React from 'react'
export default function TodoInput(props) {
  return (
    <div>
     <div className="container">
      
        <form>
            <div className="d-flex">
                <input type="text" value={props.todoValue} class="form-control" placeholder="Enter task......" onChange={props.handleChange}  />
                <button type="button" className="btn btn-success" onClick={props.handleOnClick}>Add</button>
                    
            </div>

        </form>
    </div>
      
    </div>
  )
}
