import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentsService {
  records: Student[] = [
    {
      englishLevel: 'Native',
      id: 1,
      name: 'John Doe',
    },
  ];
  create(createStudentDto: CreateStudentDto): Student {
    const nextId =
      Math.max(0, ...this.records.map((student) => student.id)) + 1;
    const newStudent: Student = {
      id: nextId,
      ...createStudentDto,
    };
    this.records.push(newStudent);
    return newStudent;
  }

  findAll(): Student[] {
    return this.records;
  }

  findOne(id: number): Student | undefined {
    return this.records.find((student) => student.id === id);
  }

  update(id: number, updateStudentDto: UpdateStudentDto): Student {
    const student = this.findOne(id);
    if (!student) {
      throw new NotFoundException('Student not found');
    }
    Object.assign(student, updateStudentDto);
    return student;
  }

  remove(id: number): void {
    const studentIndex = this.records.findIndex((student) => student.id === id);
    if (studentIndex === -1) {
      throw new NotFoundException('Student not found');
    }
    this.records.splice(studentIndex, 1);
  }
}
