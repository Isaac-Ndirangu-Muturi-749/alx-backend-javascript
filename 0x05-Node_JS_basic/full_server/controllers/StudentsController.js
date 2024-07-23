const readDatabase = require('../utils');

class StudentsController {
  static async getAllStudents(req, res) {
    const databaseFile = process.argv[2];
    const msg = 'This is the list of our students\n';

    try {
      const fields = await readDatabase(databaseFile);
      let response = msg;
      for (const [field, students] of Object.entries(fields).sort()) {
        response += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
      }
      res.status(200).send(response.trim());
    } catch (error) {
      res.status(500).send(`${msg}${error.message}`);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const databaseFile = process.argv[2];
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const fields = await readDatabase(databaseFile);
      const students = fields[major] || [];
      res.status(200).send(`List: ${students.join(', ')}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;
