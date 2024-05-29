import React from 'react'

// Bulleted list of all tasks added to the to-do list groups
function ListView({ tasks, editTask }) {

    return (
        <div>
            {/*Connect new to-do list name to h2 tag*/}
            <h3>Tasks</h3>

            <ul className="list-group">
                {tasks.map((task, index) => (
                    <li key={index} className="list-group-item">
                        {task.task}
                        <button onClick={() => editTask(index)}>Edit</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ListView