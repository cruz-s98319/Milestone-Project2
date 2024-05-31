require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const taskRoutes = require('../routes/TaskRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection string
const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB:', process.env.MONGO_URI))
    .catch(err => console.error('Could not connect to MongoDB:', err));

// Routes
app.use('/tasks', taskRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
