import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'students'})

export class Student {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50, nullable: false })
    nombre: string;

    @Column({ type: 'date', nullable: false })
    fechanacimiento: Date;

    @Column({ length: 50, nullable: false })
    nombrepadre: string;
    
    @Column({ length: 50, nullable: false })
    nombremadre: string;
    
    @Column({ length: 50, nullable: false })
    grado: string;
    
    @Column({ length: 5, nullable: false })
    seccion: string;
    
    @Column({ type: 'date', nullable: false })
    fechaingreso: Date;
}
