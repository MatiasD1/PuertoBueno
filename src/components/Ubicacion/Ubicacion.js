import Encabezado from '../Encabezado/Encabezado.js';
import Mapa from '../Mapa/Mapa.js'
import Swiper from '../Swiper/Swiper.js';
import Swiper2 from '../Swiper2/Swiper2.js';
import fotoEncabezado from '../../img/arena.png'; 
import MapaFoto from '../../img/Mapa.png';
const Ubicacion = () => {
    return (
        
        <div className='ubicacion'>
            <Encabezado imageSrc={fotoEncabezado} seccion={"Ubicación"} />
            <div className='presentacionUbicacion'>
                <p className='tituloUbicacion'>Frase</p>
                <p className='fraseUbicacion'>TextoChico TextoChico TextoChico TextoChico TextoChico TextoChico</p>
                <p className='textoUbicacion'>Texto largo Texto largo Texto largo Texto largo Texto largo Texto Texto largo Texto largo Texto largo Texto largo Texto largo Texto largo Texto largo Texto largo Texto largo Texto largo</p>
            </div>
            <div className='owlComponenteCarrusel'>
            <Swiper2/>
            </div>
            <div className='serviciosCercanos'>
                <h2 className='tituloSwiper'>Puntos de interés</h2>
                <Swiper/>
            </div>     
            <div className='mapaUbicacion'>
                <h2 className='tituloMapa'>Mapa</h2>
                <img src={MapaFoto} alt="Mapa"/>
            </div>
            
        </div>
    );
}

export default Ubicacion;
