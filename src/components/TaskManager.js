import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import TaskForm from './TaskForm'
import ListView from './ListView'

function TaskManager() {
    const { listId } = useParams()
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    useEffect(() => {
        console.log(`Fetching tasks for listId: ${listId}`)
    }, [listId]);
    
    return (
        <div>
            <h2>Tasks for List {listId}</h2>
            <TaskForm addTask={addTask} listId={listId} />
            <ListView tasks={tasks} />
        </div>
    )
}

export default TaskManager