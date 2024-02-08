// import { useEffect } from "react"
const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {

    // useEffect(() => {
    //     console.log('El componente esta listo')
    // }, [])

    const { nombre, propietario, email, fecha, sintomas, id } = paciente
    const handleEliminar = () => {
        const respuesta = confirm('¿Deseas eliminar este paciente?');
        if (respuesta) {
            eliminarPaciente(id)
        }
    }

    return (
        <div className="bg-white shadow-md rounded-lg py-10 px-5 mb-5">

            <p className="font-bold mb-3 text-gray-700 uppercase">Mascota: {""}
                <span className="font-normal normal-case">{nombre}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {""}
                <span className="font-normal normal-case">{propietario}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Email: {""}
                <span className="font-normal normal-case">{email}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {""}
                <span className="font-normal normal-case">{fecha}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase text-justify">Sintomas: {""}
                <span className="font-normal normal-case">{sintomas}</span>
            </p>

            <div className="flex justify-between mt-10">
                <button
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                    type="button"
                    onClick={() => setPaciente(paciente)}>
                    Editar
                </button>

                <button
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                    type="button"
                    onClick={handleEliminar}>
                    Eliminar
                </button>
            </div>

        </div>
    )
}

export default Paciente