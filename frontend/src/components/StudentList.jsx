import { useEffect, useState } from "react"
import { getStudents } from "../api/students.api"
import { useNavigate } from "react-router-dom"

export function StudentList() {

    const [students, setStudents] = useState([]);

    useEffect(() => {
        async function loadStudents(){
            const res = await getStudents();
            setStudents(res.data);
        }
        loadStudents();
    }, []);

    const navigate = useNavigate();

    return <div className="my-4">
    <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
            <tr>
                <th scope="col" className="px-1 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Nombre Completo</th>
                <th scope="col" className="px-1 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Fecha de Nacimiento</th>
                <th scope="col" className="px-1 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Nombre del Padre</th>
                <th scope="col" className="px-1 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Nombre de La Madre</th>
                <th scope="col" className="px-1 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Grado</th>
                <th scope="col" className="px-1 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Sección</th>
                <th scope="col" className="px-1 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Fecha de Ingreso</th>
                <th scope="col" className="px-1 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Opciones</th>
            </tr>
        </thead>
        <tbody className="bg-gray divide-y divide-gray-200">
            {students.map(student => (
                <tr key={student.id} className="hover:bg-sky-500 hover.cursor-pointer">
                    <td className="px-1 py-3 whitespace-nowrap">{student.nombre}</td>
                    <td className="px-1 py-3 whitespace-nowrap">{student.fechanacimiento}</td>
                    <td className="px-1 py-3 whitespace-nowrap">{student.nombrepadre}</td>
                    <td className="px-1 py-3 whitespace-nowrap">{student.nombremadre}</td>
                    <td className="px-1 py-3 whitespace-nowrap">{student.grado}</td>
                    <td className="px-1 py-3 whitespace-nowrap">{student.seccion}</td>
                    <td className="px-1 py-3 whitespace-nowrap">{student.fechaingreso}</td>
                    <td className="px-1 py-3 whitespace-nowrap flex">
                        <button className="bg-red-600 p-1 rounded-lg block w-auto" 
                            onClick={() => {navigate(`/students/${student.id}`)}}>
                            Editar
                        </button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
    </div>;
}