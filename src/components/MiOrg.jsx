import React from 'react'

function MiOrg(props) {
    return (
        <section className='flex justify-center items-center px-5 gap-20'>
            <h3 className='text-[#6278F7] text-[40px] font-normal pb-6 border-b-4 border-b-[#6278F7]'>
                Mi Organización
            </h3>
            <img className='cursor-pointer' src="/img/add.png" alt="add" onClick={props.cambiarMostrar} />
        </section>
    )
}

export default MiOrg