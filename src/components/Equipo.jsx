import React from 'react'
import Colaborador from './Colaborador'

function Equipo(props) {

    const { colorPrimario, colorSecundario, titulo } = props.datos

    const obj = { backgroundColor: colorSecundario }
    const estiloBorde = { borderColor: colorPrimario }

    return (
        <section className='p-8 text-[#212121] font-Prata text-center' style={obj}>
            <h3 className='text-3xl font-normal border-b-4 inline-block pb-2' style={estiloBorde}>{titulo}</h3>
            <div className='flex justify-evenly flex-wrap'>
                <Colaborador />
                <Colaborador />
                <Colaborador />
            </div>
        </section>
    )
}

export default Equipo
