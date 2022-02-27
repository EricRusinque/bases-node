const { createFile } = require('./helpers/multiplicar');
const argv = require('yargs')
                .options('b',{
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                })
                .option('l',{
                    alias: 'list',
                    type: 'boolean',
                    demandOption: true,
                    default: false,
                })
                .check( ( argv, options ) => {
                    if( isNaN(argv.b)){
                        throw 'The base must be a number'
                    }
                    return true
                })
                .argv;  


console.clear();


console.log(argv);


// const base = 4;

createFile( argv.b, argv.l )
    .then( nameFile => console.log(nameFile,'Created'))
    .catch( err => console.log(err) );