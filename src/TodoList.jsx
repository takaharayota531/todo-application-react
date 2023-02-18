// jsx  は明示的にコンポーネントであるを出している

import React from 'react'

const TodoList = ({todos,toggleTodo}) => {
  return todos.map((todo)=>(
    <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo}/>
  ));
}



const Todo=({todo,toggleTodo})=>{

  const handleTodoClick=()=>{
    toggleTodo(todo.id);
  };

  return (
  <div >
    <label>
<input 
  type="checkbox" 
  checked={todo.completed} 
  readOnly 
  onChange={handleTodoClick}></input>
    </label>
    {todo.name}</div>
  );

}

// const component export
export default TodoList;
