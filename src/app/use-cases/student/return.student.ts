import { StudentEntity } from "@app/entities/student";
import { StudentRepository } from "@app/repositories/student.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ReturnStudents {
    constructor(private studentRepository: StudentRepository) {}

    async execute(props: Partial<StudentEntity>) {
        const students = await this.studentRepository.findStudents(props);

        return students;
    }
}