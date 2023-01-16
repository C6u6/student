export class StudentNotFound extends Error{
    constructor() {
        super('Student not found.')
    }
}

export class QuestionNotFound extends Error{
    constructor() {
        super('Question not found.')
    }
}