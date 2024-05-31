import React, { useState, useEffect } from 'react'
import axios from 'axios'
import TaskForm from './TaskForm'
import ListView from './ListView'

function TaskManager() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const response = await axios.get('http://localhost:5000/tasks');
            setTasks(response.data);
        } catch (error) {
            console.error('Error fetching tasks', error);
        }
    };

    // Handles changes when adding new tasks
    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    // Handles changes when editing a task
    const updateTask = async  (index, updatedTask) => {
        const taskToUpdate = tasks[index];
        try {
            const response = await axios.put(`http://localhost:5000/tasks/${taskToUpdate._id}`, updatedTask);
            const updatedTasks = tasks.map((task, i) => (i === index ? response.data : task));
            setTasks(updatedTasks);
        } catch (error) {
            console.error('Error updating task', error);
        }
    };
    
    // Handles change when delete a task
    const deleteTask = async (index) => {
        const taskToDelete = tasks[index];
        try {
            await axios.delete(`http://localhost:5000/tasks/${taskToDelete._id}`);
            const updatedTasks = tasks.filter((task, i) => i !== index);
            setTasks(updatedTasks);
        } catch (error) {
            console.error('Error deleting task', error);
        }
    };

    return (
        <div>
            <TaskForm addTask={addTask} />
            <ListView tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
        </div>
    )
}

export default TaskManager