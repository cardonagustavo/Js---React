

console.log("Gus");

const persona = {
  nombre: 'Gus',
  apellido: 'Cardona',
  profecion: 'Movil Dev',
  direccion: {
    ciudad: 'Dubai',
    zip: 45.2222555,
    lat: 8520.0000,
    long: 79885.32,
  }
};

console.table({persona});  
console.log({persona});
//---------------------------------
const persona2 = persona; 
persona2.nombre= 'Jose'; //asignacion de referencia, no es correcto ya que modifica la referencia no muta el estado, lo ideal es crear un nuevo objeto y poner todas las propiedades con el operador Spread(...)
console.log(persona);
console.log(persona2);

//---------------------------------
const persona3 = {...persona};
persona3.nombre = 'Andrew';

console.log(persona);
console.log(persona3);

//-----------------------------------