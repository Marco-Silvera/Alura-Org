import React from 'react'

function Boton(props) {
    return (
        <button className='bg-[#6278F7] rounded-[10px] font-bold text-white font-Montserrat py-6 px-8 w-fit hover:text-[#95FFD4]'>
            {props.texto}
        </button>
    )
}

export default Boton