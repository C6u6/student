import { Student, StudentEntity } from '../entities/student';

export abstract class StudentRepository {
    abstract create(student: StudentEntity): Promise<void>;
    abstract changeEmail(studentId: string, newEmail: string): Promise<void>;
    abstract changePassword(studentId: string, newPassword: string): Promise<void>;
    abstract findStudents(props: Partial<StudentEntity>): Promise<Student | Student[] | null>;
}