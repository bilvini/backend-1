const express = require('express');
const cors = require('cors'); // Import the CORS module
const rateLimit = require('express-rate-limit'); // Import the rate-limit module
const compression = require('compression'); // Import the compression module
const routes = require('./routes/api'); // Import the routes module
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

// Compression middleware
app.use(compression()); // Enable compression

// Middleware to parse JSON request bodies
app.use(express.json());

// Use the routes defined in the api.js module
app.use('/api', routes); // Prefix your routes with /api

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
