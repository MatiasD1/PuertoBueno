import fotoCosta from '../../img/costa.jpeg'

const Contacto = () => {

    return (
            <div className="contacto">
                <img src={fotoCosta} className="fotoCosta" alt="Costa marplatense" />

                <div className="textoContacto">
                    <h3>"Tu hogar en la costa marplatense, <br/> a solo unos pasos del mar."</h3>
                </div>
                
                <div className="contact-form">
                    <h2>Contacto</h2>
                    <form action="#">
                        <label htmlFor="nombre">Nombre Completo:</label>
                        <input type="text" id="nombre" name="nombre" required />
                        <div className="fechasContacto">
                            <div className="fecha1">
                                <label className="fechaEntrada">Fecha de Entrada:</label>
                                <input type="date" id="fecha-entrada" name="fecha-entrada" required />
                            </div>                          
                            <div className="fecha2">
                                <label className="fechaSalida">Fecha de Salida:</label>
                                <input type="date" id="fecha-salida" name="fecha-salida" required />       
                            </div>

                            
                        </div>
                        
                        <label htmlFor="cantidad-personas">Cantidad de Personas:</label>
                        <input type="number" id="cantidad-personas" name="cantidad-personas" required />
    
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
    
                        <label htmlFor="mensaje">Mensaje:</label>
                        <textarea id="mensaje" name="mensaje"></textarea>
    
                        <button type="submit">Enviar</button>
                    </form>
                </div>  

            </div>
    );
}

export default Contacto;