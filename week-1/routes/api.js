// routes/api.js
const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();

// Serve the HTML file from the / route
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html')); // Adjust the path as necessary
});

// Example PUT route to handle incoming JSON data with validation
router.put('/update',
    body('name').isString().notEmpty(), // Validate that 'name' is a non-empty string
    body('age').isInt({ min: 0 }), // Validate that 'age' is a positive integer
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() }); // Respond with validation errors
        }

        const data = req.body; // Access the incoming JSON data
        res.json({ message: "Data updated", data });
    }
);

// Other routes...
router.get('/hello', (req, res) => {
    res.json({ message: "Hello, world!" });
});

module.exports = router;
