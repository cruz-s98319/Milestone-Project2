const express = require('express')
const Task = require('../models/TaskSchema')
const router = express.Router();

// ROUTES

// Fetches all tasks
router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// New task
router.post('/', async (req, res) => {
    const task = new Task({
        task: req.body.task
    });

    try {
        const newTask = await task.save();
        res.status(201).json(newTask);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update task
router.put('/:id', async (req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id,
            { task: req.body.task },
            { new: true }
        );
        res.json(updatedTask);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete task
router.delete(':/id', async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.json({ message: 'Task successfully deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router