import { Controller, Param, Get, Post, Body } from '@nestjs/common';
import { CreateStudent } from 'src/app/use-cases/student/create.user';
import { CreateStudentBody } from '../dtos/create.student.body';
import { StudentViewModel } from '../view-models/student.view.module';

@Controller()
export class AppController {
  constructor(private createStudent: CreateStudent) {};

  @Get()
  async returnemptylist() {
    return 'You are on get route.'
  }

  @Post('create/')
  async createUser(@Body() body: CreateStudentBody) {
    const { id, name, email, password } = body;

    const { student } = await this.createStudent.execute({
      id,
      name,
      email,
      password,
    })
    return {student: StudentViewModel.toHTTP(student)};
  }
}