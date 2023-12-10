
console.log("Gus");
//Desestructuracion
//asignacion desestructurante
//La desestructuración en React se refiere a la capacidad de extraer valores de objetos y arrays de una manera más concisa y legible. Puedes utilizar la desestructuración en React en varios contextos, como al trabajar con props, state o context. 

const persona = {
    nombre: 'Tonny',
    edad: 45,
    clave: 'Ironman'
};

const {nombre, edad, clave} = persona;

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave);

console.log(nombre);
console.log(edad);
console.log(clave);
//==========================================

const persona2 = {
    nombre2: 'Bruce Banner',
    edad2: 50,
    clave2: 'gigante'
}

const returnPersona2 = ({nombre2, edad2, clave2, nick = 'Hulk'}) => {
    console.log (edad2, clave2, nombre2, nick);

    return {
        nombreClave: clave2,
        anios: edad2,
        coordenadas: {
            lat: 78945,
            log: 12654
        }
    }
}

returnPersona2(persona2);
const avenger = returnPersona2(persona2);
console.log(avenger);


const {nombreClave, anios, coordenadas: {lat, log}} = avenger;

console.log(nombreClave);
console.log(anios);
console.log(lat, log);


