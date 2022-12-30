import { Question, QuestionEntity } from "src/app/entities/question";


export class PrismaQuestionMappper {
    static toPrisma(question: QuestionEntity) {
        return {
            id: question.id,
            year: question.year,
            title: question.title,
            topic: question.topic,
            image: question.image,
            subject: question.subject,
            institution: question.institution,
            alternatives: question.alternatives,
        };
    };

    static toDomain(raw: QuestionEntity) {
        return new Question({
            id: raw.id,
            year: raw.year,
            title: raw.title,
            topic: raw.topic,
            image: raw.image,
            subject: raw.subject,
            institution: raw.institution,
            alternatives: raw.alternatives,
        });
    };
};