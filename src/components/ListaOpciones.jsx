import React from 'react'

function ListaOpciones() {

    const equipos = [
        "Programación",
        "Front End",
        "Data Science",
        "Devops",
        "UX y Diseño",
        "Movil",
        "Innovación y Gestión"
    ]

    return (
        <div className='font-Montserrat'>
            <label className='text-lg font-semibold flex flex-col gap-4 mb-2'>Equipos</label>
            <select className='p-4 outline-[#6278F7] w-full text-base'>
                {equipos.map((equipo, index) => <option key={index}>{equipo}</option>)}
            </select>
        </div>
    )
}

export default ListaOpciones