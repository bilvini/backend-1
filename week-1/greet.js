const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.json());
app.get('/hello', (req, res) => {
    res.send('Hello, Express!');
});
app.get('/goodbye', (req, res) => {
    res.send('Goodbye, Express!');
});
app.post('/echo', (req, res) => {
    res.json(req.body); 
});
app.get('/greet', (req, res) => {
    const name = req.query.name || 'World';
    res.send(`Hello, ${name}!`);
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
