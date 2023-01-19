import Todo from './Todo';
import styles from './TodoList.module.css';

function TodoLIst({todos, deleteTodo, toggleCheck, complitedTodosCount}) {
    return (
        <div className={styles.todoListContainer}>
            {todos.length ? (
                todos.map((item) => (
                    <Todo todoDelete={deleteTodo} toggler={toggleCheck} todo={item} key={item.id} />
                ))
            ) : (
                <h2 className={styles.h2}>Todo list is empty</h2>
            )}
        </div>
    );
}

export default TodoLIst;
