import { StudentEntity } from '../entities/student';

export abstract class StudentRepository {
    abstract create(student: StudentEntity): Promise<void>;
    abstract findById(studentId: string): Promise<StudentEntity | null>;
    abstract changeEmail(studentId: string, newEmail: string): Promise<void>;
    abstract changePassword(studentId: string, newPassword: string): Promise<void>;
}