import styles from './Form.module.css'
export default function TodoItem({item, todos, setTodos })
{
    function handleDelete(item){
console.log('deleted');
      console.log(todos.filter((todo)=>todo !== item)); 
      setTodos(todos.filter((todo)=>todo !== item));
     
    }
    function handleClick(name){
        console.log("text clicked", name);
      const NewArray = todos.map((todo)=>  todo.name === name? {...todo, done: !todo.done}: todo);
      setTodos(NewArray)
    }
    const TextHiglight = item.done? styles.complete: item.done= "";
    return <h1 className={styles.Item}>
        <span className={TextHiglight} onClick={() => handleClick(item.name)}>{item.name}</span>
         <span>
            <button onClick={()=>handleDelete(item)}  className={styles.Deletebtn}>x</button>
         </span>
        </h1>
}