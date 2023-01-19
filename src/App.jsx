import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import TodoForm from './components/Todos/TodoForm';
import TodoLIst from './components/Todos/TodoLIst';
import TodosActions from './components/Todos/TodosActions';
import './App.css';

function App() {
    const [todos, setTodos] = useState([]);

    // ************* добавляет новый объект todo в состояние, функция принимает описание для todo
    const addTodoHandler = (text) => {
        const newTodo = {
            text: text,
            isComplited: false,
            id: uuidv4(),
        };
        setTodos([...todos, newTodo]);
    };

    // ************* меняет свойство isComlited у того todo, id которого принимает функция
    const toggleCheckHandler = (id) => {
        setTodos(
            todos.map((item) => {
                return item.id === id ? {...item, isComplited: !item.isComplited} : {...item};
            })
        );
    };

    // ************* удаляет todo, id которого принимает функция. Перезаписывает состояние компонента
    const deleteTodoHandler = (id) => {
        setTodos(todos.filter((item) => item.id !== id));
    };

    // ************* удаляет все todo
    const deleteAllTodosHandler = () => {
        setTodos([]);
    };

    // ************* удаляет те todo, у которых свойство isComplited: true
    const deleteAllFinishedTodosHandler = () => {
        setTodos(todos.filter((item) => item.isComplited === false));
    };

    const complitedTodosCount = todos.filter((item) => item.isComplited).length;

    return (
        <div className="App">
            <h1>Todo App</h1>
            <div className="appContainer">
                <TodoForm addTodo={addTodoHandler} />

                {todos.length ? (
                    <TodosActions
                        todosExists={!!complitedTodosCount}
                        deleteAllTodos={deleteAllTodosHandler}
                        deleteAllFinishedTodos={deleteAllFinishedTodosHandler}
                    />
                ) : null}

                <TodoLIst
                    toggleCheck={toggleCheckHandler}
                    deleteTodo={deleteTodoHandler}
                    todos={todos}
                    complitedTodosCount={complitedTodosCount}
                />
                {complitedTodosCount ? (
                    <div className="complited">
                        You have complited <span>{complitedTodosCount}</span>{' '}
                        {complitedTodosCount === 1 ? 'todo' : 'todos'}
                    </div>
                ) : null}
            </div>
        </div>
    );
}

export default App;
