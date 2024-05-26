import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ListForm from './ListForm'
import TaskForm from './TaskForm'
import TaskManager from './TaskManager'

// Will move ListView to the linked pages later
import ListView from './ListView'

function HomeView() {
    return (
        <div>
            {/* <h1>To-Do Lists</h1> */}
            <div>
                {/* <ListForm />
                <ListView />
                <TaskForm /> */}
                <TaskManager />
            </div>
        </div>
    )
}

export default HomeView