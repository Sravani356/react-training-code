import React, {useState, useEffect} from "react";
import axios from 'axios';


const Todos = () => {
    const [todolist, setTodoList] = useState(null);

    useEffect(() => {
        (async () => {
            const todos = await axios.get(
                "https://jsonplaceholder.typicode.com/todos"
            );
            setTodoList(todos.data);
        })();
    }, []);

    return todolist ? (
        <ul>
            {todolist.map((todo, index) => (
                <li key={index} data-testid="todo">
                    {todo.title}
                </li>
    ))}
        </ul>
    ) : (
        <p>Loading..</p>
    );
}

export default Todos;