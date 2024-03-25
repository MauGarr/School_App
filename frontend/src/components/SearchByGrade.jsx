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
            <form onSubmit={handleSubmit}>
                <input
                    className= 'bg-gray-600 p-3 rounded-lg block w-auto mb-3' placeholder='Ingresa el grado'
                    type="text"
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                />
                <button className='bg-indigo-600 p-3 rounded-lg block text-white mr-4' type="submit">Buscar</button>
            </form>
            <table className="table-auto">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Nombre</th>
                        <th className="px-4 py-2">Fecha de Nacimiento</th>
                        <th className="px-4 py-2">Nombre del Padre</th>
                        <th className="px-4 py-2">Nombre de la Madre</th>
                        <th className="px-4 py-2">Grado</th>
                        <th className="px-4 py-2">Sección</th>
                        <th className="px-4 py-2">Fecha de Ingreso</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key={student.id}>
                            <td className="border px-4 py-2">{student.nombre}</td>
                            <td className="border px-4 py-2">{student.fechanacimiento}</td>
                            <td className="border px-4 py-2">{student.nombrepadre}</td>
                            <td className="border px-4 py-2">{student.nombremadre}</td>
                            <td className="border px-4 py-2">{student.grado}</td>
                            <td className="border px-4 py-2">{student.seccion}</td>
                            <td className="border px-4 py-2">{student.fechaingreso}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SearchByGrade;