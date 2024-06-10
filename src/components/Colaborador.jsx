import React from 'react'

function Colaborador(props) {
    
    const {nombre, puesto, foto, equipo} = props.datos
    const {colorPrimario} = props

    return (
        <article className='w-72 mb-6'>
            <header className='bg-[#F0F0F0] rounded-tl-xl rounded-tr-xl flex justify-center' style={{backgroundColor: colorPrimario}}>
                <img className='w-24 rounded-full relative bottom-[-50px]' src={foto} alt={nombre} />
            </header>
            <div className='bg-white shadow-[5px_5px_15px_rgba(0,0,0,0.08)] rounded-[0px_0px_10px_10px] pt-24 pb-10 min-h-24 font-Montserrat'>
                <h4 className='text-[#6278F7] text-lg leading-6 font-bold mb-2'>{nombre}</h4>
                <h5 className='text-[#212121] text-lg leading-6 font-normal m-0 px-6'>{puesto}</h5>
            </div>
        </article>
    )
}

export default Colaborador
