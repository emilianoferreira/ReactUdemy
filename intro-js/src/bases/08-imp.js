// Con la palabra reservada exporto los datos del archivo heroes.js
import { heroes } from "../data/heroes.js"
//
//
const showHeroes = () => { return heroes } // funcion que desglosa el objeto del archivo

export const getHeroeById = ( id ) => { return heroes.find( ( heroe )  =>  heroe.id === id)}
// funcion que recibe un id y devuelve el heroe con ese id. 
// .find busca dentro del arreglo heroes, el heroe con el id del argumento

export const getHeroeByOwner = ( owner ) => { return heroes.filter( heroe  => heroe.owner === owner );}
//funcion que devuelve los heroes que posean esta caracteriscta, con el finder que puede incluir

// En este caso los console logs estan por fuera de la funcion, bien se pueden incluir en el cuerpo de la misma
// cosa que solo llamandolos se pueda visualizar el resultado 


// console.log(showHeroes());
// console.log(getHeroeById(2));
// console.log( getHeroeByOwner('DC') );

