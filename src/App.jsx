import React,{useState} from "react";
import "./style.css";

export const App = () => {
const [todoText, setTodoText] = useState("");

const [incompleteTodos, setIncompleteTodos] = useState([]);
const [completeTodos, setCompleteTodos] = useState([]);

const onChangeTodoText=(event)=>setTodoText(event.target.value)


// 追加
const onClickAdd = () => {

if (todoText === "") return;
const newTodos = [...incompleteTodos, todoText];
setIncompleteTodos(newTodos);
setTodoText("");

}

// 削除
const onClickDelete = (index) => {
const newTodos = [...incompleteTodos, todoText];
newTodos.splice(index, 1);
setIncompleteTodos(newTodos);

}

  const onClickComplete = (index) => {
const newIncompleteTodos = [...incompleteTodos, todoText];
    newIncompleteTodos.splice(index, 1);

    const newcompleteTodos=[...completeTodos,incompleteTodos[index]]
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newcompleteTodos)


  }


return (
<>
  <div>
    <input placeholder="TODOを入力" value={todoText} onChange={onChangeTodoText} />
    <button onClick={onClickAdd}>追加</button>


  </div>
  <div>
    <p>未完了のTODO</p>

    {incompleteTodos.map((todo, index) => {
      return (
        <div key={todo} className="listbox">
          <p>{todo}</p>
          <button onClick={() => onClickComplete(index)}>完了</button>
          <button onClick={() => onClickDelete(index)}>削除</button>

        </div>
      );
    })}


  </div>
  <div>
    <p>完了したTODO</p>

    {completeTodos.map((todo, index) => {
      return (
        <div key={todo} className="listbox">
          <p>{todo}</p>
          <button>戻す</button>
        </div>
      );
    })}


  </div>
</>
);
}

export default App;
