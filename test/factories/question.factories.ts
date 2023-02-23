import { randomUUID } from "crypto";
import { Question, QuestionEntity } from "src/app/entities/question";

type Override = Partial<QuestionEntity>

export function makeQuestion(override: Override) {
    return new Question({
        id: randomUUID(),
        title: 'Can spiders fly?',
        subject: 'SillyQuestion',
        alternatives: ['A) Yes', 'B) NO'],
        institution: 'Example Inst',
        topic: 'Spiders',
        year: 2024,
        imagepath: '',
        ...override,
    })
}