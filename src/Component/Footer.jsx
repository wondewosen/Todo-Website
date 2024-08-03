
import styles from "./footer.module.css"

export default function Footer({completedTodos, uncompletedTodos}){
   return <div className = {styles.footer}>
     <span className={styles.item}>Completed Tasks: {completedTodos}
     </span>
     <span className={styles.item}>Uncompleted Tasks: {uncompletedTodos}
     </span>
   </div>
}