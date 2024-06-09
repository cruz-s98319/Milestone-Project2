const mongooese = require('mongoose')

const TaskSchema = new mongoose.Schema ({
    task: {String,
    required: true
    }
    notes: String,
    deadline: Number,
    listId: {
        type :mongoose.Schema.Types.ObjectId,
        ref: 'List',
        required: true
    }
})

const TaskModel = mongoose.model('Task', TaskSchema)
module.exports = TaskModel