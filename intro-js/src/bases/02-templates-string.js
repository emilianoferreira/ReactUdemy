const nombre = 'Emiliansso';
const apellido = 'Ferreira';

//const nombreCompleto = nombre + ' ' + apellido;

//Utilizacion de un template screen con ${ JS Code}
// backtick = `` Strings literales, respeta todos los detalles
const nombreCompleto = `${nombre}    ${apellido}`

console.log(nombreCompleto);

function getSaludos(nombre){
    return 'Hola ' + nombre;
}

console.log(`Este es un texto: ${ getSaludos(nombreCompleto) }`);