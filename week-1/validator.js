const express = require('express');
const path = require('path'); // Import the path module
const cors = require('cors'); // Import the CORS module
const rateLimit = require('express-rate-limit'); // Import the rate-limit module
const compression = require('compression'); // Import the compression module
const { body, validationResult } = require('express-validator'); // Import express-validator
const app = express();
const PORT = process.env.PORT || 3004;

// Middleware to enable CORS
app.use(cors());

// Rate limiting middleware
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
    message: "Too many requests, please try again later."
});

// Apply the rate limiting middleware to all requests
app.use(limiter);

// Compression middleware
app.use(compression()); // Enable compression

// Middleware to log request method and URL
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next(); // Call the next middleware or route handler
});

// Middleware to parse JSON request bodies
app.use(express.json());

// Serve static files from the public directory
app.use(express.static('public'));

// Serve the HTML file from the / route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html')); // Adjust the path as necessary
});

// Example PUT route to handle incoming JSON data with validation
app.put('/update',
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
app.get('/hello', (req, res) => {
    res.json({ message: "Hello, world!" });
});

// Error-handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack); // Log the error stack trace
    res.status(500).json({ message: "An error occurred!" }); // Respond with a 500 status and an error message
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
