import { StudentQuestion, StudentQuestionEntity } from "src/app/entities/student.question";

export class PrismaStudentInteractionMappper {
    static toPrisma(studentAndQuetion: StudentQuestionEntity) {
        return {
            id: studentAndQuetion.id,
            studentId: studentAndQuetion.studentId,
            questionId: studentAndQuetion.questionId,
            correctlyAnswered: studentAndQuetion.correctlyAnswered,
            inTime: studentAndQuetion.inTime,
        };
    };

    static toDomain(raw) {
        return new StudentQuestion({
            studentId: raw.studentId,
            questionId: raw.questionId,
            correctlyAnswered: raw.correctlyAnswered,
            inTime: raw.inTime,
        },
        raw.id,
        );
    }
}