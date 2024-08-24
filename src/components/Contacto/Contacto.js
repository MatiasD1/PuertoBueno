import React, { useState } from 'react';

const Contacto = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        fechaEntrada: '',
        fechaSalida: '',
        cantidadPersonas: '',
        email: '',
        mensaje: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:5000/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.text())
        .then(data => {
            alert(data);
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error al enviar el formulario');
        });
    };

    return (
        <div className="contacto">
            
            <div className="contact-form">
                <h2>Contacto</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="nombre">Nombre Completo:</label>
                    <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required />
                    <div className="fechasContacto">
                        <div className="fecha1">
                            <label className="fechaEntrada">Fecha de Entrada:</label>
                            <input type="date" id="fechaEntrada" name="fechaEntrada" value={formData.fechaEntrada} onChange={handleChange} required />
                        </div>                          
                        <div className="fecha2">
                            <label className="fechaSalida">Fecha de Salida:</label>
                            <input type="date" id="fechaSalida" name="fechaSalida" value={formData.fechaSalida} onChange={handleChange} required />       
                        </div>
                    </div>
                    
                    <label htmlFor="cantidadPersonas">Cantidad de Personas:</label>
                    <input type="number" id="cantidadPersonas" name="cantidadPersonas" value={formData.cantidadPersonas} onChange={handleChange} required />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

                    <label htmlFor="mensaje">Mensaje:</label>
                    <textarea id="mensaje" name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>

                    <button type="submit">Enviar</button>
                </form>
            </div>  
            <div className="textoContacto">
                <h3>
                    El tiempo de vacaciones suele ser poco,  idealmente, su calidad debe ser mucha. 
                    Por lo tanto, para nosotros,  una reserva es sinónimo de responsabilidad y compromiso.<br/><br/> 
                    Podés contar con la seguridad que da el trato directo con los propietarios de este proyecto.<br/><br/> 
                    Queremos que te sientas tan a gusto, que nos recomiendes y nos vuelvas a elegir cada vez que
                    visites MdP.<br/><br/>
                </h3>
            </div>
        </div>
    );
}

export default Contacto;
