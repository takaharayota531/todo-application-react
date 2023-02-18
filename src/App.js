import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';
import InputFieldCreate from './InputFieldCreate';
import {useState,useRef} from 'react';
import {v4 as uuidv4} from 'uuid';


function App() {

  // todos が変更した時に再レンダリングされる
  const [todos,setTodos]=useState([
    {id:1,name:"todo the work",completed:false},
    {id:2,name:"todo the work2",completed:false},
    {id:3,name:"todo the work3",completed:false},
  ]);


  const todoNameRef=useRef();
  // 関数内部でfunctionを定義する必要がある
  const handleAddTodo=()=>{
    // task add
    // console.log(todoNameRef.current.value);
    const name=todoNameRef.current.value;
    if(name==="")return ;

    setTodos((prevTodos)=>{
      // 前のタスクがprevTodos、でそこに追加していく形になっている
      const uuid=uuidv4();
      // console.log(uuid);
      return [...prevTodos,{id:uuid,name:name,completed:false}];
    });
    todoNameRef.current.value=null;
  };


  const toggleTodo=(id)=>{
    // immutable
    const newTodos=[...todos];
    const todo=newTodos.find((todo)=>todo.id==id);

    //　参照渡しが行われている
    todo.completed=!todo.completed;
    setTodos(newTodos);
  };

  const handleClear=()=>{
    const newTodos=todos.filter((todo)=>!todo.completed);
    setTodos(newTodos);

  };


  return <div >

    <TodoList todos={todos} toggleTodo={toggleTodo}/>
    {/* <InputFieldCreate /> */}
    <input type="text" ref={todoNameRef} />
      <button  onClick={handleAddTodo}>タスクを追加</button>
      <button  onClick={handleClear}>完了したタスクの削除</button>
      <div>
        残りのタスク:{todos.filter((todo)=>!todo.completed).length}
      </div>
  </div>;

}

export default App;
