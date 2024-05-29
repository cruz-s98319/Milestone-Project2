import React, { useState } from 'react'
import TodoForm from './TodoForm'
import { Link } from 'react-router-dom'

function TodoManager() {
    const [lists, setLists] = useState([]);

    const addList = (list) => {
        setLists([...lists, list]);
    };

    return(
        <div>
            <TodoForm addList={addList} />
            <h2>Categories</h2>
            <ul>
                {lists.map((list, index) => (
                    <li key={index}>
                        <Link to={`/list/${index}`}>
                            {list.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoManager