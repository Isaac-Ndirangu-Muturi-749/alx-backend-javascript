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
      let result = `Number of students: ${totalStudents}\n`;

      for (const [field, names] of Object.entries(fields)) {
        result += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
      }

      console.log(`${result.trim()}`);

      // Resolve the promise with the result string
      resolve(result.trim()); // Trim to remove any trailing new line
    });
  });
}

module.exports = countStudents;
