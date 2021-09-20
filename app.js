
/* Requerir Paquetes o Módulos */
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');


/* Limpia la Consola */
console.clear();

    
crearArchivo( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado!'))
    .catch( err => console.log(err));