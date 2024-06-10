import React from 'react'

function ListaOpciones(props) {

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }

    return (
        <div className='font-Montserrat'>
            <label className='text-lg font-semibold flex flex-col gap-4 mb-2'>Equipos</label>
            <select className='p-4 outline-[#6278F7] w-full text-base' value={props.valor} onChange={manejarCambio}>
                <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
                {props.equipos.map((equipo, index) => <option key={index} value={equipo}>{equipo}</option>)}
            </select>
        </div>
    )
}

export default ListaOpciones