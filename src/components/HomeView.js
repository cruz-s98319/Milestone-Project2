import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TodoManager from './TodoManager'


// Will move ListView to the linked pages later
import ListView from './ListView'

function HomeView() {
    return (
        <div>

            <div>
                <TodoManager />
            </div>
        </div>
    )
}

export default HomeView