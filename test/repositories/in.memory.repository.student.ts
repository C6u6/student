import { StudentNotFound } from "@app/use-cases/errors/errors";
import { checkValuesInProps } from "@helpers/filter.array.accordingly.to.props";
import { Student, StudentEntity } from "src/app/entities/student";
import { StudentRepository } from "src/app/repositories/student.repository";

export class InMemoryStudentRepository implements StudentRepository {
    public students: Student[] = [];

    async create(student: Student) {
        this.students.push(student);
    }

    async findStudents(props: Partial<StudentEntity>): Promise<Student | Student[] | []> {
        // Return the whole array
        if ((Object.keys(props)).length === 0) {
            if (!this.students) return [];

            return this.students;
        }
        
        // Filter in order to get those who props properties matches with its own
        const students = this.students.filter(item => 
            checkValuesInProps(props, item)
        );

        if (!students) {
            return [];
        }

        return students;
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
    }
}