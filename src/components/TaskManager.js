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

    const updateTask = (index, updatedTask) => {
        const updatedTasks = tasks.map((task, i) => (i === index ? updatedTask : task));
        setTasks(updatedTasks);
    };
    
    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((task, i) => i !== index);
        setTasks(updatedTasks);
    };

    // used for the database later on
    // useEffect(() => {
    //     console.log(`Fetching tasks for listId: ${listId}`)
    // }, [listId]);
    
    return (
        <div>
            <TaskForm addTask={addTask} />
            <ListView tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
        </div>
    )
}

export default TaskManager