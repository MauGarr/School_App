import { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { createStudent, deleteStudent, getStudent, updateStudent } from '../api/students.api';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export function StudentFormPage() {

    const {register, handleSubmit, formState: {errors}, setValue} = useForm();
    const navigate = useNavigate();
    const params = useParams();

    const onSubmit = handleSubmit(async data => {
        if(params.id){
            await updateStudent(params.id, data);
            toast.success('¡Estudiante actualizado exitosamente!',{
                position: 'top-center',
                style: {
                    background: '#9AD0C2',
                    color: 'black',
                }
            });
        } else {
            await createStudent(data);
            toast.success('¡Estudiante creado exitosamente!',{
                position: 'top-center',
                style: {
                    background: '#9AD0C2',
                    color: 'black',
                }
            });
        }
        navigate('/students');
    });

    useEffect(() => {
        async function loadStudent(){
            if (params.id){
                const res = await getStudent(params.id);
                setValue("nombre", res.data.nombre);
                setValue("fechanacimiento", res.data.fechanacimiento);
                setValue("nombrepadre", res.data.nombrepadre);
                setValue("nombremadre", res.data.nombremadre);
                setValue("grado", res.data.grado);
                setValue("seccion", res.data.seccion);
                setValue("fechaingreso", res.data.fechaingreso);
                }
            }
        loadStudent();
    }, []);

    return (
        <div className='max-w-xl mx-auto'>
            <form onSubmit={onSubmit}>
                <input className='bg-gray-600 p-3 rounded-lg block w-full mb-3' type='text' placeholder='Nombre Completo' {...register('nombre', {required: true, maxLength: 50})} />
                {errors.nombre && <span className='text-red-600'>¡Debes completar este campo!</span>}

                <label htmlFor='fechanacimiento' className='block text-gray-700'>Fecha de Nacimiento</label>
                <input id='fechanacimiento' className='bg-gray-600 p-3 rounded-lg block w-full mb-3' type='date' {...register('fechanacimiento', {required: true})} />
                {errors.fechanacimiento && <span className='text-red-600'>¡Debes completar este campo con una fecha válida!</span>}

                <input className='bg-gray-600 p-3 rounded-lg block w-full mb-3' type='text' placeholder='Nombre del Padre' {...register('nombrepadre', {required: true, maxLength: 50})} />
                {errors.nombrepadre && <span className='text-red-600'>¡Debes completar este campo!</span>}

                <input className='bg-gray-600 p-3 rounded-lg block w-full mb-3' type='text' placeholder='Nombre de la Madre' {...register('nombremadre', {required: true, maxLength: 50})} />
                {errors.nombremadre && <span className='text-red-600'>¡Debes completar este campo!</span>}

                <input className='bg-gray-600 p-3 rounded-lg block w-full mb-3' type='text' placeholder='Grado' {...register('grado', {required: true, maxLength: 50})} />  
                {errors.grado && <span className='text-red-600'>¡Debes completar este campo!</span>}

                <input className= 'bg-gray-600 p-3 rounded-lg block w-full mb-3' type='text' placeholder='Sección' {...register('seccion', {required: true, maxLength: 5})} />
                {errors.seccion && <span className='text-red-600'>¡Debes completar este campo!</span>}

                <label htmlFor='fechaingreso' className='block text-gray-700'>Fecha de Ingreso</label>
                <input id='fechaingreso' className='bg-gray-600 p-3 rounded-lg block w-full mb-3' type='date' {...register('fechaingreso', {required: true})} />
                {errors.fechaingreso && <span className='text-red-600'>¡Debes completar este campo con una fecha válida!</span>}

                <button className='bg-indigo-600 p-3 rounded-lg block w-full text-white'>Guardar</button>
            </form>

            {params.id && (
                <div className='flex justify-end'>
                    <button className='bg-red-600 p-3 rounded-lg block w-48 mt-3' 
                        onClick={async () => { const aceptar = window.confirm('¿Estás seguro de eliminar este estudiante?');
                        if (aceptar){
                            await deleteStudent(params.id);
                            toast.success('¡Estudiante eliminado exitosamente!',{
                                position: 'top-center',
                                style: {
                                    background: '#9AD0C2',
                                    color: 'black',
                                }
                            });
                        navigate('/students');
                        }
                        }}>
                        Eliminar
                    </button>
                </div>
            )}

        </div>
    )
}