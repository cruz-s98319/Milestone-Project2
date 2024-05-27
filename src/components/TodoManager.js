import React, { useState } from 'react'
import TodoForm from './TodoForm'
import TaskManager from './TaskManager'

function TodoManager() {
    const [lists, setLists] = useState([]);

    const addList = (list) => {
        setLists([...lists, list]);
    };

    return(
        <div>
            <TodoForm addList={addList} />
            <h2>To-Do Lists</h2>
            <ul>
                {lists.map((list, index) => (
                    <li key={index}>{list.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default TodoManager