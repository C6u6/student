import { StudentQuestion, StudentQuestionEntity } from "src/app/entities/student.question";

export class PrismaStudentInteractionMappper {
    static toPrisma(studentAndQuestion: StudentQuestionEntity) {
        return {
            id: studentAndQuestion.id,
            studentId: studentAndQuestion.studentId,
            questionId: studentAndQuestion.questionId,
            secondsToAnswer: studentAndQuestion.secondsToAnswer,
            correctlyAnswered: studentAndQuestion.correctlyAnswered,
            inTime: studentAndQuestion.inTime,
        };
    };

    static toDomain(raw) {
        return new StudentQuestion({
            studentId: raw.studentId,
            questionId: raw.questionId,
            secondsToAnswer: raw.secondsToAnswer,
            correctlyAnswered: raw.correctlyAnswered,
            inTime: raw.inTime,
        },
        raw.id,
        );
    }
}