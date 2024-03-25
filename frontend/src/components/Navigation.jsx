import { Link } from "react-router-dom";

export function Navigation() {
    return (
        <div className="flex justify-between text-black py-5">
            <Link to="/students">
                <h1 className="font-bold text-3xl mb-4">¡Bienvenidos a SCHOOL APP!</h1>
            </Link>
        <button className="bg-indigo-600 px-3 py-2 rounded-lg ml-auto">
            <Link to="/students/crear-alumno" className="text-white">Estudiante Nuevo</Link>
        </button>

        <button className="bg-indigo-600 px-3 py-2 rounded-lg ml-2">
            <Link to="/students/consultar-alumno/" className="text-white">Filtrar por Grado</Link>
        </button>
        </div>
    )
}