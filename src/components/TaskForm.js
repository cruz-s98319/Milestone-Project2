import React, { useState } from 'react';
import axios from 'axios';

function TaskForm({ addTask, listId }) {
    const [value, setValue] = useState('');
    const [notes, setNotes] = useState('');
    const [error, setError] = useState('')

    const handleSubmit = async  (e) => {
        e.preventDefault();
        if (value && notes) {
            const newTask = { task: value, notes, listId };
            try{
                const response = await axios.post('/api/tasks', newTask);
                addTask(response.data);  // Update the task list in the parent component
                setValue('');  // Clear the form fields
                setNotes('');
                setError('');
            } catch (err) {
                setError('Error adding task. Please try again.');
                console.error('Error:', err);
            }
        } else {
            setError('Incomplete task details');
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
                <div>
                    <label>Notes</label>
                    <input
                        type="text"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="enter notes"
                    />
                </div>
                {error && <p style={{ color: 'red'}} > {error}</p> }
                <input type="submit" value="Add Task" />
            </form>
        </div>
    );
}

export default TaskForm;