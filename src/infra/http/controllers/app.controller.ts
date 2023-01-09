import { Controller, Param, Get, Post, Body, HttpCode, Patch } from '@nestjs/common';
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


@Controller()
export class AppController {
  constructor(
    private createStudent: CreateStudent, private createQuestion: CreateQuestion,
    private createStudentQuestion: RespondToQuestion, private changeEmail: ChangeEmail,
    private changePassword: ChangePassword, private returnQuestions: ReturnQuestions,
    ) {};

  @Get('students-record/')
  async studentsList() {
    return 'You are on get route.'
  }

  @Get('question-library/')
  async questionsList(
    @Param('year') year: number, @Param('title') title: string, @Param('topic') topic: string,
    @Param('subject') subject: string, @Param('institution') institution: string
    ) {
    // Pass only the fields that are not invalid
    const allFields = [year, title, topic, subject, institution];
    let validFields = {};

    // Validate now
    allFields.forEach( item => {
      if (!item) return;
      validFields[item] = item;
    });

    const questions = await this.returnQuestions.execute(validFields);
    return questions;
  }

  @Get('students-and-questions/')
  async studentQuestionList() {
    return 'You are on get route.'
  }

  @Post('create/student')
  async createUser(@Body() body: CreateStudentBody) {
    let { id, name, email, password } = body;

    let copy = {
      id: id,
      name: name,
      email: email,
      password: password
    }

    // Hashing the password
    const hash = bcrypt.hashSync(copy.password, 10);

    copy.password = hash;

    const { student } = await this.createStudent.execute({...copy});
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
    const { id, inTime, studentId, questionId, correctlyAnswered} = body;

    const { questionTaken } = await this.createStudentQuestion.execute({
      id,
      inTime,
      studentId,
      questionId,
      correctlyAnswered
    });
    return {response: StudentQuestionViewModel.toHTTP(questionTaken)}
  }

  @Patch('changepassword/:id/:newEmail')
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
  }

}