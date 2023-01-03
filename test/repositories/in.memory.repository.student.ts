import { StudentNotFound } from "@app/use-cases/errors/errors";
import { Student, StudentEntity } from "src/app/entities/student";
import { StudentRepository } from "src/app/repositories/student.repository";

export class InMemoryStudentRepository implements StudentRepository {
    public students: Student[] = [];

    async create(student: Student) {
        this.students.push(student);
    }

    async findById(studentId: string): Promise<StudentEntity | null> {
        const student = this.students.find(
            (item) => (item.id === studentId)
        );

        if (!student) {
            return null;
        }

        return student;
    }

    async changeEmail(studentId: string, newEmail: string): Promise<void> {
        const student = this.students.find(
            (item) => (item.id === studentId)
        );

        if (!student) throw new StudentNotFound();

        student.email = newEmail;
    }

    async changePassword(studentId: string, newPassword: string): Promise<void> {
        const student = this.students.find(
            (item) => (item.id === studentId)
        );

        if (!student)  throw new StudentNotFound();

        // Including crypto module
        var crypto = require('crypto');
        const salt = new Uint32Array(7);
        let passwordHash;
        
        // Calling scrypt method with some of its parameter
        crypto.scrypt(newPassword, salt,  16, (err, derivedKey) => {
            if (err) throw err;
            // Defining the hashed password
            passwordHash = derivedKey;
        });

        student.password = passwordHash;
    }
}