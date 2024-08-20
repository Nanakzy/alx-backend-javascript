const readDatabase = require('../utils');

class StudentsController {
    static async getAllStudents(req, res) {
        try {
            const students = await readDatabase(process.argv[2]);
            res.status(200).send(formatStudentsList(students));
        } catch (error) {
            res.status(500).send('Cannot load the database');
        }
    }

    static async getAllStudentsByMajor(req, res) {
        const { major } = req.params;
        if (major !== 'CS' && major !== 'SWE') {
            res.status(500).send('Major parameter must be CS or SWE');
            return;
        }

        try {
            const students = await readDatabase(process.argv[2]);
            const list = students[major] || [];
            res.status(200).send(`List: ${list.join(', ')}`);
        } catch (error) {
            res.status(500).send('Cannot load the database');
        }
    }
}

function formatStudentsList(students) {
    let output = 'This is the list of our students\n';
    Object.keys(students).sort().forEach((field) => {
        const list = students[field];
        output += `Number of students in ${field}: ${list.length}. List: ${list.join(', ')}\n`;
    });
    return output.trim();
}

module.exports = StudentsController;
