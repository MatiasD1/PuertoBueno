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
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
        .then(response => response.text())
        .then(data => alert(data))
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
                    <input type="text" placeholder="Nombre Completo" name="nombre" value={formData.nombre} onChange={handleChange} required />
                    <div className="fechasContacto">
                        <input type="date" name="fechaEntrada" value={formData.fechaEntrada} onChange={handleChange} required />
                        <input type="date" name="fechaSalida" value={formData.fechaSalida} onChange={handleChange} required />
                    </div>
                    <input type="number" placeholder="Cantidad de Personas" name="cantidadPersonas" value={formData.cantidadPersonas} onChange={handleChange} required />
                    <input type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} required />
                    <textarea placeholder="Mensaje" name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
                    <button type="submit">Enviar</button>
                </form>
            </div>
            <div className="textoContacto">
                <h3>
                    El tiempo de vacaciones suele ser poco, idealmente, su calidad debe ser mucha.
                    Por lo tanto, para nosotros, una reserva es sinónimo de responsabilidad y compromiso.<br/><br/>
                    Podés contar con la seguridad que da el trato directo con los propietarios de este proyecto.<br/><br/>
                    Queremos que te sientas tan a gusto, que nos recomiendes y nos vuelvas a elegir cada vez que visites MdP.
                </h3>
            </div>
        </div>
    );
}

export default Contacto;
