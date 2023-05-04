// import { Injectable, NotFoundException } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { CreateTaskDto } from './dto/create-task.dto';
// import { UpdateTaskDto } from './dto/update-task.dto';
// import { Task } from './entities/task.entity';

// @Injectable()
// export class TasksService {
//   constructor(
//     @InjectRepository(Task)
//     private taskRepository: Repository<Task>,
//   ) { }

//   async create(createTaskDto: CreateTaskDto): Promise<Task> {
//     const task = this.taskRepository.create(createTaskDto);
//     await this.taskRepository.save(task);
//     return task;
//   }

//   async findAll(): Promise<Task[]> {
//     return await this.taskRepository.find();
//   }

//   async findOne(id: string): Promise<Task> {
//     try {
//       const task = await this.taskRepository.findOneOrFail({ where: { id } });
//       return task;
//     } catch (error) {
//       throw new NotFoundException(`Task with ID ${id} not found`);
//     }
//   }

//   async update(id: string, updateTaskDto: UpdateTaskDto): Promise<Task> {
//     const task = await this.findOne(id);
//     const updatedTask = Object.assign(task, updateTaskDto);
//     return await this.taskRepository.save(updatedTask);
//   }

//   async remove(id: string): Promise<void> {
//     const task = await this.findOne(id);
//     await this.taskRepository.remove(task);
//   }
// }


import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  create(createTaskDto: CreateTaskDto) {
    return 'This action adds a new task';
  }

  findAll() {
    return `This action returns all tasks`;
  }

  findOne(id: number) {
    return `This action returns a #${id} task`;
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}