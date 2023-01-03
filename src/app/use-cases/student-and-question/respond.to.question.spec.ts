
import { StudentQuestion } from "@app/entities/student.question";
import { makeQuestion } from "@test/factories/question.factories";
import { makeStudent } from "@test/factories/student.factories"

describe('Respond to question', () => {
    it('should create a relation between a student and a question', async () => {
        const student = makeStudent({}), question = makeQuestion({});

        const studentAndQuestion = new StudentQuestion({
            studentId: student.id,
            questionId: question.id,
            correctlyAnswered: true,
            inTime: false,
        });

        expect(studentAndQuestion).toBeTruthy();
    })
})