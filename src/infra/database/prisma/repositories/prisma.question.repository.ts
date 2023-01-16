import { Injectable } from '@nestjs/common';
import { QuestionEntity } from 'src/app/entities/question';
import { QuestionRepository } from '../../../../app/repositories/question.repository'
import { PrismaQuestionMappper } from '../mappers/prisma.questions.mapper';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaQuestionRepository implements QuestionRepository {
    constructor(private prisma: PrismaService) {}

    async create(question: QuestionEntity): Promise<void> {
        const raw = PrismaQuestionMappper.toPrisma(question);

        await this.prisma.questionRecord.create({
            data: raw,
        })

    }
    
    async findQuestions(props: Partial<QuestionEntity>): Promise<QuestionEntity | QuestionEntity[] | null> {
        if ((Object.keys(props)).length === 0) {
            const questions = await this.prisma.questionRecord.findMany();
            if (!questions) return null;

            return questions.map(PrismaQuestionMappper.toDomain);
        }

        const questions = await this.prisma.questionRecord.findMany({
            where: props,
        });

        if (!questions) return null;

        return questions.map(PrismaQuestionMappper.toDomain);
    }
}