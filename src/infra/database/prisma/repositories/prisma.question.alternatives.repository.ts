import { Alternatives } from '@app/entities/question.alternatives';
import { QuestionAlternativesRepository } from '@app/repositories/question.alternatives.repository';
import { Injectable } from '@nestjs/common';
import { QuestionRecordHelperForAlternatives } from '@prisma/client';
import { PrismaQuestionAlternativesMappper } from '../mappers/prisma.question.alternatives.mapper';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaQuestionAlternativesRepository implements QuestionAlternativesRepository {
    constructor(private prisma: PrismaService) {}

    async create(props: Alternatives): Promise<void> {
        const raw = PrismaQuestionAlternativesMappper.toPrisma(props);

        await this.prisma.questionRecordHelperForAlternatives.create({
            data: raw,
        });
    };

    async findAlternatives(id: string): Promise<QuestionRecordHelperForAlternatives | null> {
        const alternatives = await this.prisma.questionRecordHelperForAlternatives.findUnique({
            where: {
                ownedById: id
            }
        });

        return alternatives;
    }
}