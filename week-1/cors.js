const express = require('express');
const path = require('path'); 
const cors = require('cors'); 
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
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
app.use((err, req, res, next) => {
    console.error(err.stack); 
    res.status(500).json({ message: "An error occurred!" });
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
