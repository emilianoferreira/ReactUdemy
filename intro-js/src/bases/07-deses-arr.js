const personajes = [ 'Goku', ' Veggetta', 'Gohan'];

const [ p1, ...p2 ] = personajes; 

console.log( p1, p2);

// SEPARADOR
    console.log(' '); 
    console.log('1-********'); 
    console.log(' '); 
// SEPARADOR



const devuelvArr = ()=>{
    return [123123, 'cosas'];
} 

const [uno, dos] = devuelvArr();
console.log(uno, dos)



// SEPARADOR
console.log(' '); 
console.log('2-********'); 
console.log(' '); 
// SEPARADOR



    //TAREA
//1. El primer valor del arr se llamara nombre 
//2. el 2do se llamara setNombre
const usaState= (valor) => {
    return [ valor, ()=> { console.log ('Hola mundo')}]
}

const arr = usaState('goku');
console.log(arr)
const llama = arr[1]();

console.log(' '); 

const [nombre, setNombre] = usaState('gku')
console.log( nombre, setNombre/* expresion literal de la funcion */ );
setNombre(); // llamo la funcion que guarde en setNombre