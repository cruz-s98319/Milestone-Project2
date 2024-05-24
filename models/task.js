// Models folder for task database

const mongoose = require('mongoose')
const { Schema } = mongoose

const taskSchema = newSchema({
    task: { type: String, required: true },
    notes: { type: String, required: true },
    deadline: { type: Date }
})

const taskList = mongoose.model('Task', taskSchema)

module.exports = taskList