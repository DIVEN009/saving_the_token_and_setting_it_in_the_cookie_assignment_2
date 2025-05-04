// server.js

const express = require('express');
const path = require('path');
const encrypt = require('./encrypt'); // Import encrypt function

const app = express();
const PORT = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Route to generate the JWT token
app.post('/generate-token', (req, res) => {
  const payload = req.body;
  const secret = 'your-secret-key'; // Use an environment variable in production
  const token = encrypt(payload, secret);
  res.json({ token });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
