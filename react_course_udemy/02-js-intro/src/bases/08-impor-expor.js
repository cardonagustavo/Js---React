import { heroes } from '../data/heroes';



const getHeroeById = (id) => {
    return heroes.find((heroes) => heroes.id ===  id);
}
console.log(getHeroeById(2));

//====================================

const getHeroeByOwner = (owner) => {
    return heroes.filter((heroes) => heroes.owner === owner)
}

console.log(getHeroeByOwner('DC'));
console.log(getHeroeByOwner('Marvel'));

