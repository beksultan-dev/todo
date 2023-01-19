import styles from './Todo.module.css';
import {RiTodoFill, RiDeleteBin2Line} from 'react-icons/ri';
import {FaCheck} from 'react-icons/fa';

function Todo({todo, todoDelete, toggler}) {
    return (
        <div className={`${styles.todo} ${todo.isComplited ? styles.completedTodo : ''}`}>
            <RiTodoFill className={styles.todoIcon} />
            <div className={styles.todoText}>{todo.text}</div>
            <RiDeleteBin2Line className={styles.checkIcon} onClick={(e) => todoDelete(todo.id)} />
            <FaCheck onClick={(e) => toggler(todo.id)} className={styles.deleteIcon} />
        </div>
    );
}

export default Todo;
