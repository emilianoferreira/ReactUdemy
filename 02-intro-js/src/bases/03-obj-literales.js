// Objetos literales

const persona = {
    nombre: 'Emiliano',
    apellido: 'Ferreira',
    edad: 23,
    dirrecion:{
        ciudad: 'Montevideo',
        zip: 11011,
    }
};

//console.table(persona);

const persona2 = {...persona}; 
// los ... toma la info del objeto indicado y la replica en el nuevo objeto creado
// se modifica el nombre del nuevo objeto
persona2.nombre = 'Jose';

console.log(persona);
console.log(persona2);