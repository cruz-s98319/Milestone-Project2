import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

// Will need to connect submit form to a mongo database
function TaskForm({ addTask }) {
    const [value, setValue] = useState('');
    const [notes, setNotes] = useState('');
    const [deadline, setDeadline] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value && notes && deadline) {
            const newTask = { task: value, notes: notes, deadline: deadline };

            // prop passed down
            addTask(newTask);

            setValue('');
            setNotes('');
            setDeadline('');

            // Figure out how to connect POST request later
        //     axios.post('http://localhost:3000/addTask', newTask)
        //         .then(response => {
        //             addTask(response.data);
        //             setValue('');
        //             setNotes('');
        //             setDeadline('');
        //         })
        //         .catch(error => {
        //             console.error('Error: Task not added')
        //         });
        // }
        } else {
            console.log('Error')
        }
    }
    
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
                <div>
                    <label>Deadline</label>
                    <input
                        type="datetime-local"
                        value={deadline}
                        onChange={(e) => setDeadline(e.target.value)}
                    />
                </div>
                <input type="submit" value="Add Task"/>
            </form>
        </div>
    );
}

export default TaskForm