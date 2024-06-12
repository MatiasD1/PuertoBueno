import Encabezado from '../Encabezado/Encabezado.js';
import Mapa from '../Mapa/Mapa.js'
import Swiper from '../Swiper/Swiper.js';
import Swiper2 from '../Swiper2/Swiper2.js';
import fotoEncabezado from '../../img/arena.png'; 

const Ubicacion = () => {
    return (
        
        <div className='ubicacion'>
            <Encabezado imageSrc={fotoEncabezado} seccion={"Ubicación"} />
            <div className='textoUbicacion'>
                <Swiper2/>
            </div>
            <div className='owlComponenteCarrusel'>

            </div>
            <div className='serviciosCercanos'>
                <Swiper/>
            </div>
            <div className='mapaUbicacion'>
                <Mapa/>
            </div>
            
        </div>
    );
}

export default Ubicacion;
