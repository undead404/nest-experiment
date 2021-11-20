import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateStudentDto {
  @IsNotEmpty()
  @IsString()
  englishLevel: string;

  @IsNumber()
  id: number;

  @IsNotEmpty()
  @IsString()
  name: string;
}
