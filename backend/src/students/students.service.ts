import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './student.entity';
import { Repository } from 'typeorm';


@Injectable()
export class StudentsService {

    constructor(@InjectRepository(Student) private studentRepository: Repository<Student>){}

    async createStudent(student: CreateStudentDto) {
        const existingStudent = await this.studentRepository.findOne({ 
            where: { 
                nombre: student.nombre, 
                fechanacimiento: student.fechanacimiento 
            } 
        });
        if (existingStudent) {
            return { error: 'El estudiante ya existe', status: HttpStatus.CONFLICT };
        }
        const newStudent = this.studentRepository.create(student);
        return this.studentRepository.save(newStudent);
    }

    getStudents() {
        return this.studentRepository.find()
    }

    async getStudent(id: number) {
        const studentFound = await this.findStudentById(id);

        if (!studentFound) {
            return { error: 'Estudiante no encontrado', status: HttpStatus.NOT_FOUND };
        }

        return studentFound;
    }

    async getStudentsByGrade(grado: string): Promise<Student[]> {
        return this.studentRepository.find({
            where: {
                grado
            }
        })
    }

    async deleteStudent(id: number) {
        const studentFound = await this.findStudentById(id);

        if (!studentFound) {
            return { error: 'Estudiante no encontrado', status: HttpStatus.NOT_FOUND };
        }
        
        return this.studentRepository.delete({id});
    }

    async updateStudent(id: number, student: UpdateStudentDto) {
        const studentFound = await this.findStudentById(id);

        if (!studentFound) {
            return { error: 'Estudiante no encontrado', status: HttpStatus.NOT_FOUND };
        }

        const updateStudent = Object.assign(studentFound, student);
        return this.studentRepository.save(updateStudent);
    }

    private async findStudentById(id: number) {
        return this.studentRepository.findOne({
            where: {
                id
            }
        });
    }
}