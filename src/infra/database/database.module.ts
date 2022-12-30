import { Module } from "@nestjs/common";
import { StudentRepository } from "src/app/repositories/student.repository";
import { PrismaService } from "./prisma/prisma.service";
import { PrismaStudentRepository } from "./prisma/repositories/prisma.student.repository";

@Module({
    providers: [
        PrismaService,
        {
            provide: StudentRepository,
            useClass: PrismaStudentRepository
        }
    ],
    exports: [StudentRepository],
})

export class DatabaseModule {}