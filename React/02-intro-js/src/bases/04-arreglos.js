// Arreglos en js: coleccion de informacion en una misma variable 

//const arreglo = new Array(); // posible forma de crear un arreglo

const arreglo = [1,2,3,4];
// arreglo.push(1);
// arreglo.push(2);
// arreglo.push(3); // el metodo push modifica el objeto original
// para insertar ingo vamos a usar el operador 


// ### uso el operador spreed para extraer la info del anterior arreglo y 
//     "pushear" el nuevo elemento
let arreglo2 = [...arreglo, 5];
//arreglo2.push(5);

// .map crea un nuevo array con los resultados de la funciona aplicada a cada elemento
const arreglo3 = arreglo2.map( function(num){
    return num *2;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);