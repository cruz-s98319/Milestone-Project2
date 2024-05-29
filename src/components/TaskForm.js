import React, { useState } from 'react';

function TaskForm({ addTask }) {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value) {
            const newTask = { task: value };

            // Adding the task to the list
            addTask(newTask);

            // Clearing the form fields
            setValue('');
        } else {
            console.log('Incomplete task details');
        }
    };

    return (
        <div>
            <h5>Add Task</h5>
            <form onSubmit={handleSubmit} className="mb-3">
                <div className="mb-3">
                    <label className="form-label">Task</label>
                    <input
                        type="text"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        placeholder="enter task"
                    />
                </div>
                <input type="submit" value="Enter" />
            </form>
        </div>
    );
}

export default TaskForm;
