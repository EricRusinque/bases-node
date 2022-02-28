const argv = require('yargs')
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Is the base of the multiplication table'
    })
    .option('l',{
        alias: 'list',
        type: 'boolean',
        demandOption: true,
        default: false,
        describe: 'Show the table in the console'
    })
    .option('t',{
        alias: 'to',
        type: 'number',
        demandOption: false,
        describe: 'Is how far what number goes the table'
    })
    .check( ( argv, options ) => {
        if( isNaN(argv.b)){
        throw 'The base must be a number'
        }
        return true
    })
    .argv;

module.exports = argv;