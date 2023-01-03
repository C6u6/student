import { Injectable } from "@nestjs/common";
import { StudentEntity } from "src/app/entities/student";
import { StudentRepository } from "src/app/repositories/student.repository";
import { StudentNotFound } from "../errors/errors";
import * as bcrypt from 'bcrypt';

@Injectable()
export class ChangePassword {
    constructor(private studentRepository: StudentRepository) {}

    async execute(request: Omit<StudentEntity, 'name' | 'email'>): Promise<void> {
        const { id, password } = request;

        const student = await this.studentRepository.findById(id);

        if (!student) throw new StudentNotFound();

        // Hashing the password
        const hash = bcrypt.hashSync(password, 10);

        student.password = hash;
    }
}