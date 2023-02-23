import { QuestionAlternativesRepository } from "@app/repositories/question.alternatives.repository";
import { Alternatives, AlternativesEntity } from '@app/entities/question.alternatives';
import { Injectable } from "@nestjs/common";

interface CreateAlternativesResponse {
    alternativesToBeAttachedToQuestion: Alternatives;
};

@Injectable()
export class CreateQuestionAlternatives {
    constructor(private questionAlternativesRepository: QuestionAlternativesRepository) {}

    async execute(request: AlternativesEntity): Promise<CreateAlternativesResponse> {

        const alternativesToBeAttachedToQuestion = new Alternatives(request);

        await this.questionAlternativesRepository.create(alternativesToBeAttachedToQuestion);

        return { alternativesToBeAttachedToQuestion };
    }
};