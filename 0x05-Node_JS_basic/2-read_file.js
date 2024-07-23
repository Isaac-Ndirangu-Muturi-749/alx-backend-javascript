const fs = require('fs');

function countStudents(path) {
  try {
    // Read the file content synchronously
    const data = fs.readFileSync(path, 'utf8');

    // Split the content by new lines to get each row
    const rows = data.split('\n').filter((row) => row);

    // Remove the header row
    // const header = rows.shift();

    // Initialize an object to store the counts and student names by field
    const fields = {};

    rows.forEach((row) => {
      const student = row.split(',');
      const field = student[3];
      const firstName = student[0];

      if (field in fields) {
        fields[field].count += 1;
        fields[field].names.push(firstName);
      } else {
        fields[field] = { count: 1, names: [firstName] };
      }
    });

    // Log the total number of students
    console.log(`Number of students: ${rows.length}`);

    // Log the number of students and their names by field
    for (const [field, info] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${info.count}. List: ${info.names.join(', ')}`);
    }
  } catch (err) {
    // If there's an error reading the file, throw an error
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
