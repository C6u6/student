import { makeStudent } from "@test/factories/student.factories";
import { InMemoryStudentRepository } from "@test/repositories/in.memory.repository.student";
import { CreateStudent } from "./create.user";
import { ReturnStudents } from "./return.student";

describe('return students', () => {
    it('should be able to return any student that has properties that match the props', () => {
        
        // specific info for creating some questions
        const info = [
            {
                name: 'example',
                email: 'unique@email.com',
                password: '1234'
            }, {
                name: 'example',
                email: 'unique@email.com2',
                password: '12a4'
            }, {
                name: 'example',
                email: 'unique@email.com3',
                password: '1224'
            }, {
                name: 'example',
                email: 'unique@email.com4',
                password: '1214'
            }, {
                name: 'example',
                email: 'unique@email.com5',
                password: '1234'
            }, {
                name: 'example',
                email: 'unique@email.com6',
                password: '1234'
            }
        ];

        const studentRepository = new InMemoryStudentRepository();
        const returnStudents = new ReturnStudents(studentRepository);
        const createStudent = new CreateStudent(studentRepository);

        // Generate many similar students
        info.forEach((props) => {
            let student = makeStudent({...props});
            createStudent.execute(student);
        });

        expect(returnStudents.execute(info[0])).toBeTruthy();


        // With this props, every student will be returned
        let nonExistingStudent = {
            name: 'non-exsting one',
        }

        // Expected an empty object
        let keys = Object.keys(returnStudents.execute(nonExistingStudent));
        expect(keys.length).toEqual(0);

        // Expect the return of every student
        expect(returnStudents.execute({})).toBeTruthy();
    })
})