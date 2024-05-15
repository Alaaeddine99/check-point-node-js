

const fs = require('fs');


fs.readFile('welcome.txt', 'utf8', (err, data) => {
    if (err) {
        return console.error('Error reading the file:', err);
    }
    console.log('Content of "welcome.txt":', data);
});