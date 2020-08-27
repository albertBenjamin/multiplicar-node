const { crearArchivo, listar } = require('./tablas/multiplicar/multiplicar');

const argv = require('./config/yargs').argv;


let comando = argv._[0];

switch (comando) {
    case 'listar':
        listar(argv.base, argv.limite).then(resolve => console.log(resolve)).
        catch(reject => console.log(reject));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:${archivo}`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('comando no reconocido');
}

// let parametro = process.argv[2];

// let base = parametro.split('=')[1];