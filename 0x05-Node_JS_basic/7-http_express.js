const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const PORT = 1245;

// Handle requests to the root endpoint
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Handle requests to the /students endpoint
app.get('/students', async (req, res) => {
  const filePath = process.argv[2]; // Get the file path from command line arguments

  if (!filePath) {
    res.status(400).send('No database file provided');
    return;
  }

  try {
    const result = await countStudents(filePath);
    res.send(`This is the list of our students\n${result.join('\n')}`);
  } catch (error) {
    res.status(500).send(error.message);
    res.send(`This is the list of our students\n${error.message}`);
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
