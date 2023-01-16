import { Injectable } from "@nestjs/common";
import { Student, StudentEntity } from "../../../../app/entities/student";
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

    async findStudents(props: Partial<StudentEntity>): Promise<Student | Student[] | null> {
        const students = await this.prisma.studentRecord.findMany({
            where: props
        });

        if (!students) null;

        return students.map(PrismaStudentMappper.toDomain);
    }
}