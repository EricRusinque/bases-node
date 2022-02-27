const fs = require('fs');


const createFile = async(base = 5) => {
    
    try {

        console.log('=======================');
        console.log('  Tabla del:', base);
        console.log('=======================');
        
        let output = '';
    
    
        for (let i = 1; i <= 10; i++) {
            output += `${base} x ${i} =  ${base * i}\n`;
        }
    
        console.log(output);
    
        fs.writeFileSync(`tabla-${base}.txt`, output);
    
    
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

