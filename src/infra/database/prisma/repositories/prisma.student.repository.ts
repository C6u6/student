import { Injectable } from "@nestjs/common";
import { Student } from "../../../../app/entities/student";
import { StudentRepository } from "../../../../app/repositories/student.repository";
import { PrismaStudentMappper } from "../mappers/prisma.student.mapper";
import { PrismaService } from "../prisma.service";

@Injectable()
export class PrismaStudentRepository implements StudentRepository {
    constructor(private prisma: PrismaService) {}

    async create(student: Student): Promise<void> {

        const raw = PrismaStudentMappper.toPrisma(student);

        await this.prisma.studentRecord.create({
            data: raw,
        })
    }

    async changeEmail(StudentId: string): Promise<void> {
        // To be implemented
    }

    async changePassword(StudentId: string): Promise<void> {
        // To be implemented
    }

    async findById(studentId: string): Promise<Student | null> {
        const student = await this.prisma.studentRecord.findUnique({
            where: {
                id: studentId,
            },
        });

        if (!student) {
            return null
        };

        return PrismaStudentMappper.toDomain(student);
    }
}