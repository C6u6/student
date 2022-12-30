import { makeStudent } from "test/factories/student.factories";
import { InMemoryStudentRepository } from "test/repositories/in.memory.repository.student";
import { StudentNotFound } from "../errors/errors";
import { ChangeEmail } from "./change.student.email";

describe('Change student email', () => {
    it('should be able to change the student email', async () => {
        const studentRepository = new InMemoryStudentRepository();
        const changeEmail = new ChangeEmail(studentRepository);

        const student = makeStudent({});

        await studentRepository.create(student);

        await changeEmail.execute({
            id: student._id,
            email: 'MyNewEmail@example.com',
        });

        expect(studentRepository.students[0].email).toEqual('MyNewEmail@example.com');
    });

    it('should not be able to change an email of a non-existing student', () => {
        const studentRepository = new InMemoryStudentRepository();
        const changedEmail = new ChangeEmail(studentRepository);

        expect(() => {
            return changedEmail.execute({
                id: 'fake-notification-id',
                email: 'something@example.com'
            });
        }).rejects.toThrow(StudentNotFound);
    })
})