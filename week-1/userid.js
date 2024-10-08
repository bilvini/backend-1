const express = require('express');
const app = express();
const PORT = process.env.PORT || 3003;

// Middleware to parse JSON request bodies
app.use(express.json());

// Define the /hello route
app.get('/hello', (req, res) => {
    res.send('Hello, Express!');
});

// Define the /goodbye route
app.get('/goodbye', (req, res) => {
    res.send('Goodbye, Express!');
});

// Define the /echo route
app.post('/echo', (req, res) => {
    res.json(req.body); // Echo back the JSON data
});

// Define the /greet/:name route
app.get('/greet/:name', (req, res) => {
    const name = req.params.name; // Get the name from the route parameter
    res.send(`Hello, ${name}!`);
});

// Define the /user/:id route
app.get('/user/:id', (req, res) => {
    const id = req.params.id; // Get the user ID from the route parameter
    res.send(`User ID: ${id}`);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
