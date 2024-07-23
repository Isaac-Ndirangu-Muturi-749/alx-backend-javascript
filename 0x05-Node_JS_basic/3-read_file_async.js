const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        return reject(new Error('Cannot load the database'));
      }

      // Process the file content
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const students = lines.slice(1); // Skip the header
      const fields = {};

      // Organize students by field
      students.forEach((student) => {
        const [firstname, , , field] = student.split(',');
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      });

      const totalStudents = students.length;

      // Build the result string
      let message = `Number of students: ${totalStudents}`;
      console.log(message);

      const result = [];
      result.push(message);

      for (const [field, names] of Object.entries(fields)) {
        message = `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`;
        console.log(message);
        result.push(message);
      }

      // Resolve the promise
      resolve(result);
    });
  });
}

module.exports = countStudents;
