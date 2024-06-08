const mongoose = require ('mongoose')

const ListSchema = new mongoose.Schema({
    listName: String,
})

const ListModel = mongoose.model('list')