import { getHeroeById, getHeroeByOwner } from "./bases/08-impor-expor";

// const promesa = new Promise ((resolve, reject) => {

//     setTimeout(() => {
        
//         const heroe = getHeroeById(5);
 
//         //console.log(heroe);
//         resolve(heroe);
//        //reject(heroe)
//        // console.log('2 segundos despues');

//        reject('No se encontro el heroe')
//     }, 2000);

// });

// promesa.then((heroe) =>{
//     console.log( 'heroe', heroe );
// }).catch( error => console.warn(error));

//===================================

const getHeroeByIdAsync = (id) => {
    return new Promise ((resolve, reject) => {

        setTimeout(() => {
            
            const heroe = getHeroeById(id);
            if (heroe) {
                //reject(heroe)
                resolve(heroe);
                //console.log(heroe);
            }else {
                reject('No se encontro el heroe')
            }
            
           
           
            
           //console.log('2 segundos despues');
    
           
        }, 2000);
    
    });
   
}

getHeroeByIdAsync(1)
// .then (heroe => console.log('heroe', heroe))
// .catch(error => console.warn(error));

.then (console.log)
.catch(console.warn);