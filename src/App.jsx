import { useState } from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'
import MiOrg from './components/MiOrg'
import Equipo from './components/Equipo'
import Footer from './components/Footer'

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(true)
  const [colaboradores, actualizarColaboradores] = useState([{
    equipo: "Front End",
    foto: "https://github.com/marco-silvera.png",
    nombre: "Marco Silvera",
    puesto: "Estudiante"
  }])

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  const registrarColaborador = (colaborador)=>{
    console.log("Nuevo colaborador", colaborador)
    //Spread operator
    actualizarColaboradores([...colaboradores, colaborador])
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
      {mostrarFormulario ? <Formulario equipos={equipos.map((equipo)=> equipo.titulo)}
        registrarColaborador={registrarColaborador}
        /> : <></>}
      <MiOrg cambiarMostrar={cambiarMostrar} />

      {equipos.map((equipo)=> <Equipo datos={equipo} key={equipo.titulo} colaboradores={colaboradores.filter(colaborador=> colaborador.equipo===equipo.titulo)}/>
      )}

      <Footer />

    </>
  )
}

export default App
