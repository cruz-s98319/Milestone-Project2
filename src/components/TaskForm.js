import React, { useState } from 'react';

function TaskForm({ addTask, listId }) {
    const [value, setValue] = useState('');
    const [notes, setNotes] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value && notes) {
            const newTask = { task: value, notes: notes, listId: listId };
            console.log('New Task:', newTask);  // Log the new task

            // Adding the task to the list
            addTask(newTask);

            // Clearing the form fields
            setValue('');
            setNotes('');
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
                        id="taskName"
                        type="text"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        placeholder="enter task"
                    />
                </div>
                <div>
                    <label>Notes</label>
                    <input
                        id="taskNotes"
                        type="text"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="enter notes"
                    />
                </div>
                <div>
                    <label>Deadline</label>
                    <input
                        type="datetime-local"
                    />
                </div>
                <input id="subButton" type="submit"/>
                <div class = "addedTask" id = "taskContainer">
                </div>
            </form>
        </div>
    );
}

export default TaskForm;
