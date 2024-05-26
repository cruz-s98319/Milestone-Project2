import React from 'react'

// Bulleted list of all tasks added to the to-do list groups
function ListView({ tasks }) {
    console.log('Rendering tasks successful: ', tasks);
    
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
            </ul>
        </div>
    )
}

export default ListView