const configs={
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', configs)

    .command('crear', 'Genera un archivo con la tabla de multiplicar', configs)

    .help()
    .argv;

    module.exports ={
        argv
    }