import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, Repository, UpdateResult } from 'typeorm';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private repository: Repository<Student>,
  ) {}
  create(createStudentDto: CreateStudentDto): Promise<InsertResult> {
    return this.repository.insert(createStudentDto);
  }

  findAll(): Promise<Student[]> {
    return this.repository.find();
  }

  findOne(id: number): Promise<Student> {
    return this.repository.findOne(id);
  }

  update(
    id: number,
    updateStudentDto: UpdateStudentDto,
  ): Promise<UpdateResult> {
    return this.repository.update(id, updateStudentDto);
  }

  remove(id: number): void {
    this.repository.delete(id);
  }
}
