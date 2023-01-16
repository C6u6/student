import { Injectable } from "@nestjs/common";
import { StudentEntity } from "src/app/entities/student";
import { StudentRepository } from "src/app/repositories/student.repository";
import { StudentNotFound } from "../errors/errors";

@Injectable()
export class ChangeEmail {
    constructor(private studentRepository: StudentRepository) {}

    async execute(request: Omit<StudentEntity, 'name' | 'password'>): Promise<void> {
        const { id, email } = request;

        const student = await this.studentRepository.findStudents({id: id});

        if (!student) throw new StudentNotFound();

        student[0].props.email = email;
    }
}