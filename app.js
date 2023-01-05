const { crearArchivoDeMultiplicar } = require('./helpers/multiplicar.js'); 
const argv = require('./config/yargs');

require('colors');

console.clear();

crearArchivoDeMultiplicar( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log(nombreArchivo.america, 'creado') )
    .catch( err => console.log(err) );

