import { QuestionEntity } from "@app/entities/question";
import { QuestionRepository } from "@app/repositories/question.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ReturnQuestions {
    constructor(private questionRepository: QuestionRepository){};

    async execute(props: Partial<QuestionEntity>) {
        const questions = await this.questionRepository.findQuestions(props);

        return questions;
    }
}