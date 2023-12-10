
//arreglo es una coleccion de datos dentro de una variable

const arreglo = new Array(100);
arreglo.push(20)

console.log(arreglo);
//-----------------------------------------------

// el push modifica el arreglo principal es mejo usa el operador 
const arreglo2 = []; 
arreglo2.push(1)
arreglo2.push(2)
arreglo2.push(3)
arreglo2.push(4)
arreglo2.push(5)

console.log(arreglo2);
//--------------------------------------------
let arreglo3 = arreglo;
arreglo3.push(6);

console.log(arreglo);
console.log(arreglo3);  

//--------------------------------------------

let arreglo4 = [...arreglo2, 6]; //con el operador Spread añadimos la posicion al arreglo.
console.log(arreglo4);

//-----------------------------------------------
const arreglo5 = arreglo2.map(function(numero) {
  //return arreglo2 //crea un arreglo de arreglo.
  return numero * 5;
});
console.log(arreglo5);

//--------------------------------------------
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));


