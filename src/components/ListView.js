import React from 'react'

// Bulleted list of all tasks added to the to-do list groups
function ListView({ tasks }) {
    return (
        <div>
            {/* Connect lists to list name */}
            <h2>List Name</h2>

            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task.task} - {task.notes} - {task.deadline}
                    </li>
                ))}
                {/* <li>
                    Task 1
                </li>
                <li>
                    Task 2
                </li>
                <li>
                    Task 3
                </li> */}
            </ul>
        </div>
    )
}

export default ListView