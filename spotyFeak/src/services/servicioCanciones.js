export async function obtenerCanciones(token){

    // Preparo (Pa'onde voy, a hacer que, conque datos)
    const URL_SONGS_SERVICES="https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg/top-tracks?market=us";
    

    const PETICION_SONGS={
        method:"GET",
        headers: {"Authorization":token}
        } 
    

    //Iniciar la comunicacion e ir hasta el back con la peticion 
    let respuestaServicio=await fetch(URL_SONGS_SERVICES, PETICION_SONGS);
    let respuestaCanciones=await respuestaServicio.json()



    //Entrega resultado al componente para mostrar al usuario
    return respuestaCanciones
    
}

 