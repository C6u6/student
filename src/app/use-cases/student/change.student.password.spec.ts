import { makeStudent } from "test/factories/student.factories";
import { InMemoryStudentRepository } from "test/repositories/in.memory.repository.student";
import { StudentNotFound } from "../errors/errors";
import { ChangePassword } from "./change.student.password";
import * as bcrypt from 'bcrypt';

describe('Change student email', () => {
    it('should be able to change the student password', async () => {
        const studentRepository = new InMemoryStudentRepository();
        const changePassword = new ChangePassword(studentRepository);

        const student = makeStudent({});

        await studentRepository.create(student);

        await changePassword.execute({
            id: student._id,
            password: 'securistpassword',
        });


        expect(bcrypt.compareSync('securistpassword', studentRepository.students[0].password)).toBeTruthy();
    });

    it('should not be able to change an email of a non-existing student', () => {
        const studentRepository = new InMemoryStudentRepository();
        const changedPassword = new ChangePassword(studentRepository);

        expect(() => {
            return changedPassword.execute({
                id: 'fake-notification-id',
                password: 'somenewpassword'
            });
        }).rejects.toThrow(StudentNotFound);
    })
})