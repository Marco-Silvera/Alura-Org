import React from 'react'

function CampoTexto(props) {
    const placeholderModificado = `${props.placeholder}...`

    // Destructuracion
    const { type = 'text' } = props

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }

    return (
        <div className='font-Montserrat'>
            <label className='text-md sm:text-lg font-semibold flex flex-col gap-4 mb-2'>{props.titulo}</label>
            <input
                placeholder={placeholderModificado} className={`p-4 outline-[#6278F7] w-full text-base ${type === 'color' ? 'h-10 py-1 px-5' : ''}`}
                required={props.required}
                value={props.valor}
                onChange={manejarCambio}
                type={type} />
        </div>
    )
}

export default CampoTexto