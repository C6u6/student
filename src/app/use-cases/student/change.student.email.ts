import { Injectable } from "@nestjs/common";
import { StudentEntity } from "src/app/entities/student";
import { StudentRepository } from "src/app/repositories/student.repository";
import { StudentNotFound } from "../errors/errors";

@Injectable()
export class ChangeEmail {
    constructor(private studentRepository: StudentRepository) {}

    async execute(request: StudentEntity): Promise<void> {
        const { id, email } = request;

        const student = await this.studentRepository.findById(id);

        if (!student) throw new StudentNotFound();

        student.email = email;
    }
}