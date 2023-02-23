import { StudentQuestionEntity } from "src/app/entities/student.question";
import { StudentQuestionRepository } from "src/app/repositories/student.question.repository";

export class InMemoryStudentAndQuestionRepository implements StudentQuestionRepository {
    public questionsRelatedToStudent: StudentQuestionEntity[];

    async create(question: StudentQuestionEntity): Promise<void> {
        this.questionsRelatedToStudent.push(question);
    }

    async findAnsweredInTimeQuestions(studentId: string): Promise<StudentQuestionEntity[] | null> {
        const questions = this.questionsRelatedToStudent.filter(
            (item) => (item.studentId === studentId) && (item.inTime === true)
        )

        if (!questions) {
            return null;
        }
        
        return questions;
    }

    async findNotAnsweredInTimeQuestions(studentId: string):  Promise<StudentQuestionEntity[] | null> {
        const questions = this.questionsRelatedToStudent.filter(
            (item) => (item.studentId === studentId) && (item.inTime === false)
        )

        if (!questions) {
            return null;
        }
        
        return questions;
    }

    async findCorrectlyAnsweredQuestions(studentId: string):  Promise<StudentQuestionEntity[] | null> {
        const questions = this.questionsRelatedToStudent.filter(
            (item) => (item.studentId === studentId) && (item.correctlyAnswered === true)
        )

        if (!questions) {
            return null;
        }
        
        return questions;
    }

    async findIncorrectlyAnsweredQuestions(studentId: string):  Promise<StudentQuestionEntity[] | null> {
        const questions = this.questionsRelatedToStudent.filter(
            (item) => (item.studentId === studentId) && (item.correctlyAnswered === false)
        )

        if (!questions) {
            return null;
        }
        
        return questions;
    }

    async findAllQuestionsTakenByStudentId(studentId: string):  Promise<StudentQuestionEntity[] | null> {
        const questions = this.questionsRelatedToStudent.filter(
            (item) => (item.studentId === studentId)
        )

        if (!questions) {
            return null;
        }
        
        return questions;
    }
}