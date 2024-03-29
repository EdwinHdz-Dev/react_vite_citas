// import { useEffect } from "react"
import Paciente from "./Paciente"

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {

  // useEffect(() => {
  //   if (pacientes.length > 0) {
  //     console.log('Nuevo Paciente')
  //   }
  // }, [pacientes])

  return (
    <div className="md:w-1/2 lg:w-3/5 m-5">

      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">
            Listado Pacientes
          </h2>

          <p className="text-lg mt-5 mb-5 text-center">
            Administra tus {""}
            <span className="text-indigo-600 font-bold">
              Pacientes y Citas
            </span>
          </p>

          <div className="md:h-screen overflow-y-scroll">
            {pacientes.map(paciente =>
              <Paciente
                paciente={paciente}
                key={paciente.id}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}
              />
            )}
          </div>
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">
            No hay pacientes ingresados
          </h2>

          <p className="text-lg mt-5 mb-5 text-center">
            Comienza agregando pacientes {""}
            <span className="text-indigo-600 font-bold">
              y apareceran en este lugar
            </span>
          </p>
        </>
      )}
    </div>
  )
}

export default ListadoPacientes