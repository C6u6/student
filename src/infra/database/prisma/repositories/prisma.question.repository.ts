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
    async findQuestionById(questionId: string): Promise<QuestionEntity | null> {
        const question = await this.prisma.questionRecord.findUnique({
            where: {
                id: questionId,
            }
        });

        if (!question) return null;

        return PrismaQuestionMappper.toDomain(question);
    }
    async findQuestionsByYear(year: number): Promise<QuestionEntity[] | null> {
        const questions = await this.prisma.questionRecord.findMany({
            where: {
                year: year,
            }
        });

        if (!questions) return null;

        return questions.map(PrismaQuestionMappper.toDomain);
    }
    async findQuestionsByTitle(title: string): Promise<QuestionEntity[] | null> {
        const questions = await this.prisma.questionRecord.findMany({
            where: {
                title: title,
            }
        });

        if (!questions) return null;

        return questions.map(PrismaQuestionMappper.toDomain);
    }
    async findQuestionsByTopic(topic: string): Promise<QuestionEntity[] | null> {
        const questions = await this.prisma.questionRecord.findMany({
            where: {
                topic: topic,
            }
        });

        if (!questions) return null;

        return questions.map(PrismaQuestionMappper.toDomain);
    }
    async findQuestionsBySubject(subject: string): Promise<QuestionEntity[] | null> {
        const questions = await this.prisma.questionRecord.findMany({
            where: {
                subject: subject,
            }
        });

        if (!questions) return null;

        return questions.map(PrismaQuestionMappper.toDomain);
    }
    async findQuestionsByInstitution(institution: string): Promise<QuestionEntity[] | null> {
        const questions = await this.prisma.questionRecord.findMany({
            where: {
                institution: institution,
            }
        });

        if (!questions) return null;

        return questions.map(PrismaQuestionMappper.toDomain);
    }
    async findQuestionsBySubjectAndTopic(subject: string, topic: string): Promise<QuestionEntity[] | null> {
        const questions = await this.prisma.questionRecord.findMany({
            where: {
                subject: subject,
                topic: topic,
            }
        });

        if (!questions) return null;

        return questions.map(PrismaQuestionMappper.toDomain);
    }   
}