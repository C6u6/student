import { QuestionEntity } from "src/app/entities/question";

export class QuestionViewModel {
    static toHTTP(question: QuestionEntity) {
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
    }
}