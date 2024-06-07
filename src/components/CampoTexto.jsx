import React from 'react'

function CampoTexto(props) {
    const placeholderModificado = `${props.placeholder}...`
    return (
        <div className='font-Montserrat'>
            <label htmlFor="" className='text-lg font-semibold flex flex-col gap-4 mb-2'>{props.titulo}</label>
            <input type="text" placeholder={placeholderModificado} className='p-4 outline-[#6278F7] w-full text-base' />
        </div>
    )
}

export default CampoTexto