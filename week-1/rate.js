const express = require('express');
const path = require('path'); // Import the path module
const cors = require('cors'); // Import the CORS module
const rateLimit = require('express-rate-limit'); // Import the rate-limit module
const app = express();
const PORT = process.env.PORT || 3000;

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

// Example PUT route to handle incoming JSON data
app.put('/update', (req, res) => {
    const data = req.body; // Access the incoming JSON data
    res.json({ message: "Too many requests, please try again later." });
});

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
