import React, { useState } from 'react'

// Bulleted list of all tasks added to the to-do list groups
function ListView({ tasks, updateTask, deleteTask }) {
    const [editIndex, setEditIndex] = useState(null);
    const [editValue, setEditValue] = useState('');

    const handleEdit = (index) => {
        setEditIndex(index);
        setEditValue(tasks[index].task);
    };

    const handleUpdate = () => {
        updateTask(editIndex, { task: editValue });
        setEditIndex(null);
        setEditValue('');
    };

    return (
        <div>
            <h3>Tasks</h3>

            <ul className="list-group">
                {tasks.map((task, index) => (
                    <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                        {editIndex === index ? (
                            <>
                                <input
                                    type="text"
                                    value={editValue}
                                    onChange={(e) => setEditValue(e.target.value)}
                                    className="form-control"
                                />
                                <button onClick={() => handleUpdate(index)}>Update</button>
                            </>
                        ) : (
                            <>
                                {task.task}
                                <button onClick={() => handleEdit(index)}>Edit</button>
                                <button onClick={() => handleEdit(index)}>Delete</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ListView