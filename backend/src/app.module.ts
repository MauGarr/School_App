import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './students/students.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'maugarcia123.',
    database: 'students',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
  }),

  StudentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
