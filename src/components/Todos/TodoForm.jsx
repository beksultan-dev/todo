import {useState} from 'react';
import styles from './TodoForm.module.css';
import Button from '../UI/Button';

function TodoForm({addTodo}) {
    const [text, setText] = useState('');

    const addTodoHandler = (e) => {
        e.preventDefault();

        if (text.trim()) {
            addTodo(text);
        }
        setText('');
    };

    return (
        <div className={styles.todoFormContainer}>
            <form onSubmit={addTodoHandler}>
                <input
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Enter new todo"
                    type="text"
                    value={text}
                />
                <Button type="submit">Add todo</Button>
            </form>
        </div>
    );
}

export default TodoForm;
