import React, { useState } from 'react'

function TodoForm({ addList }) {
    const [listName, setListName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (listName) {
            const newList = { name: listName };

            addList(newList);

            setListName('');
        } else {
            console.log('List name is required');
        }
    };
    
    return (
        <div>
            <h2>Add a To-Do List</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>List Name</label>
                    <input
                        type="text"
                        value={listName}
                        onChange={(e) => setListName(e.target.value)}
                        placeholder="enter name"
                    />
                </div>
                <input type="submit" value="Add List"/>
            </form>
        </div>
    )
}

export default TodoForm