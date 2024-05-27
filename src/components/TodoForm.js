import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

function TodoForm() {
    
    return (
        <div>
            <h2>Add a To-Do List</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>List Name</label>
                    <input
                        type="text"
                        placeholder="enter name"
                    />
                </div>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default TodoForm