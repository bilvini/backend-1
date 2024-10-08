const express = require('express');
const app = express();
app.use((req, res) => {
    res.status(404).send('Page not found');
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});