// Will need to figure out how to connect this to the react app
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const TaskModel = require('./src/models/Tasks')

require('dotenv').config()
const PORT = process.env.PORT
const app = express()

app.use(cors())
app.use(express.json())
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
const methodOverride = require('method-override')
app.use(methodOverride('_method'))


// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/todolist', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use(bodyParser.json());
app.use(cors());

//Schemas
const ListSchema = new mongoose.Schema({
    listname: {
        type: String,
        required: true,
        minlength: 3,
    }
})

//Route for creating a new task
app.post('/api/tasks', async (req, res) => {
    try {
        const {task, notes, deadline, listId} = req.body;
        const newTask = new TaskModel ({ task, notes, deadline, listId})
        await newTask.save();
        res.status(201).send(newTask);
    } catch (error) {
        res.status(400).send(error.message);
    }
})

//Route to get all tasks for specific list 
app.get('/api/lists/:listId/tasks', async (req, res) => {
    try {
        const { listId } = req.params;
        const tasks = await TaskModel.find({ listId });
        res.status(200).send(tasks);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

//app.post('/')

// ROUTES
app.get('/', (req, res) => {
    res.status('200').json(todos)
})

app.get('/getTasks', (req, res) => {
    TaskModel.find()
    .then(task => res.json(task))
    .catch(err => res.json(err))
})

/*app.post('/add', (req, res => {
    const task = req.body.task;
    TaskModel.creae({
        task: task,
        notes: notes,
        deadline: deadline,   
    }).then(result => res.json (result))
        .catch(err => res.json (err))
}))

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
})*/

app.listen(PORT, () => {
    console.log(`Server running port: ${PORT}`)
})