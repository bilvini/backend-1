const express = require('express');
const path = require('path'); 
const app = express();
const PORT = process.env.PORT || 3007;
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});
app.use(express.json());
app.use(express.static('public'));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html')); 
});
app.put('/update', (req, res) => {
    const data = req.body; 
    res.json({ message: "Data updated" });
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
app.use(express.static('public'));
 {
    console.error(err.stack); 
    res.status(500).json({ message: "An error occurred!" }); 

 }
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
