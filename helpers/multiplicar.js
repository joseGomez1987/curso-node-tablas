const fs = require('fs');

const colors = require('colors');

const crearArchivoDeMultiplicar = async(base = 5, listar = false, hasta = 10 ) => {

    try {
        
        let salida = '';
        let consola = '';

        for( let i = 1; i <= hasta; i++ ) {

            salida  += `${ base } X ${ i } = ${ base * i }\n`;
            consola += `${ base } ${'X'.red} ${ i } ${'='.green} ${ base * i }\n`;

        }

        if( listar ) {
            console.clear();
            console.log('================'.rainbow);
            console.log('   Tabla del'.green, colors.yellow( base ) );
            console.log('================'.rainbow);
            console.log(consola);
        }      
       
        fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida );

        return `tabla-${ base }.txt`;
        
    } catch (err) {
        throw err;
    }
}

module.exports = {
    crearArchivoDeMultiplicar
}