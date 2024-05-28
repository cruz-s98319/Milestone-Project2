import React from 'react'
import { useEffect, useState } from 'react'

// Will need to connect submit form to a mongo database
function TaskForm(addTask) {
    const [tasks, setTasks] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (tasks) {
            addTask(tasks);
            setTasks('');
        }
    }
    
    return (
        <div>
            <h2>Add Task</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Task</label>
                    <input
                        id="taskName"
                        type="text"
                        value={tasks}
                        onChange={(e) => setTasks(e.target.tasks)}
                        placeholder="enter task"
                    />
                </div>
                <div>
                    <label>Notes</label>
                    <input
                        id="taskNotes"
                        type="text"
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
    )
}

export default TaskForm