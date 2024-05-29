import React, { useState } from 'react'
import TodoForm from './TodoForm'
import TaskManager from './TaskManager'
// import { Link } from 'react-router-dom'

function TodoManager() {
    const [lists, setLists] = useState([]);

    const addList = (list) => {
        setLists([...lists, list]);
    };

    return(
        <div className="container">
            <TodoForm addList={addList} />
            <h2>Categories</h2>
            <ul className="list-group">
                {lists.map((list, index) => (
                    <li key={index} className="list-group-item">
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