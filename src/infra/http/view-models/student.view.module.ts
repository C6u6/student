import { StudentEntity } from "../../../app/entities/student";

export class StudentViewModel {
    static toHTTP(student: StudentEntity) {
        return {
            id: student.id,
            name: student.name,
            email: student.email,
            password: student.password,
        };
    }
}