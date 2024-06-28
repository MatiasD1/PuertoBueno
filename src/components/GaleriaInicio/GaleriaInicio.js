import React, { useState } from 'react';
import GaleriaImagenes from '../GaleriaImagenes/GaleriaImagenes';
import CostaImagen from "../../img/costa.jpeg";
import fotoExterior from "../../img/fotoExterior.jpg";
import fotoPieza from "../../img/fotoPieza.jpg"; 
import fotoHabitacion from "../../img/fotoHabitacion.JPG"
import simboloMas from "../../img/icons/simboloMas.png" 

const GaleriaInicio = () => {
    const [showCarrusel, setShowCarrusel] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [images] = useState([
        fotoPieza,
        CostaImagen,
        fotoExterior,
        // Agrega más URLs de imágenes aquí según sea necesario
    ]);

    // Simplificar el manejador de clics
    const handleImageClick = () => {
        setSelectedImage(images);
        setShowCarrusel(true);
    };

    const closeCarousel = () => {
        setShowCarrusel(false);
    };

    return (
        <div className='galeriaInicio'>
            <h2 className='tituloGaleriaInicio'>Galería de Fotos</h2>
            <div className='grid-container'>
                {/* Fila 1 */}
                <div className='grid-row'>
                    <div className='fotosDeptosInicio' onClick={handleImageClick}>
                        <img src={simboloMas} alt="Simbolo Mas" className='fotoSimboloInicio'/>
                        <img src={fotoHabitacion} alt="Imagen 1" className='fotoDeptoInicio'/>
                    </div>
                    <div className='fotosDeptosInicio' onClick={handleImageClick}>
                        <img src={simboloMas} alt="Simbolo Mas" className='fotoSimboloInicio'/>
                        <img src={fotoHabitacion} alt="Imagen 2" className='fotoDeptoInicio'/>
                    </div>
                    <div className='fotosDeptosInicio' onClick={handleImageClick}>
                        <img src={simboloMas} alt="Simbolo Mas" className='fotoSimboloInicio'/>
                        <img src={fotoHabitacion} alt="Imagen 3" className='fotoDeptoInicio'/>
                    </div>
                    <div className='fotosDeptosInicio' onClick={handleImageClick}>
                        <img src={simboloMas} alt="Simbolo Mas" className='fotoSimboloInicio'/>
                        <img src={fotoHabitacion} alt="Imagen 4" className='fotoDeptoInicio'/>
                    </div>
                </div>      
                {/* Fila 2 */}
                <div className='grid-row'>
                    <div className='fotosDeptosInicio' onClick={handleImageClick}>
                        <img src={simboloMas} alt="Simbolo Mas" className='fotoSimboloInicio'/>
                        <img src={fotoHabitacion} alt="Imagen 5" className='fotoDeptoInicio'/>
                    </div>
                    <div className='fotosDeptosInicio' onClick={handleImageClick}>
                        <img src={simboloMas} alt="Simbolo Mas" className='fotoSimboloInicio'/>
                        <img src={fotoHabitacion} alt="Imagen 6" className='fotoDeptoInicio'/>
                    </div>
                    <div className='fotosDeptosInicio' onClick={handleImageClick}>
                        <img src={simboloMas} alt="Simbolo Mas" className='fotoSimboloInicio'/>
                        <img src={fotoHabitacion} alt="Imagen 7" className='fotoDeptoInicio'/>
                    </div>
                    <div className='fotosDeptosInicio' onClick={handleImageClick}>
                        <img src={simboloMas} alt="Simbolo Mas" className='fotoSimboloInicio'/>
                        <img src={fotoHabitacion} alt="Imagen 8" className='fotoDeptoInicio'/>
                    </div>
                </div>
            </div>

            {showCarrusel && (
                <div className="overlay" onClick={closeCarousel}>
                    <div className="carrusel-container" onClick={(e) => e.stopPropagation()}>
                        <GaleriaImagenes images={selectedImage} onClose={closeCarousel} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default GaleriaInicio;
