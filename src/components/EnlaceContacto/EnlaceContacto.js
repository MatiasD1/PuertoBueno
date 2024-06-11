import React from 'react';

const EnlaceContacto = ({ imageSrc }) => {
    return (
        <div className='EnlaceContacto'>
            <div className="contenedorEnlaceContacto">
                <h3 className='TituloEnlaceContacto'>Consultá disponibilidad </h3>
                <p className='FraseEnlaceContacto'>Enviá tu consulta detallando fecha deseada de viaje para enviarte nuestras tarifas. </p>
                <img src={imageSrc} className="fotoEnlaceContacto" alt="Enlace Contacto" />
                <a href="/contacto" className="textoEnlaceContacto">Contacto</a>
            </div>
        </div>
    );
}

export default EnlaceContacto;
