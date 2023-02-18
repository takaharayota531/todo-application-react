import React from 'react';
import {useRef} from 'react';

const InputFieldCreate = () => {

  // get element 
  const todoNameRef=useRef();
  

  // 関数内部でfunctionを定義する必要がある
  const handleAddTodo=()=>{
    // task add
    // console.log(todoNameRef.current.value);
    const name=todoNameRef.current.value;
    


  };


  return (
    <div>

      <input type="text" ref={todoNameRef} />
      <button  onClick={handleAddTodo}>タスクを追加</button>
      <button>完了したタスクの削除</button>
      <div>
        残りのタスク
      </div>
    </div>
  );
}

export default InputFieldCreate;
