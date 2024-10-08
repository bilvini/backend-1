const express = require('express');
const app = express();
const PORT = process.env.PORT || 3006;
app.use(express.json());
app.post('/submit', (req, res) => {
    const data = req.body;
    res.json({ message: "Data received!", receivedData: data });
});
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
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
