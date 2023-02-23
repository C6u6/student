import { Question, QuestionEntity } from "src/app/entities/question";

export class PrismaQuestionMappper {
    static toPrisma(question: QuestionEntity) {
        return {
            id: question.id,
            year: question.year,
            title: question.title,
            topic: question.topic,
            subject: question.subject,
            imagepath: question.imagepath,
            institution: question.institution,
        };
    };

    static toDomain(raw: QuestionEntity) {
        return new Question({
            year: raw.year,
            title: raw.title,
            topic: raw.topic,
            subject: raw.subject,
            imagepath: raw.imagepath,
            institution: raw.institution,
        });
    };
};