const express = require('express');

const app = express();
const PORT = 1245;

// Handle requests to the root endpoint
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Handle all other endpoints
app.use((req, res) => {
  res.status(404).send(`<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<title>Error</title>\n</head>\n<body>\n<pre>Cannot GET ${req.originalUrl}</pre>\n</body>\n</html>`);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
