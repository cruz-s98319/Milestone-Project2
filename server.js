// Will need to figure out how to connect this to the react app
const express = require('express')
const mongoose = require('mongoose')

require('dotenv').config()
const PORT = process.env.PORT
const app = express()

app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
const methodOverride = require('method-override')
app.use(methodOverride('_method'))



// ROUTES
app.get('/', (req, res) => {
    res.status('200').json(todos)
})

app.post('/addTask', (req, res) => {
    const newTask = new Task({
        task: req.body.task,
        notes: req.body.notes,
        deadline: req.body.deadline
    })

    newTask.save(
        .then(task => res.json(task))
        .catch(err => res.status(400).json('Error: ' + err))
    )
})

app.listen(PORT, () => {
    console.log(`Server running port: ${PORT}`)
})