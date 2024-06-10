import { useState } from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'
import MiOrg from './components/MiOrg'
import Equipo from './components/Equipo'

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(true)

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  const equipos = [
    {
      titulo: 'Programación',
      colorPrimario: '#57C278',
      colorSecundario: '#D9F7E9'
    },
    {
      titulo: 'Front End',
      colorPrimario: '#82CFFA',
      colorSecundario: '#E8F8FF'
    },
    {
      titulo: 'Data Science',
      colorPrimario: '#A6D157',
      colorSecundario: '#F0F8E2'
    },
    {
      titulo: 'Devops',
      colorPrimario: '#E06B69',
      colorSecundario: '#FDE7E8'
    },
    {
      titulo: 'UX y Diseño',
      colorPrimario: '#DB6EBF',
      colorSecundario: '#FAE9F5'
    },
    {
      titulo: 'Movil',
      colorPrimario: '#FFBA05',
      colorSecundario: '#FFF5D9'
    },
    {
      titulo: 'Innovación y Gestión',
      colorPrimario: '#FF8A29',
      colorSecundario: '#FFEEDF'
    },
]

  return (
    <>
      <Header />
      {mostrarFormulario ? <Formulario equipos={equipos.map((equipo)=> equipo.titulo)}/> : <></>}
      <MiOrg cambiarMostrar={cambiarMostrar} />

      {equipos.map((equipo)=>{
        console.log('equipo:', equipo)
        return <Equipo datos={equipo} key={equipo.titulo}/>
      })}

    </>
  )
}

export default App
