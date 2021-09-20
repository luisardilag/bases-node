const fs = require('fs');
colors = require('colors');


const crearArchivo = async(base=1, listar=false, hasta=10) => {
    try {     

        let salida = '';
    
        for(let i = 1; i <= hasta; i++) {
            salida += `${base} ${'x'.green } ${i} ${'='.green } ${base * i}\n`;
        }

        if (listar) {
            console.log(`=================`.green);
            console.log(`TABLA DEL ${base}`.blue);
            console.log(`=================`.green);

            console.log(salida);
        }
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt` ;

    } catch (error) {
        throw error
    }
}

module.exports = { crearArchivo }