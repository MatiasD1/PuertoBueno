import Carrusel from '../Carrusel/Carrusel';
import EnlaceContacto from '../EnlaceContacto/EnlaceContacto';
import imagenPlaya from '../../img/playa2.jpg'
import TextAnimation from '../TextAnimation1/TextAnimation1';
import GaleriaInicio from '../GaleriaInicio/GaleriaInicio'; 

const Inicio = () => {
    
    return (
        <div className='Inicio'>
            <Carrusel/>            
            <div className='presentacionInicio'>
                <h2 className='fraseInicio'>Una frase aleatoria para rellenar,<br/> el espacio del contenedor de inicio.</h2>
                <h3 className='tituloInicio'>Titulo de inicio</h3>
                <p className='textoInicio'>
                    Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion
                    Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion
                    Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion
                </p> 
            </div>
            <GaleriaInicio/>       
            <EnlaceContacto imageSrc={imagenPlaya} />
        </div>  
    );
}

export default Inicio;
