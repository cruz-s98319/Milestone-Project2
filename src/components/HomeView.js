import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TodoManager from './TodoManager'
import TaskManager from './TaskManager'

function HomeView() {
    return (
        <Routes>
            <Route path="/" element={<TodoManager />} />
            <Route path="/list/:listId" element={<TaskManager />} />
        </Routes>
    )
}

export default HomeView