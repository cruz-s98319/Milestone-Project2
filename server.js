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
    res.send('To-Do List')
})