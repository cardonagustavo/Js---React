
console.log("Gus");

const saludar = function (nombre) {
    return `Hola, ${nombre}`
}

const saludar2 = (nombre2) => {
    return `Hola, ${nombre2}`
}

const saludar3 = (nombre3) => `Hola, ${nombre3}`;
const saludar4 = () => `Gus4`;


console.log(saludar('Gus'));
console.log(saludar2('Gus2'));
console.log(saludar3('Gus3'));
console.log(saludar4('Gus3'));

//================================================

const getUser = () => {
    return {
        id: 'erty78523',
        userName: 'Gus_123456789'
    }
}
//En esta función, se utiliza la sintaxis de bloque para la declaración de la función flecha. El cuerpo de la función está rodeado por llaves {}, y dentro de ese bloque, se usa la palabra clave return para devolver el objeto.

console.log(getUser());


//================================================
const getUser2 = () => ({ 
    
        id: 'aadfg8523',
        userName: 'Gus_12ytre'
    
});

//En esta función, se utiliza la sintaxis de retorno implícito. En lugar de utilizar llaves {} para rodear el cuerpo de la función, se utilizan paréntesis () alrededor del objeto que se va a devolver. Cuando se utilizan paréntesis de esta manera, se indica que la expresión dentro de ellos se evaluará como un solo valor, en este caso, el objeto.

console.log(getUser2());

//================================================

const getUserActiv = (nombre) => ({ 

        id: 78946521,
        username: nombre

});

const userActive = getUserActiv('Gustavo');
console.log(userActive);