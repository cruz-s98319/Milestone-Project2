import React, { useState } from 'react'
import TodoForm from './TodoForm'
import TaskManager from './TaskManager'

function TodoManager() {
    const [lists, setLists] = useState([]);

    // Handles changes when adding a new to-do list
    const addList = (list) => {
        setLists([...lists, list]);
    };

    return(
        <div className="container">
            <TodoForm addList={addList} />
            <h2>Categories</h2>
            <ul className="row align-items-start">
                {lists.map((list, index) => (
                    <li key={index} className="col-6">
                        <h3>
                            {list.name}
                        </h3>
                        <TaskManager listId={index} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoManager