import React, { cloneElement } from 'react'
import Colaborador from './Colaborador'
import hexToRgba from 'hex-to-rgba'

function Equipo(props) {

    const { colorPrimario, colorSecundario, titulo, id } = props.datos
    const { colaboradores, eliminarColaborador, actualizarColor, like } = props

    const obj = { backgroundColor: hexToRgba(colorPrimario, 0.6) }
    const estiloBorde = { borderColor: colorPrimario }

    return <>
        {
            colaboradores.length > 0 &&
            <section className='p-8 text-[#212121] font-Prata text-center relative' style={obj}>

                <input className='absolute right-8 w-8 h-6 sm:w-12' type="color" value={colorPrimario} onChange={(evento) => { actualizarColor(evento.target.value, id); }} />

                <h3 className='text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-normal border-b-4 inline-block pb-2' style={estiloBorde}>{titulo}</h3>
                <div className='flex justify-evenly flex-wrap pt-5 gap-5'>
                    {
                        colaboradores.map((colaborador, index) => <Colaborador
                            datos={colaborador}
                            key={index}
                            colorPrimario={colorPrimario}
                            eliminarColaborador={eliminarColaborador}
                            like={like} />)
                    }
                </div>
            </section>
        }
    </>
}

export default Equipo
