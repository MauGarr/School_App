import axios from 'axios';

const studentApi = axios.create({
    baseURL: 'http://localhost:3000/students/',
});

export const getStudents = () => studentApi.get('/');

export const getStudent = (id) => studentApi.get(`/${id}/`);

export const getStudentsByGrade = (grade) => studentApi.get(`/consultar-alumno/${grade}/`);

export const createStudent = (student) => studentApi.post('/crear-alumno', student); 

export const deleteStudent = (id) => studentApi.delete(`/${id}/`);

export const updateStudent = (id, student) => studentApi.patch(`/${id}/`, student);