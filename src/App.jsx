
import './App.css';
import TodoInput from './components/TodoInput';
import TodoItems from './components/TodoItems';
import React  from 'react';
import { useState } from 'react';

function App() {
 
 const [todos, setTodos] = useState([]);
 const [todoValue, setTodoValue] = useState('');
 const [editing, setEditing] = useState(null);
 const [editingValue, setEditingValue] = useState('');

 const handleChange = (event) => {
  setTodoValue( event.target.value);
};
const handleOnClick=()=>
{
  if (todoValue.trim() !== '') { 
    setTodos([...todos, todoValue]); 
    setTodoValue(''); 
  }
}
const handleDelete = (id) => {
  setTodos(todos.filter(todo => todo.id !== id)); // Remove todo with the given id
};

const handleEdit = (id) => {
  const todo = todos.find(todo => todo.id === id);
  setEditing(id);
  setEditingValue(todo.text);
};

const handleEditChange = (event) => {
  setEditingValue(event.target.value);
};

const handleEditSave = () => {
  setTodos(todos.map(todo => todo.id === editing ? { ...todo, text: editingValue } : todo));
  setEditing(null);
  setEditingValue('');
};

  return (
    <div className="App">
     <TodoInput handleChange={handleChange} handleOnClick={handleOnClick}/>
     <TodoItems todos={todos} handleDelete={handleDelete}   handleEdit={handleEdit}
        handleEditChange={handleEditChange}
        handleEditSave={handleEditSave}
        editing={editing}
        editingValue={editingValue} />
    </div>
  );
}

export default App;
