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
})

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
})

