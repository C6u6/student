import { StudentQuestionEntity } from "src/app/entities/student.question";

export class StudentQuestionViewModel {
    static toHTTP(studentAndQuestion: StudentQuestionEntity) {
        return {
            id: studentAndQuestion.id,
            inTime: studentAndQuestion.inTime,
            studentId: studentAndQuestion.studentId,
            secondsToAnswer: studentAndQuestion.secondsToAnswer,
            questionId: studentAndQuestion.questionId,
            correctlyAnswered: studentAndQuestion.correctlyAnswered,
        };
    }
}