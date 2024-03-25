import React, { useState } from 'react';
import { getStudentsByGrade } from '../api/students.api';

const SearchByGrade = () => {
    const [grade, setGrade] = useState('');
    const [students, setStudents] = useState([]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await getStudentsByGrade(grade);
        setStudents(response.data);
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="mt-10">
                <input
                    className= 'bg-gray-600 p-3 rounded-lg block w-auto mb-2' placeholder='Ingresa el grado'
                    type="text"
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                />
                <button className='bg-indigo-600 p-3 rounded-lg block text-white mr-4' type="submit">Buscar</button>
            </form>
            <table className="min-w-full divide-y divide-gray-200 mt-10">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-1 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Nombre</th>
                        <th scope="col" className="px-1 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Fecha de Nacimiento</th>
                        <th scope="col" className="px-1 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Nombre del Padre</th>
                        <th scope="col" className="px-1 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Nombre de la Madre</th>
                        <th scope="col" className="px-1 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Grado</th>
                        <th scope="col" className="px-1 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Sección</th>
                        <th scope="col" className="px-1 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Fecha de Ingreso</th>
                    </tr>
                </thead>
                <tbody className="bg-gray divide-y divide-gray-200">
                    {students.map((student) => (
                        <tr key={student.id} className="hover:bg-sky-500 hover.cursor-pointer">
                            <td className="px-1 py-3 whitespace-nowrap">{student.nombre}</td>
                            <td className="px-1 py-3 whitespace-nowrap">{student.fechanacimiento}</td>
                            <td className="px-1 py-3 whitespace-nowrap">{student.nombrepadre}</td>
                            <td className="px-1 py-3 whitespace-nowrap">{student.nombremadre}</td>
                            <td className="px-1 py-3 whitespace-nowrap">{student.grado}</td>
                            <td className="px-1 py-3 whitespace-nowrap">{student.seccion}</td>
                            <td className="px-1 py-3 whitespace-nowrap">{student.fechaingreso}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SearchByGrade;