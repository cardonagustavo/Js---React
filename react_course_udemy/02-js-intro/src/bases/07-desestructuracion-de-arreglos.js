
console.log("Gus");

const personajes = ['thor', 'hulk', 'viuda negra'];

const [dios] = personajes;
const [ , gigante] = personajes;
const [ , , scar] = personajes;
console.log(dios, gigante, scar);

const returArray = () => {
    return ['ABC', 123]
}

const arr = returArray();
console.log(arr);

const [leters, numbers] = returArray();
console.log(leters, numbers);

//=====================================================


const usestate = (valor) => {
    return [valor, () => {console.log('Infinity War')}]; 
}

const [nombre, setNombre] = usestate('Iron Man')
console.log(nombre);
setNombre();

