

console.log("Gus");


const  nombre = 'gus';
const apellido = 'cardona';

const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto2 = `${nombre} ${apellido}`;

console.log(`${nombreCompleto}
${nombreCompleto2}`);

function getSaludo(nombre) {
  return 'hola' + nombre
}

console.log(`este saludo:  ${getSaludo(nombreCompleto)}`);