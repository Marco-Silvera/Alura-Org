import { useState } from "react"
import Boton from "./Boton"
import Campo from "./Campo"
import ListaOpciones from "./ListaOpciones"

function Formulario(props) {

    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")

    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

    const { registrarColaborador, crearEquipo } = props

    const manejoEnvio = (e) => {
        e.preventDefault()
        console.log("Manejar envio");
        let datosEnviados = {
            nombre: nombre,
            puesto: puesto,
            foto: foto,
            equipo: equipo
        }
        registrarColaborador(datosEnviados);
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({ titulo, colorPrimario: color });
    }

    return (
        <section className="py-10 px-20 flex gap-24 justify-evenly flex-wrap w-full font-Prata">
            <form className="bg-[#F7F7F7] flex-1 min-w-[500px] flex flex-col py-10 px-20 gap-5 rounded-[20px] [box-shadow:7px_7px_15px_rgba(0,_0,_0,0.25)]"
                onSubmit={manejoEnvio}>
                <h2 className="text-[32px] font-normal color-[#212121]">
                    Rellena el formulario para crear el colaborador
                </h2>
                <Campo titulo='Nombre' placeholder='Ingresar nombre' required valor={nombre} actualizarValor={actualizarNombre} />
                <Campo titulo='Puesto' placeholder='Ingresar puesto' required valor={puesto} actualizarValor={actualizarPuesto} />
                <Campo titulo='Foto' placeholder='Ingresar enlace de foto' required valor={foto} actualizarValor={actualizarFoto} />
                <ListaOpciones valor={equipo} actualizarValor={actualizarEquipo} equipos={props.equipos} />
                <Boton texto='Crear' />
            </form>

            <form className="bg-[#F7F7F7] flex-1 min-w-[500px] flex flex-col py-10 px-20 gap-5 rounded-[20px] [box-shadow:7px_7px_15px_rgba(0,_0,_0,0.25)]"
                onSubmit={manejarNuevoEquipo}>
                <h2 className="text-[32px] font-normal color-[#212121]">
                    Rellena el formulario para crear un equipo
                </h2>
                <Campo titulo='Titulo' placeholder='Ingresar titulo' required valor={titulo} actualizarValor={actualizarTitulo} />
                <Campo titulo='Color' placeholder='Ingresar color en Hex' required valor={color} actualizarValor={actualizarColor}
                    type='color' />
                <Boton texto='Registrar equipo' />
            </form>
        </section>
    )
}

export default Formulario