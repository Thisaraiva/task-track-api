import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';
import { IsNotEmpty } from 'class-validator';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
  @IsNotEmpty()
  status: string;

  @IsNotEmpty()
  dueDate: Date;

  completed: boolean;

  @IsNotEmpty()
  description: string;
}
