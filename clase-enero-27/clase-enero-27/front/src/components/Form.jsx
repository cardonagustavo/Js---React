import React, {useState} from 'react';

const Form = ({enviarFormulario})=> {
    const [usuario, setUsuario] = useState('');
    const [comentario, setComentario] = useState('');

    const enviar = (evento)=>{
        evento.preventDefault();
        enviarFormulario({usuario, comentario});
        setUsuario('');
        setComentario('');
    }

    return(
        <div className='container justify-content-center align-items-center border border-black mt-3'>
            <form onSubmit={enviar}>
                <h1 className='text-center'>FORMULARIO</h1>
                <div className="mb-3">
                    <label className="form-label">Usuario</label>
                    <input type="text" className="form-control" value={usuario} onChange={(evento)=>setUsuario(evento.target.value)}/>
                    </div>
                    <div className="mb-3">
                    <label className="form-label">Comentarios</label>
                    <textarea className="form-control" rows="3" value={comentario} onChange={(evento)=>setComentario(evento.target.value)}></textarea>
                    <button type='sumbit' className='btn btn-success mt-3'>Enviar Comentario</button>
                </div>
            </form>
        </div>
    )
    
};

export default Form;