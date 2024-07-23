const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const PORT = 1245;

const args = process.argv.slice(2);
const filePath = args[0];


// Handle requests to the root endpoint
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Handle requests to the /students endpoint
app.get('/students', async (req, res) => {
  try {
    const result = await countStudents(filePath);
    res.send(`This is the list of our students\n${result.join('\n')}`);
  } catch (error) {
    res.send(`This is the list of our students\n${error.message}`);
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
