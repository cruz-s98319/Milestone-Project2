import React from 'react'

// Will need to connect submit form to a mongo database
// This will later be linked to the list page
function TodoList() {
    return (
        <div>
            <h2>Add A New To-Do List</h2>
            <form>
                <div>
                    <label>List Name</label>
                    <input
                        type="text"
                        placeholder="enter list name"
                        required
                    />
                </div>
                <div>
                    <label>Notes</label>
                    <input
                        type="text"
                        placeholder="enter notes"
                    />
                </div>
                <button>Add List</button>
            </form>
        </div>
    )
}

export default ListForm