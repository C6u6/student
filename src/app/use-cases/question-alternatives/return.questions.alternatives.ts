import { QuestionAlternativesRepository } from "@app/repositories/question.alternatives.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ReturnQuestionsAlternatives {
    constructor(private questionAlternativesRepository: QuestionAlternativesRepository) {};

    async execute(id: string) {
        const alternatives = await this.questionAlternativesRepository.findAlternatives(id);

        return alternatives;
    };
};