import React from 'react'
import { IoMdCloseCircle, IoIosHeartEmpty, IoIosHeart } from "react-icons/io"

function Colaborador(props) {

    const { nombre, puesto, foto, equipo, id, fav } = props.datos
    const { colorPrimario, eliminarColaborador, like } = props

    return (
        <article className='w-72 mb-6 relative'>
            <IoMdCloseCircle className='cursor-pointer text-white absolute right-4 top-4 w-8 h-8' onClick={() => eliminarColaborador(id)} />
            <header className='bg-[#F0F0F0] rounded-tl-xl rounded-tr-xl flex justify-center' style={{ backgroundColor: colorPrimario }}>
                <img className='w-24 rounded-full relative bottom-[-50px]' src={foto} alt={nombre} />
            </header>
            <div className='bg-white shadow-[5px_5px_15px_rgba(0,0,0,0.08)] rounded-[0px_0px_10px_10px] pt-24 pb-10 min-h-24 font-Montserrat flex flex-col'>
                <h4 className='text-[#6278F7] text-lg leading-6 font-bold mb-2'>{nombre}</h4>
                <h5 className='text-[#212121] text-lg leading-6 font-normal m-0 px-6'>{puesto}</h5>

                {fav ? <IoIosHeart color='red' className='h-10 w-10 self-center' onClick={() => like(id)} /> : <IoIosHeartEmpty className='h-10 w-10 self-center' onClick={() => like(id)} />}


            </div>
        </article>
    )
}

export default Colaborador
