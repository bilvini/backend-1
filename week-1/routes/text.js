// routes/api.js
const express = require('express');
const router = express.Router();

// Example GET route that responds with a JSON object
router.get('/json-response', (req, res) => {
    const responseObject = {
        message: "This is a JSON response",
        data: {
            key1: "value1",
            key2: "value2"
        }
    };
    res.json(responseObject); // Send the JSON response
});

// Other routes...

module.exports = router;
