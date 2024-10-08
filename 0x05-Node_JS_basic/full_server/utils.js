const fs = require('fs').promises;

async function readDatabase(filePath) {
    try {
        const data = await fs.readFile(filePath, 'utf-8');
        const lines = data.trim().split('\n').slice(1); // Skip header line
        const students = {};

        lines.forEach((line) => {
            const [firstname, , , field] = line.split(',');
            if (!students[field]) students[field] = [];
            students[field].push(firstname);
        });

        return students;
    } catch (error) {
        throw new Error('Cannot load the database');
    }
}

module.exports = readDatabase;
