import './Home.css';
import { obtenerTokenSpotify } from '../services/servicioSpotify';

export function Home() {

    obtenerTokenSpotify()

    return (
        <>
            <section className="banner">

            </section>
        </>
    )

}