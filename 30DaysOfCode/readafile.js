var filesystem = require('fs');
var filename = 'data.txt';
var content = filesystem.readFileSync(filename);
console.log(content);