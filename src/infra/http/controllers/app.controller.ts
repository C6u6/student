import { Controller, Param, Get, Post, Body, Patch, Query, Session, Req, UseGuards, BadRequestException } from '@nestjs/common';
import { CreateStudent } from 'src/app/use-cases/student/create.user';
import { CreateQuestion } from '@app/use-cases/question/create.question';
import { CreateQuestionBody } from '../dtos/create.questions.body';
import { CreateStudentBody } from '../dtos/create.student.body';
import { CreateStudentQuestionBody } from '../dtos/create.student.question.body';
import { StudentViewModel } from '../view-models/student.view.module';
import { QuestionViewModel } from '../view-models/question.view.model';
import { RespondToQuestion } from '@app/use-cases/student-and-question/respond.to.question';
import { StudentQuestionViewModel } from '../view-models/student.and.question';
import { ChangeEmail } from '@app/use-cases/student/change.student.email';
import { ChangePassword } from '@app/use-cases/student/change.student.password';
import * as bcrypt from 'bcrypt';
import { ReturnQuestions } from '@app/use-cases/question/return.questions';
import { ReturnStudents } from '@app/use-cases/student/return.student';
import { StudentEntity } from '@app/entities/student';
import { QuestionEntity } from '@app/entities/question';
import { LoginRequired } from '../decorators/login.required.decorator';

@Controller()
export class AppController {
  constructor(
    private createStudent: CreateStudent, private createQuestion: CreateQuestion,
    private createStudentQuestion: RespondToQuestion, private changeEmail: ChangeEmail,
    private changePassword: ChangePassword, private returnQuestions: ReturnQuestions,
    private returnStudents: ReturnStudents,
    ) {};

  @Get('students-record/')
  async studentsList(@Query() props: Partial<StudentEntity>) {
    const students = this.returnStudents.execute(props);
    return students;
  }

  @Get('question-library/')
  async questionsList(@Query() props: Partial<QuestionEntity>) {
    const questions = await this.returnQuestions.execute(props);
    return questions;
  }

  @Get('students-and-questions/')
  async studentQuestionList() {
    return 'You are on get route.'
  };

  @Get()
  /* @UseGuards(LoginRequired) */
  async account() {
    return "You're in the account route";
  };

  @Get('login')
  async login(@Session() session) {
    return `The last user had id equal to ${session.userId}`;
  }

  @Post('logout')
  async logout() {
    return 'so'
  }

  @Post('create/student')
  async createUser(@Body() body: CreateStudentBody, @Req() request) {
    let { id, name, email, password } = body;

    let copy = {
      id: id,
      name: name,
      email: email,
      password: password
    }

    // Check whether the email is unique
    const potentialStudentWithReceivedEmail = this.returnStudents.execute({email: copy.email});
    if (await potentialStudentWithReceivedEmail) throw new BadRequestException('Email entered was already registered');

    // Hashing the password
    const hash = bcrypt.hashSync(copy.password, 10);
    copy.password = hash;

    const { student } = await this.createStudent.execute({...copy});

    // Store the id of the user
    request.session.set('userId', student._id);

    return {student: StudentViewModel.toHTTP(student)};
  }

  @Post('create/question')
  async createQuestionView(@Body() body: CreateQuestionBody) {
    const {id, year, title, topic, subject, imagepath, institution, alternatives } = body;

    const { question } = await this.createQuestion.execute({
      id,
      year,
      title,
      topic, 
      subject,
      imagepath,
      institution,
      alternatives 
    });
    return {question: QuestionViewModel.toHTTP(question)};
  }

  @Post('create/response')
  async createResponse(@Body() body: CreateStudentQuestionBody) {
    const { id, inTime, studentId, questionId, correctlyAnswered } = body;

    const { questionTaken } = await this.createStudentQuestion.execute({
      id,
      inTime,
      studentId,
      questionId,
      correctlyAnswered
    });
    return {response: StudentQuestionViewModel.toHTTP(questionTaken)}
  }

  /* @Patch('changepassword/:id/:newEmail')
  async alterEmailView(@Param('id') id: string, @Param('newEmail') newEmail: string): Promise<void> {
    this.changeEmail.execute({
      id: id,
      email: newEmail,
    })
  }

  @Patch('changepassword/:id/:newPassword')
  async alterPasswordView(@Param('id') id: string, @Param('newPassword') newPassword: string): Promise<void> {
    this.changePassword.execute({
      id: id,
      password: newPassword
    })
  } */
}