import { Student } from '../../entities/student';

describe('Student', () => {
    it('should be able to create a student', () => {
        const student = new Student({
            name: 'Name',
            email: 'student@email.com',
            password: 'password'
        });

        expect(student).toBeTruthy();
    });
});