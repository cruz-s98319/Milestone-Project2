import React from 'react'

// Will need to connect submit form to a mongo database
function TaskForm() {
    return (
        <div>
            <h2>Add Task</h2>
            <form>
                <div>
                    <label>Task</label>
                    <input
                        type="text"
                        placeholder="enter task"
                    />
                </div>
                <div>
                    <label>Notes</label>
                    <input
                        type="text"
                        placeholder="enter notes"
                    />
                </div>
                <div>
                    <label>Deadline</label>
                    <input
                        type="datetime-local"
                    />
                </div>
                <button>Add Task</button>
            </form>
        </div>
    )
}

export default TaskForm