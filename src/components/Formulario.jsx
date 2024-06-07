import Boton from "./Boton"
import CampoTexto from "./CampoTexto"
import ListaOpciones from "./ListaOpciones"

function Formulario() {
    return (
        <section className="py-10 px-20 flex justify-center w-full font-Prata">
            <article className="bg-[#F7F7F7] min-w-[1200px] flex flex-col py-10 px-20 gap-5 rounded-[20px] [box-shadow:7px_7px_15px_rgba(0,_0,_0,0.25)]">
                <h2 className="text-[32px] font-normal color-[#212121]">
                    Rellena el formulario para crear el colaborador
                </h2>
                <CampoTexto titulo='Nombre' placeholder='Ingresar nombre' />
                <CampoTexto titulo='Puesto' placeholder='Ingresar puesto' />
                <CampoTexto titulo='Foto' placeholder='Ingresar enlace de foto' />
                <ListaOpciones />
                <Boton texto='Crear' />
            </article>
        </section>
    )
}

export default Formulario