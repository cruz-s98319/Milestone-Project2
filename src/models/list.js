const mongoose = require ('mongoose')

const ListSchema = new mongoose.Schema({
    listName: {
        type: String,
        required: true,
        minlength: 3,
    },
})

const ListModel = mongoose.model('List', ListSchema)

module.exports = ListModel;