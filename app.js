const { createFile } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
require('colors');


// console.clear();


createFile( argv.b, argv.l )
    .then( nameFile => console.log(nameFile.rainbow,'Created'))
    .catch( err => console.log(err) );