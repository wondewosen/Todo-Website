import styles from './Form.module.css'
export default function TodoItem({item, todos, setTodos })
{
    function handleDelete(item){
console.log('deleted');
      console.log(todos.filter((todo)=>todo !== item)); setTodos(todos.filter((todo)=>todo !== item));
     
    }
    function handleClick(name){
        console.log("text clicked", name)
    }
    return <h1 className={styles.Item}>
        <span className={styles.textClick} onClick={() => handleClick(item.name)}>{item.name}</span>
         <span>
            <button onClick={()=>handleDelete(item)}  className={styles.Deletebtn}>x</button>
         </span>
        </h1>
}