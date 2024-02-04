import React from "react";

const List = ({datos})=> {

    return(
        <>
        <div>
            <h2 className="text-center">Comentarios</h2>
            {datos.map((clave,valor)=>(
                <div key={valor}>
                    <p className="text-center">
                        {clave.usuario}: {clave.comentario}
                    </p>
                </div>
            ))}
        </div>        
        </>
    )
};

export default List