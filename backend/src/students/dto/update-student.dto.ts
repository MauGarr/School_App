import { IsOptional, IsString, IsDateString } from 'class-validator';

export class UpdateStudentDto {
    @IsOptional()
    @IsString()
    nombre?: string;

    @IsOptional()
    @IsDateString()
    fechanacimiento?: Date;

    @IsOptional()
    @IsString()
    nombrepadre?: string;

    @IsOptional()
    @IsString()
    nombremadre?: string;

    @IsOptional()
    @IsString()
    grado?: string;

    @IsOptional()
    @IsString()
    seccion?: string;

    @IsOptional()
    @IsDateString()
    fechaingreso?: Date;
}