import { Body, Controller, Get, Post, Param, ParseIntPipe, Delete, Patch, Put } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { StudentsService } from './students.service';
import { Student } from './student.entity';
import { UpdateStudentDto } from './dto/update-student.dto';

@Controller('students')
export class StudentsController {

    constructor(private studentsService: StudentsService) {}    

    @Post('crear-alumno')
    createStudent(@Body() newStudent: CreateStudentDto) {
        return this.studentsService.createStudent(newStudent)
    }

    @Get()
    getStudents(): Promise<Student[]> {
        return this.studentsService.getStudents()
    }

    @Get(':id')
    getStudent(@Param('id', ParseIntPipe) id: number) {
        return this.studentsService.getStudent(id)
    }

    @Get('consultar-alumno/:grado')
    getStudentsByGrade(@Param('grado') grado: string): Promise<Student[]> {
        return this.studentsService.getStudentsByGrade(grado);
    }

    @Delete(':id')
    deleteStudent(@Param('id', ParseIntPipe) id: number) {
        return this.studentsService.deleteStudent(id)
    }

    @Patch(':id')
    updateStudent(@Param('id', ParseIntPipe) id: number, @Body() student: UpdateStudentDto) {
        return this.studentsService.updateStudent(id, student)
    }
}

