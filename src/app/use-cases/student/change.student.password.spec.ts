
import { makeStudent } from "test/factories/student.factories";
import { InMemoryStudentRepository } from "test/repositories/in.memory.repository.student";
import { StudentNotFound } from "../errors/errors";
import { ChangePassword } from "./change.student.password";

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

        // Including crypto module
        var crypto = require('crypto');
        const salt = new Uint32Array(7);
        let passwordHash;
        
        // Calling scrypt method with some of its parameter
        crypto.scrypt('securistpassword', salt,  16, (err, derivedKey) => {
            if (err) throw err;
            // Defining the hashed password
            passwordHash = derivedKey;
        });

        expect(studentRepository.students[0].password).toEqual(passwordHash);
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