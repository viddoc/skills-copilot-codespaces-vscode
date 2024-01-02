// Create web server

// Import modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Import files
const db = require('./db');
const commentRouter = require('./routes/comment-router');

// Connect to database
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Initialize express
const app = express();
const apiPort = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api', commentRouter);

// Start server
app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));