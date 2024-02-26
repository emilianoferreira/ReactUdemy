// Buena practica setear una constante con la funcion para impedir posibles modifica
// Repaso funciones normales y flecha 

//Funcion tradicional
const saludar = function ( nombre ){
    return `Hola ${ nombre }`
}

//funcion flecha Larga
const saludar2 = ( nombre ) =>{
    return `Hola ${ nombre }`;
}

//Funcion flehca Corta 
const saludar3 = ( nombre ) => `Hola ${ nombre }`;

//Funcion flecha sin argumento, solo el string 
const saludar4 = () => `Hola tu nariz contra mis bolas`;


    //Llamadas a las funciones: 
// console.log(saludar('papi'))
// console.log(saludar2('willy'))
// console.log(saludar3('vegetita'))
// console.log(saludar4())


// Objeto y funcion flecha 

// el return es explicito de que quiere devolver el objeto 
const getUser = ()=>{
    return {
        uid: 'AB21',
        username: 'papichamp2'
    }
}

console.table(getUser());

// con el uso de parentesis, se da el return de lo que este dentro, en este caso el objeto 
const getUser2 = ()=>({

        uid: 'BA12',
        username: 'mamiChamp1'
    
})
// orueab   
console.table(getUser2());
console.log('****TAREA***');

    // Tarea
//1. Transformar a una funcion de flecha
//2. Tiene que retonrar un objeto implicito
//3. Pruebas

    // Funcion original
// function getUsuarioActivo( nombre ) {
//     return {
//         uid: 'A12ADA',
//         username: nombre
//     }
// }

//Funcion Flecha 

const getUsuarioActivo = ( nombre ) =>({
    uid: 'HJKSD32',
    username: nombre
});

const usuarioActivo = getUsuarioActivo('Emiliano');
console.log(usuarioActivo);