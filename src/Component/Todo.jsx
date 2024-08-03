import { useState } from "react";
import Form from "./Form.jsx";
import TodoList from "./TodoList.jsx";
import Footer from "./Footer.jsx";

export default function Todo() {

    const [todos, setTodos] = useState([]);
    const completedTodos = todos.filter((todo)=>todo.done).length;
    const uncompletedTodos = todos.filter((todo)=>!todo.done).length;
    console.log({completedTodos})
    return <div> 
        <Form todos= {todos} setTodos= {setTodos}/>
       <TodoList todos= {todos} setTodos= {setTodos}/>
      <Footer completedTodos = {completedTodos} uncompletedTodos = {uncompletedTodos}/>
        </div>;
}