import Swiper3 from "../Swiper3/Swiper3";

const OtrosServicios = () => {
    return (
        <div className='OtrosServicios'>
            <div className='item1'>
                <Swiper3 className='swiper' />
                <div className="textoOtrosServicios">
                    <h3 className='tituloOtrosServicios'>Quincho</h3>
                    <p>
                        Texto ParrafoTexto ParrafoTexto ParrafoTexto ParrafoTexto ParrafoTexto ParrafoTexto ParrafoTexto ParrafoTexto ParrafoTexto ParrafoTexto ParrafoTexto ParrafoTexto ParrafoTexto ParrafoTexto ParrafoTexto Parrafo
                    </p>
                </div>  
            </div>
            <div className='item2'>
                <div className="textoOtrosServicios">
                    <h3 className='tituloOtrosServicios'>Estacionamiento</h3>
                    <p>
                        Texto ParrafoTexto ParrafoTexto ParrafoTexto ParrafoTexto ParrafoTexto ParrafoTexto ParrafoTexto ParrafoTexto ParrafoTexto ParrafoTexto ParrafoTexto ParrafoTexto ParrafoTexto ParrafoTexto ParrafoTexto Parrafo
                    </p>
                </div>
                <Swiper3 className='swiper' />
            </div>
        </div>
    );
}

export default OtrosServicios;
