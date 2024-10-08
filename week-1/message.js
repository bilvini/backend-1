const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
    res.status(201).send('Created successfully');
});
app.listen(3009, () => {
    console.log('Server listening on port 3009');
});