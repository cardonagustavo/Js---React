import './Home.css';
import { obtenerTokenSpotify } from '../services/servicioSpotify';
import { useEffect } from 'react';
import { useState } from 'react';
import { obtenerCanciones } from '../services/servicioCanciones';




export function Home() {

    const [carga, setCarga] = useState(true);
    const [canciones, setCanciones] = useState(null);


    useEffect(function () {
        obtenerTokenSpotify().then(function (repuestaToken) {
            obtenerCanciones(repuestaToken).then(function (respuestaCanciones) {
                console.log(respuestaCanciones)
                setCarga(false)
                setCanciones(respuestaCanciones.tracks)
            })
        })
    }, []);


    if (carga) {
        return (
            <>
                <h1>Cargando...</h1>
            </>
        )

    } else {
        return (
            <>
                <section className='banner' >

                </section>
                <section className='container' >
                    <div className='row row-cols-1.rows-cols-md-5'>
                        {
                            canciones.map(function (cancion) {
                                return (
                                    <>
                                        <div className="col">
                                            <div className="card h-100 ahadow" >
                                                <h3>{cancion.name}</h3>
                                                <audio src={cancion.preview_url} controls className='w-100'></audio>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </section>
            </>
        )
    }

}