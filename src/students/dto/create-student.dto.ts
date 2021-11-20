import { IsNotEmpty, IsString } from 'class-validator';

export class CreateStudentDto {
  @IsNotEmpty()
  @IsString()
  englishLevel: string;

  @IsNotEmpty()
  @IsString()
  name: string;
}
