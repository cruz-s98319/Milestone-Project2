import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ListForm from './ListForm'
import TaskForm from './TaskForm'

// Will move ListView to the linked pages later
import ListView from './ListView'

function HomeView() {
    return (
        <div>
            {/* <h1>To-Do Lists</h1> */}
            <div>
                {/* <Router>
                    <Routes>
                        <Route path="/list" element={<ListView />}/>
                    </Routes>
                </Router> */}
                {/* Placeholder for submit form */}
                <ListForm />
                <ListView />
                <TaskForm />
                {/* Placeholders for where the different to-do lists will show up in the home page */}
                {/* <div>
                    <h2><a href="#">List 1</a></h2>
                    <TaskForm />
                    <ListView />
                </div>
                <div>
                    <h2><a href="#">List 2</a></h2>
                    <TaskForm />
                    <ListView />
                </div>
                <div>
                    <h2><a href="#">List 3</a></h2>
                    <TaskForm />
                    <ListView />
                </div> */}
            </div>
        </div>
    )
}

export default HomeView