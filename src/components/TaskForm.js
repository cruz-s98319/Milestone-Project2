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
            <h2>Add Task</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Task</label>
                    <input
                        type="text"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        placeholder="enter task"
                    />
                </div>
                <input type="submit" value="Add Task" />
            </form>
        </div>
    );
}

export default TaskForm;
