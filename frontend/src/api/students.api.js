import axios from 'axios';

const studentApi = axios.create({
    baseURL: 'http://localhost:3000/students/',
});

// Agrega un interceptor de solicitud
studentApi.interceptors.request.use(
    config => {
      // Modifica la configuración de la solicitud aquí
      config.headers['x-api-key'] = 'maugarcia123.';
      return config;
    },
    error => {
      // Si hay un error, rechaza la promesa
      return Promise.reject(error);
    }
  );

export const getStudents = () => studentApi.get('/');

export const getStudent = (id) => studentApi.get(`/${id}/`);

export const getStudentsByGrade = (grade) => studentApi.get(`/consultar-alumno/${grade}/`);

export const createStudent = (student) => studentApi.post('/crear-alumno', student); 

export const deleteStudent = (id) => studentApi.delete(`/${id}/`);

export const updateStudent = (id, student) => studentApi.patch(`/${id}/`, student);