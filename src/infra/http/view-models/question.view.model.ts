import { QuestionEntity } from "src/app/entities/question";

export class QuestionViewModel {
    static toHTTP(question: QuestionEntity, alternativesToAttach: string[]) {
        return {
            id: question.id,
            year: question.year,
            title: question.title,
            topic: question.topic,
            subject: question.subject,
            imagepath: question.imagepath,
            institution: question.institution,
            alternatives: alternativesToAttach,
        };
    }
}