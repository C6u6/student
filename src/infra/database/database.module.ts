import { QuestionAlternativesRepository } from "@app/repositories/question.alternatives.repository";
import { QuestionRepository } from "@app/repositories/question.repository";
import { StudentQuestionRepository } from "@app/repositories/student.question.repository";
import { Module } from "@nestjs/common";
import { StudentRepository } from "src/app/repositories/student.repository";
import { PrismaService } from "./prisma/prisma.service";
import { PrismaQuestionAlternativesRepository } from "./prisma/repositories/prisma.question.alternatives.repository";
import { PrismaQuestionRepository } from "./prisma/repositories/prisma.question.repository";
import { PrismaStudentInteractionRepository } from "./prisma/repositories/prisma.student.interaction.repository";
import { PrismaStudentRepository } from "./prisma/repositories/prisma.student.repository";

@Module({
    providers: [
        PrismaService,
        {
            provide: StudentRepository,
            useClass: PrismaStudentRepository
        }, 
        {
            provide: QuestionRepository,
            useClass: PrismaQuestionRepository
        },
        {
            provide: StudentQuestionRepository,
            useClass: PrismaStudentInteractionRepository
        }, 
        {
            provide: QuestionAlternativesRepository,
            useClass: PrismaQuestionAlternativesRepository
        }
    ],
    exports: [StudentRepository, QuestionRepository, StudentQuestionRepository, QuestionAlternativesRepository],
})

export class DatabaseModule {}