import { QuestionEntity } from '../entities/question';
import { StudentQuestionEntity } from '../entities/student.question'

export abstract class StudentQuestionRepository {
    abstract create(question: StudentQuestionEntity): Promise<void>;
    abstract findAnsweredInTimeQuestions(studentId: string): Promise<QuestionEntity[] | StudentQuestionEntity[] | null>;
    abstract findCorrectlyAnsweredQuestions(studentId: string): Promise<QuestionEntity[] | StudentQuestionEntity[] | null>; 
    abstract findNotAnsweredInTimeQuestions(studentId: string): Promise<QuestionEntity[] | StudentQuestionEntity[] | null>;
    abstract findAllQuestionsTakenByStudentId(studentId: string): Promise<QuestionEntity[] | StudentQuestionEntity[] | null>;
    abstract findIncorrectlyAnsweredQuestions(studentId: string): Promise<QuestionEntity[] | StudentQuestionEntity[] | null>;
}