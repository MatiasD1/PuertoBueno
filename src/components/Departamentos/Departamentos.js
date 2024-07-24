import React, { useState } from 'react';
import GaleriaImagenes from '../GaleriaImagenes/GaleriaImagenes';
import CostaImagen from "../../img/costa.jpeg";
import fotoExterior from "../../img/fotoExterior.jpg";
import fotoPieza from "../../img/fotoPieza.jpg"; 
import fotoDucha from "../../img/Ducha.JPG"
import fotoHabitacion from "../../img/fotoHabitacion.JPG"
import fotoSala from "../../img/fotoSala.jpg"
import living from "../../img/Living.JPG"
import simboloMas from "../../img/icons/simboloMas.png" 
import Servicios from '../Servicios/Servicios.js';
import aloeFooter from '../../img/icons/aloeFooter.png' 
import imagenPlaya from '../../img/playa.jpg'
import EnlaceContacto from '../EnlaceContacto/EnlaceContacto.js';
import Encabezado from '../Encabezado/Encabezado.js'
import fotoEncabezado from '../../img/costa.jpeg'
import Swiper3 from '../../components/Swiper3/Swiper3.js';

const Departamentos = () => {
    const [showCarrusel, setShowCarrusel] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    // Lista completa de imágenes para el carrusel
    const images = [
        fotoPieza,
        CostaImagen,
        fotoExterior,
        fotoDucha,
        fotoHabitacion,
        fotoSala,
        living,
        // Agrega más imágenes aquí según sea necesario
    ];

    // Maneja el clic en una imagen, abriendo el carrusel desde esa imagen específica
    const handleImageClick = (index) => {
        setSelectedImageIndex(index);
        setShowCarrusel(true);
    };

    return (
        <div className='departamentos'>    
            <Encabezado imageSrc={fotoEncabezado} seccion={"Departamentos"}/>
            <div className="containerDepartamentos">
                <div className="item dep1">
                    <div className='fotosDeptos' onClick={() => handleImageClick(0)}>
                        <img src={simboloMas} alt="Simbolo Mas" className='fotoSimbolo'/>
                        <img src={fotoSala} alt="Imagen 1" className='fotoDepto'/>
                    </div>
                    <div className="textoDepartamentos">
                        <h2 className='tituloDepto'>Departamento PB1</h2>
                        <p className='subtituloDepto'>2 amb. 1 baño. 66m2. 3 personas</p>
                        <p className='textoDepto'>
                            Living-Comedor: mesa con cuántas sillas. Sillones cuántos. Smart TV 43”. <br /> 
                            Escritorio con silla de oficina, 1 sofa cama de 1 plaza <br />
                            Cocina completa con qué. <br />
                            Dormitorio principal: cama de dos plazas. <br />
                            Baño: Cómo es. ventilación natural<br />
                        </p>
                        <img src={aloeFooter} alt="icono flor decorativo" className='aloeFooter'/>
                    </div>
                </div>
                
                <div className="item dep2">      
                    <div className='fotosDeptos' onClick={() => handleImageClick(0)}>
                            <img src={simboloMas} alt="Simbolo Mas" className='fotoSimbolo'/>
                            <img src={fotoSala} alt="Imagen 1" className='fotoDepto'/>
                        </div>
                        <div className="textoDepartamentos">
                            <h2 className='tituloDepto'>Departamento PB1</h2>
                            <p className='subtituloDepto'>2 amb. 1 baño. 66m2. 3 personas</p>
                            <p className='textoDepto'>
                                Living-Comedor: mesa con cuántas sillas. Sillones cuántos. Smart TV 43”. <br /> 
                                Escritorio con silla de oficina, 1 sofa cama de 1 plaza <br />
                                Cocina completa con qué. <br />
                                Dormitorio principal: cama de dos plazas. <br />
                                Baño: Cómo es. ventilación natural<br />
                            </p>
                        <img src={aloeFooter} alt="icono flor decorativo" className='aloeFooter'/>
                    </div>
                </div>
               
                <div className="item dep3">
                <div className='fotosDeptos' onClick={() => handleImageClick(0)}>
                        <img src={simboloMas} alt="Simbolo Mas" className='fotoSimbolo'/>
                        <img src={fotoSala} alt="Imagen 1" className='fotoDepto'/>
                    </div>
                    <div className="textoDepartamentos">
                        <h2 className='tituloDepto'>Departamento PB1</h2>
                        <p className='subtituloDepto'>2 amb. 1 baño. 66m2. 3 personas</p>
                        <p className='textoDepto'>
                            Living-Comedor: mesa con cuántas sillas. Sillones cuántos. Smart TV 43”. <br /> 
                            Escritorio con silla de oficina, 1 sofa cama de 1 plaza <br />
                            Cocina completa con qué. <br />
                            Dormitorio principal: cama de dos plazas. <br />
                            Baño: Cómo es. ventilación natural<br />
                        </p>
                        <img src={aloeFooter} alt="icono flor decorativo" className='aloeFooter'/>
                    </div>
                </div>
                <div className="item dep4">                 
                   <div className='fotosDeptos' onClick={() => handleImageClick(0)}>
                        <img src={simboloMas} alt="Simbolo Mas" className='fotoSimbolo'/>
                        <img src={fotoSala} alt="Imagen 1" className='fotoDepto'/>
                    </div>
                    <div className="textoDepartamentos">
                        <h2 className='tituloDepto'>Departamento PB1</h2>
                        <p className='subtituloDepto'>2 amb. 1 baño. 66m2. 3 personas</p>
                        <p className='textoDepto'>
                            Living-Comedor: mesa con cuántas sillas. Sillones cuántos. Smart TV 43”. <br /> 
                            Escritorio con silla de oficina, 1 sofa cama de 1 plaza <br />
                            Cocina completa con qué. <br />
                            Dormitorio principal: cama de dos plazas. <br />
                            Baño: Cómo es. ventilación natural<br />
                        </p>
                        <img src={aloeFooter} alt="icono flor decorativo" className='aloeFooter'/>
                    </div>
                </div>                
            </div>

            {/* Renderiza el carrusel si showCarrusel es true */}
            {showCarrusel && (
                <GaleriaImagenes 
                    images={images} 
                    initialIndex={selectedImageIndex} 
                    onClose={() => setShowCarrusel(false)} 
                />
            )}

            <EnlaceContacto imageSrc={imagenPlaya} /> 
        </div>
    );
}

export default Departamentos;
