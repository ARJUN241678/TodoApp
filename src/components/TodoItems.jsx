import React from 'react'
import TodoCard from './TodoCard';

export default function TodoItems(props) {
 
    return (
        <div className="container">
          {props.todos.map((todo, todoIndex) => {
            return (
                <TodoCard todo={todo} index={todoIndex}  handleDelete={props.handleDelete}
                handleEdit={props.handleEdit}
                handleEditChange={props.handleEditChange}
                handleEditSave={props.handleEditSave}
                editing={props.editing}
                editingValue={props.editingValue}
               />
            );
          })}
        </div>
      );
}
