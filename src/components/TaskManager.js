import React, { useState } from 'react'
import TaskForm from './TaskForm'
import ListView from './ListView'

function TaskManager() {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        // console.log('Adding task successful: ', task);
        setTasks([...tasks, task]);
    };
    
    return (
        <div>
            <TaskForm addTask={addTask} />
            <ListView tasks={tasks} />
        </div>
    )
}

export default TaskManager