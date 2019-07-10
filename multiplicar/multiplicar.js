const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('====================='.green);
    console.log(`tabla del ${ base} hasta ${limite}`.red);
    console.log('====================='.blue);


    for (let i = 1; i <= limite; i++) {
        console.log(`Base: ${base} * ${i} = ${base * i} `);
    }
}


crearArchivo = (base, limite =10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es numero`);
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i} \n`;
        }

        fs.writeFile(`tablas/tabla-${ base }-al- ${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${ base }-al-${limite}.txt`.cyan)
        });
    });
}
module.exports = {
    crearArchivo,
    listarTabla
}