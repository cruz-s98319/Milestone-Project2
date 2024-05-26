import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ListForm from './TodoList'
import TaskForm from './TaskForm'
import TaskManager from './TaskManager'

// Will move ListView to the linked pages later
import ListView from './ListView'

function HomeView() {
    return (
        <div>
            {/* <h1>To-Do Lists</h1> */}
            <div>
                {/* <TodoList />
                <ListView />
                <TaskForm /> */}
                <TaskManager />
            </div>
        </div>
    )
}

export default HomeView