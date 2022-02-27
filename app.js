const { createFile } = require('./helpers/multiplicar');

console.clear();



const base = 4;

createFile(base)
    .then( nameFile => console.log(nameFile,'Created'))
    .catch(err => console.log(err));