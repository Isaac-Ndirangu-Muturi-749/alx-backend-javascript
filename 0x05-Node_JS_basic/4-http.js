const http = require('http');

const PORT = 1245;
const hostname = '127.0.0.1';

const app = http.createServer((req, res) => {
  // Set the response header
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // Send the response body
  res.end('Hello Holberton School!');
});

// Start the server and listen on the specified port
app.listen(PORT, hostname, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
