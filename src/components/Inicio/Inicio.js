import Carrusel from '../Carrusel/Carrusel';
import EnlaceContacto from '../EnlaceContacto/EnlaceContacto';
import imagenPlaya from '../../img/playa2.jpg'
import TextAnimation from '../TextAnimation1/TextAnimation1';

const Inicio = () => {
    
    return (
        <div className='Inicio'>
            <Carrusel/>
            <TextAnimation/>
            
            <div className='presentacionInicio'>
                <h2 className='fraseInicio'>Al final, no os preguntarán qué habéis sabido, sino qué habéis hecho.</h2>
                <h3 className='tituloInicio'>Titulo de inicio</h3>
                <p className='textoInicio'>
                    Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion
                    Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion
                    Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion
                </p> 
            </div>
           
            <EnlaceContacto imageSrc={imagenPlaya} />
        </div>  
    );
}

export default Inicio;
