import React from 'react'

function MiOrg(props) {
    return (
        <section className='flex justify-center items-center p-3 md:p-5 gap-5'>
            <h3 className='text-[#6278F7] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-normal py-3 md:py-6 border-b-2 xl:border-b-4 border-b-[#6278F7]'>
                Mi Organización
            </h3>
            <img className='cursor-pointer h-10 lg:h-16' src="/img/add.png" alt="add" onClick={props.cambiarMostrar} />
        </section>
    )
}

export default MiOrg