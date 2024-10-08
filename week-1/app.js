const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.get('/hello', (req, res) => {
    res.send('Hello, Express!');
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
