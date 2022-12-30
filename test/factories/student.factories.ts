import { Student, StudentEntity } from "src/app/entities/student";

type Override = Partial<StudentEntity>;

export function makeStudent(override: Override) {
    return new Student({
        name: 'Student-test',
        email: 'EmailExample@example.com',
        password: '12345678',
        ...override,
    })
}