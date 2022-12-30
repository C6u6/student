import { Student, StudentEntity } from "src/app/entities/student";

export class PrismaStudentMappper {
    static toPrisma(student: StudentEntity) {
        return {
            id: student.id,
            name: student.name,
            email: student.email,
            password: student.password
        };
    };

    static toDomain(raw: StudentEntity): Student {
        return new Student({
            name: raw.name,
            email: raw.email,
            password: raw.password,
        },
        raw.id,
        );
    };
}