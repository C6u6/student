import { randomUUID } from "crypto";
import { Question } from "src/app/entities/question";

describe('Question', () => {
    it('should be able to create a question', () => {
        const question = new Question({
            title: 'Can spiders fly?',
            subject: 'SillyQuestion',
            alternatives: 'A) Yes B) NO',
            institution: 'Example Inst',
            topic: 'Spiders',
            year: 2024,
            imagepath: '',
        });

        expect(question).toBeTruthy();
    });
});