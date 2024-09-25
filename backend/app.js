const express = require('express');
const cors = require('cors'); // Import the CORS library

const app = express();
app.use(cors()); // Enable CORS for all routes

const http = require('http').Server(app);
const mongoose = require('mongoose');
const User = require('./models/userModel');

app.use(express.json()); // To parse JSON bodies

// Connect to MongoDB
mongoose.connect('mongodb+srv://tambatyash85:ALEJExGD8xuDsUkK@test-pro-db.dlxy5.mongodb.net/?retryWrites=true&w=majority&appName=test-pro-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB connected');
}).catch(err => {
    console.log('MongoDB connection error: ', err);
});

// POST API to create a new user
app.post('/user', async (req, res) => {
    try {
        const { name, email } = req.body;
        const newUser = new User({ name, email });
        await newUser.save(); // Insert data into MongoDB
        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error });
    }
});

// Start the server
http.listen(5000, function(){
    console.log("Server running on port 5000");
});
