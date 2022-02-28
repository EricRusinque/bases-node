const fs = require('fs');
const colors = require('colors');



const createFile = async(base = 5, list, to = 10) => {
    
    try {

        let output = '';
        let consol = '';
        
        
        for ( i = 1; i <= to; i++) {
            output += `${ base } x ${ i } = ${ base * i }\n`;
            consol += `${ base } ${ 'x'.green } ${i} ${'='.green  } ${ base * i }\n`;
        }
        
        if( list ) {
            
            console.log('======================='.green);
            console.log('  Tabla del:'.blue,colors.blue(base) );
            console.log('======================='.green);
                    
            console.log(consol);
        }
    
        fs.writeFileSync(`./output/tabla-${base}.txt`, output);
    
    
        return `Tabla-${base}.txt`;
        
    } catch (error) {

        throw error
        
    }
    
 
 
}


/* With new Promise */

// const createFile = async(base = 5) => {
    
//     return new Promise( (resolve, reject ) => {

//         console.log('=======================');
//         console.log('  Tabla del:', base);
//         console.log('=======================');
        
//         let output = '';
    
    
//         for (let i = 1; i <= 10; i++) {
//             output += `${base} x ${i} =  ${base * i}\n`;
//         }
    
//         console.log(output);
    
//         fs.writeFileSync(`tabla-${base}.txt`, output);
    
    
//         resolve(`Tabla-${base}.txt creado`);
        
//     });
    
    
// }

module.exports = {
    createFile
}

