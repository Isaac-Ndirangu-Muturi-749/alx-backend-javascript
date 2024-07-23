const http = require('http');
const countStudents = require('./3-read_file_async');

// Create the HTTP server
const PORT = 1245;
const hostname = '127.0.0.1';

const app = http.createServer((req, res) => {
  const { url } = req;

  if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (url === '/students') {
    const filePath = process.argv[2]; // Get the file path from command line arguments
    if (!filePath) {
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.end('No database file provided');
      return;
    }
    countStudents(filePath)
      .then((data) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`This is the list of our students\n${data.join('\n')}`);
      })
      .catch((error) => {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(`This is the list of our students\n${error.message}`);
      });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

// Start the server
app.listen(PORT, hostname, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
