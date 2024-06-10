import React from 'react'

function Equipo(props) {

    const { colorPrimario, colorSecundario, titulo } = props.datos

    const obj = { backgroundColor: colorSecundario }
    const estiloBorde = { borderColor: colorPrimario }

    return (
        <section className='p-8 text-[#212121] font-Prata text-center' style={obj}>
            <h3 className='text-3xl font-normal border-b-4 inline-block pb-2' style={estiloBorde}>{titulo}</h3>
            <div></div>
        </section>
    )
}

export default Equipo
