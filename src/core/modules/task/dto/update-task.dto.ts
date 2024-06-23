import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';
import { IsBoolean, IsDate, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
  @ApiProperty({
    example: 'Task status',
    description: 'The status of the task',
  })

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
  @IsString()
  @IsNotEmpty()
  description: string;
}
