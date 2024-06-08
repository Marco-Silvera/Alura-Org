import { useState } from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'
import MiOrg from './components/MiOrg'

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(true)

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  return (
    <>
      <h1>
        Hola mundo
      </h1>
      <Header />
      {mostrarFormulario ? <Formulario /> : <></>}
      <MiOrg cambiarMostrar={cambiarMostrar} />
    </>
  )
}

export default App
