import React, { useState } from 'react';
import Encabezado from '../Encabezado/Encabezado' 
import fotoEncabezado from '../../img/arena.jpg'
import EnlaceContacto from '../EnlaceContacto/EnlaceContacto'
import imagenPlaya from '../../img/playa.jpg'
import Swiper3 from '../../components/Swiper3/Swiper3.js';
import CostaImagen from "../../img/costa.jpeg";
import fotoExterior from "../../img/fotoExterior.jpg";
import fotoPieza from "../../img/fotoPieza.jpg"; 
import GaleriaImagenes from '../GaleriaImagenes/GaleriaImagenes';
import IconosServicios from '../IconosServicios/IconosServicios.js'; 
import fotoMardel from '../../img/fotoMardel.jpg'

const Servicios = () => {
    const [showCarrusel, setShowCarrusel] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [images] = useState([
        fotoPieza,
        CostaImagen,
        fotoExterior,
        // Agrega más URLs de imágenes aquí según sea necesario
    ]);
    const handleImageClick = () => {
        setSelectedImage(images);
        setShowCarrusel(true);
    };
    return (
        <div className='servicios'>
            <Encabezado imageSrc={fotoMardel} seccion={"Servicios"}/>
            <IconosServicios/>
            {showCarrusel && <GaleriaImagenes images={selectedImage} onClose={() => setShowCarrusel(false)} />} {/* Renderiza el carrusel si showCarrusel es true */}
            <div className='otrosServicios'>
            <div className='item2'>
                    <h3> Quincho </h3>
                    <Swiper3/>
                </div>
                <div className='item2'>
                    <Swiper3/>
                    <h3> Estacionamiento </h3>  
                </div>
            </div>
            <EnlaceContacto imageSrc={imagenPlaya} /> 
        </div>  
    );
}

export default Servicios;