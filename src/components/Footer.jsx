import React from 'react'

function Footer() {
    return (
        <footer className='flex justify-between text-white font-Montserrat text-xl items-center bg-cover bg-center p-[5%]' style={{backgroundImage: "url(/img/footer.png)"}}>
            <div className='flex gap-3'>
                <a href="https://www.aluracursos.com/">
                    <img src="/img/facebook.png" alt="Facebook" />
                </a>
                <a href="https://www.aluracursos.com/">
                    <img src="/img/twitter.png" alt="Twitter" />
                </a>
                <a href="https://www.aluracursos.com/">
                    <img src="/img/instagram.png" alt="Instagram" />
                </a>
            </div>
            <img className='px-4' src="/img/Logo.png" alt="org" />
            <strong>Desarrollado por Alura</strong>
        </footer>
    )
}

export default Footer
