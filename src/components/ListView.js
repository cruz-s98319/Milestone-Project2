import React from 'react'

// Bulleted list of all tasks added to the to-do list groups
function ListView({ tasks }) {

    return (
        <div>
            {/*Connect new to-do list name to h2 tag*/}
            <h2>Tasks</h2>

            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task.task} - {task.notes} - {task.deadline}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ListView