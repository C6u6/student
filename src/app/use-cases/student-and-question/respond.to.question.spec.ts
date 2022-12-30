import { QuestionTakenByStudent } from "@app/entities/student.interaction"
import { makeQuestion } from "@test/factories/question.factories";
import { makeStudent } from "@test/factories/student.factories"

describe('Respond to question', () => {
    it('should create a relation between a student and a question', async () => {
        const student = makeStudent({}), question = makeQuestion({});

        const studentAndQuestion = new QuestionTakenByStudent({
            studentId: student.id,
            questionId: question.id,
            answeredCorrectly: true,
            runOutOfTime: false,
        });

        expect(studentAndQuestion).toBeTruthy();
    })
})