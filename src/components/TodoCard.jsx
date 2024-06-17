import React from "react";

export default function TodoCard(props) {
  return (
    <div >
      <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {props.todo}
            <div className="ms-3">
            <i className="bi bi-pencil-square me-3"  style={{ cursor: 'pointer' }} onClick={() => props.handleEdit(props.todo.id)}></i>
            <i className="bi bi-trash"   onClick={() => props.handleDelete(props.todo.id)}  style={{ cursor: 'pointer' }}></i>
            </div>
           
            </li>
       
      </ul>
    </div>
  );
}
