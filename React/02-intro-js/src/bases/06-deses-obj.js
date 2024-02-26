// Desestructuracion
// Asignacion deestructurante -> MDN ver data adicional 

// Creo objeto literal 

const persona1 = {
    nombre: 'Emiliano',
    edad: 28,
    clave: 'ironman',
    rango: 'Soldado' // (*) En caso de no existir toma el definido en los parametros a consultar
}

const persona2 ={
    nombre: ' Julieta ',
    edad: 20, 
    clave: 'gatubela',
}


// De esta forma visualizo independiente los valores de los atributos del objeto
console.log(persona1.nombre);
console.log(persona1.edad);
console.log(persona1.clave);


// SEPARADOR
    console.log(' '); 
    console.log('1-********'); 
    console.log(' '); 
// SEPARADOR



// Asignacion desestructurante, extrae la info de los atributos detallados dentro de {} del = obj
// const {nombre} = persona ES IGUAL A: const nombrePersona = persona.nombre

const { nombre:nombre2, edad, clave, rango = 'Capitan'} = persona1; // El si el obj no tiene el parametro definido, se puede asignar de forma explicita 
/* nombre2 = al atributo nombre de persona | es IGUAL a perona.nombre */
// const perona = dataPersona;

console.log(nombre2); // Esto es igual a persona.nombre
console.log(edad);
console.log(clave);

console.log(nombre2, rango) // impresion de los articulos de forma continua.  (*)



// SEPARADOR
    console.log(' '); 
    console.log('2-********'); 
    console.log(' '); 
// SEPARADOR


//Funcion que devuelve los atributos solicitados
const returnPersona = ({ nombre, edad, clave, rango = 'Capitan'}) => { // para que solicite la info del objeto, DEBE estar entre {}
    return {
        nombreClave: clave,
        anios: edad,
        rango // al estar definido un valor por defecto, con indicarlo ya lo trae
    }
}

const avenger = returnPersona( persona2 ); // seteo el return en la constante

console.log(avenger); // consulto la constante para ver la data solicitada de la funcion



// SEPARADOR
console.log(' '); 
console.log('3-********'); 
console.log(' '); 
// SEPARADOR



const usaContext = ({ nombre, edad, clave, rango = 'Capitan'}) =>  // para que solicite la info del objeto, DEBE estar entre {}
    ({
        nombreClave: clave,
        anios: edad,
        rango, // al estar definido un valor por defecto, con indicarlo ya lo trae
    })


const { nombreClave, anios } = usaContext( persona1 ); // seteo constantes con la info del result de la funciona usaCont

console.log(nombreClave, anios); 




// SEPARADOR
console.log(' '); 
console.log('4-********'); 
console.log(' '); 
// SEPARADOR


const usaContext2 = ({ nombre, edad, clave, rango = 'Capitan'}) =>  // para que solicite la info del objeto, DEBE estar entre {}
    ({
        nombreClave2: clave,
        anios2: edad,
        rango, // al estar definido un valor por defecto, con indicarlo ya lo trae
    //estos atributos no los tiene el obj inicial, son agregados aqui
        latlng:{ //Objeto dentro del objeto
            lat: 123132,
            lng: -32134,
        },
        antiguedad:{
            dias: 32,
            meses: 12
        }
    })


const { nombreClave2, anios2, latlng: { lat, lng }, antiguedad: { dias }} = usaContext2( persona2 ); // Selecciono los valores lat y lng de latlng

// const { lat, lng} = latlng === es lo mismo a lo de arriba, solo que no se solicitaria los valores, solo el objeto

console.log(nombreClave2, anios2); 
console.log(lat, lng); 
console.log(dias); 





