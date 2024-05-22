import React from 'react'

import ListForm from './ListForm'

function HomeView() {
    return (
        <div>
            <h1>To-Do Lists</h1>
            <div>
                {/* Placeholders for where the different to-do lists will show up in the home page */}
                <div>
                    <h2>List 1</h2>
                    {/* Placeholder for submit form */}
                    <ListForm />
                </div>
                <div>
                    <h2>List 2</h2>
                </div>
                <div>
                    <h2>List 3</h2>
                </div>
            </div>
        </div>
    )
}

export default HomeView