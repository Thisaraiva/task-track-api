import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsDate, IsNotEmpty, IsString } from 'class-validator';

export class CreateTaskDto {
  @ApiProperty({
    example: 'Task status',
    description: 'The status of the task',
  })
  @IsNotEmpty()
  @IsString()
  status: string;

  @ApiProperty({
    example: '2021-07-01',
    description: 'The due date of the task',
  })
  @IsNotEmpty()
  dueDate: Date;

  @ApiProperty({
    example: 'To check if the task is completed or not',
    description: 'True or false to check if the task is completed or not',
  })
  @IsBoolean()
  completed: boolean;

  @ApiProperty({
    example: 'Task description',
    description: 'The description of the task',
  })
  @IsNotEmpty()
  @IsString()
  description: string;
}
