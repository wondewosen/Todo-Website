import { useState } from "react";
import styles from "./Form.module.css"
export default function Form({todos, setTodos}){

    
   // const [todo, setTodo] = useState("");
   const [todo, setTodo] = useState({name: "", done: false});
    function handleSubmit(e){
        e.preventDefault(); 
        setTodos([...todos ,todo]);
        setTodo({name: "", done: false});
    }
    return <div className={styles.formContainer}>

    <form className={styles.todoform} onSubmit={handleSubmit}>
        <input  className = {styles.Input} onChange={(e)=>setTodo({name: e.target.value})} value={todo.name} type="text" placeholder="Enter Todo Item..." />
       <button className= {styles.Add} type="submit">Add</button>
             </form>   
             </div>
}