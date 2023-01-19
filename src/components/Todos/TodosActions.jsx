import Button from '../UI/Button';
import {RiDeleteBin2Line, RiRefreshLine} from 'react-icons/ri';
import styles from './TodosActions.module.css';

function TodosActions({deleteAllTodos, deleteAllFinishedTodos, todosExists}) {
    return (
        <div className={styles.actionsContainer}>
            <Button title="Reset All Todos" onClick={deleteAllTodos}>
                <RiRefreshLine />
            </Button>
            <Button
                title="Delete All Finished Todos"
                onClick={deleteAllFinishedTodos}
                disabled={!todosExists}
            >
                <RiDeleteBin2Line />
            </Button>
        </div>
    );
}

export default TodosActions;
