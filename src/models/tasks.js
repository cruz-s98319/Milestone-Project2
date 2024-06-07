const mongooese = require('mongoose')

const TaskSchema = new mongoose.Schema ({
    task: String,
    notes: String,
    deadline: Number,
})

const TaskModel = mongoose.model('tasks')
module.exports = UserModel