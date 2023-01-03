import { Injectable } from "@nestjs/common";
import { StudentQuestionEntity } from "src/app/entities/student.question";
import { StudentQuestionRepository } from "src/app/repositories/student.question.repository";
import { PrismaStudentInteractionMappper } from "../mappers/prisma.student.interaction.mapper";
import { PrismaService } from "../prisma.service";

@Injectable()
export class PrismaStudentInteractionRepository implements StudentQuestionRepository {
    constructor(private prisma: PrismaService) {}

    async create(question: StudentQuestionEntity): Promise<void> {
        const raw = PrismaStudentInteractionMappper.toPrisma(question);

        await this.prisma.studentQuestionRecord.create({
            data: raw,
        })
    }
    async findAnsweredInTimeQuestions(studentId: string): Promise<StudentQuestionEntity[] | null> {
        const questionsIds = await this.prisma.studentQuestionRecord.findMany({
            where: {
                studentId: studentId,
                inTime: false,
            },
            select: {
                questionId: true,
            }
        });

        if (!questionsIds) return null;

        const questions = questionsIds.map(
            async (question) => await this.prisma.questionRecord.findUnique({
                where: {
                    id: question.questionId,
                }
            })
        ) 

        if (!questions) return null;

        return questions.map(PrismaStudentInteractionMappper.toDomain);
    }
    async findCorrectlyAnsweredQuestions(studentId: string): Promise<StudentQuestionEntity[] | null> {
        const questionsIds = await this.prisma.studentQuestionRecord.findMany({
            where: {
                studentId: studentId,
                correctlyAnswered: true,
            },
            select: {
                questionId: true,
            }
        });

        if (!questionsIds) return null;

        const questions = questionsIds.map(
            async (question) => await this.prisma.questionRecord.findUnique({
                where: {
                    id: question.questionId,
                }
            })
        ) 

        if (!questions) return null;

        return questions.map(PrismaStudentInteractionMappper.toDomain);
    }
    async findNotAnsweredInTimeQuestions(studentId: string): Promise<StudentQuestionEntity[] | null> {
        const questionsIds = await this.prisma.studentQuestionRecord.findMany({
            where: {
                studentId: studentId,
                correctlyAnswered: true,
            },
            select: {
                questionId: true,
            }
        });

        if (!questionsIds) return null;

        const questions = questionsIds.map(
            async (question) => await this.prisma.questionRecord.findUnique({
                where: {
                    id: question.questionId,
                }
            })
        ) 

        if (!questions) return null;

        return questions.map(PrismaStudentInteractionMappper.toDomain);
    }
    async findAllQuestionsTakenByStudentId(studentId: string): Promise<StudentQuestionEntity[] | null> {
        const questionsIds = await this.prisma.studentQuestionRecord.findMany({
            where: {
                studentId: studentId,
            },
            select: {
                questionId: true,
            }
        });

        if (!questionsIds) return null;

        const questions = questionsIds.map(
            async (question) => await this.prisma.questionRecord.findUnique({
                where: {
                    id: question.questionId,
                }
            })
        ) 

        if (!questions) return null;

        return questions.map(PrismaStudentInteractionMappper.toDomain);
    }
    async findIncorrectlyAnsweredQuestions(studentId: string): Promise<StudentQuestionEntity[] | null> {
        const questionsIds = await this.prisma.studentQuestionRecord.findMany({
            where: {
                studentId: studentId,
                correctlyAnswered: false,
            },
            select: {
                questionId: true,
            }
        });

        if (!questionsIds) return null;

        const questions = questionsIds.map(
            async (question) => await this.prisma.questionRecord.findUnique({
                where: {
                    id: question.questionId,
                }
            })
        ) 

        if (!questions) return null;

        return questions.map(PrismaStudentInteractionMappper.toDomain);
    }
}