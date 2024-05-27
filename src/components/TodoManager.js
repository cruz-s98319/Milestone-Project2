import React, { useState } from 'react'
import TodoForm from './TodoForm'
import TaskManager from './TaskManager'

function TodoManager({ addList }) {
    const [lists, setLists] = useState([]);

    const assList = (list) => {
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