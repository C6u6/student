import { Injectable } from "@nestjs/common";
import { StudentRepository } from "src/app/repositories/student.repository";
import { Student, StudentEntity } from '../../entities/student';

interface CreateStudentResponse {
    student: Student;
}

@Injectable()
export class CreateStudent {
    constructor(private studentRepository: StudentRepository) {}

    async execute(request: StudentEntity): Promise<CreateStudentResponse> {
        const {name, email, password } = request;

        const student = new Student({
            name,
            email,
            password,
    });

        await this.studentRepository.create(student)

        return { student };
    }
}