import { IsString, IsNotEmpty, IsDateString } from 'class-validator';

export class CreateStudentDto {
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsDateString()
    @IsNotEmpty()
    fechanacimiento: Date;

    @IsString()
    @IsNotEmpty()
    nombrepadre: string;

    @IsString()
    @IsNotEmpty()
    nombremadre: string;

    @IsString()
    @IsNotEmpty()
    grado: string;

    @IsString()
    @IsNotEmpty()
    seccion: string;

    @IsDateString()
    @IsNotEmpty()
    fechaingreso: Date;
}