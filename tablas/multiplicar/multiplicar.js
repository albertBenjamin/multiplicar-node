//requireds
const fs = require('fs');

//limite puede tener un valor por defecto
//listar = (base, limite =10)

listar = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('no es un numero');
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base}* ${ i} = ${base * i} \n`;
        }
        resolve(data);
    });
}


crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('no es un numero');
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base}* ${ i} = ${base * i} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`tabla-${base}.txt`);
        });
    });
}



module.exports = {
    crearArchivo,
    listar
}