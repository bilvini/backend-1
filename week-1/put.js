const express = require('express');
const app = express();
const PORT = process.env.PORT || 3006;

// Middleware to parse JSON request bodies
app.use(express.json());

// Example PUT route to handle incoming JSON data
app.put('/update', (req, res) => {
    const data = req.body; 
    res.json({ message: "Data updated" });
});

// Other routes...
app.get('/hello', (req, res) => {
    res.json({ message: "Hello, world!" });
});

app.get('/goodbye', (req, res) => {
    res.send('Goodbye, Express!');
});

app.get('/greet/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Hello, ${name}!`);
});

app.get('/user/:id', (req, res) => {
    const id = req.params.id;
    res.send(`User ID: ${id}`);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
