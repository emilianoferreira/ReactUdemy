import { getHeroeById } from "./bases/08-imp";

const promesa  = new Promise( (resolve, reject) =>{
    setTimeout(() => {
        const heroe = getHeroeById(2);
        resolve( heroe )
        reject('no aparecio')
    }, 2000)
});

//resolve > callback que se ejecuta que todo paso ok, reject cuando hubo error

//promesa.then --> cuando la promesa se hizo correctamente es el reolve
promesa.then( ( heroe ) =>{
    console.log( heroe )
})
.catch( err => console.warn( err ));
