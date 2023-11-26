export async function obtenerTokenSpotify(){

    // Preparo (Pa'onde voy, a hacer que, conque datos)
    const URL_TOKEN_SERVICE="https://accounts.spotify.com/api/token";
    const METODO_HTTP="POST"
    const CLIENT_ID="25008cfe191843e79e450e566df8030d"
    const CLIENT_SECRET="045dcbf4be9747f194b5e877af688332"
    const GRANT_TYPE="client_credentials"

    const PETICION_TOKEN={
        method:METODO_HTTP
        headers:{
            "Content-Type":"application/x-www-form-urlencoded"
        },body:`gran_type=${GRANT_TYPE}&client_id${CLIENT_ID}&cliente_secret${CLIENT_SECRET}` 
    }

    //Iniciar la comunicacion e ir hasta el back con la peticion
    let respuestaServidor=await fetch(URL_TOKEN_SERVICE,PETICION_TOKEN)
    let tokenrespuesta=await respuestaServidor.json()


    //Entrega resultado al componente para mostrar al usuario
    console.log(tokenrespuesta);
    return tokenrespuesta

}