import { Injectable } from "@nestjs/common";
import { QuestionRepository } from "src/app/repositories/question.repository";
import { Question, QuestionEntity } from '../../entities/question';

interface CreateQuestionResponse {
    question: Question;
}

@Injectable()
export class CreateQuestion {
    constructor(private questionRepository: QuestionRepository) {}

    async execute(request: QuestionEntity): Promise<CreateQuestionResponse> {
        const {
            institution, subject, topic, title,
            year, alternatives, imagepath
        } = request;

        const question = new Question({
            alternatives, 
            institution, 
            imagepath,
            subject, 
            topic, 
            title,
            year, 
    });

        await this.questionRepository.create(question)

        return { question };
    }
}