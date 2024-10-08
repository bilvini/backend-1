const express = require('express');
const app = express();
const PORT = process.env.PORT || 3004;

// Middleware to serve static files from the public directory
app.use(express.static('public'));

// Other routes...
app.get('/hello', (req, res) => {
    res.send('Hello, Express!');
});

app.get('/goodbye', (req, res) => {
    res.send('Goodbye, Express!');
});

app.post('/echo', (req, res) => {
    res.json(req.body); // Echo back the JSON data
});

app.get('/greet/:name', (req, res) => {
    const name = req.params.name; // Get the name from the route parameter
    res.send(`Hello, ${name}!`);
});

app.get('/user/:id', (req, res) => {
    const id = req.params.id; // Get the user ID from the route parameter
    res.send(`User ID: ${id}`);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
