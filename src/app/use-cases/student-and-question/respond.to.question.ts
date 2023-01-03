import { Injectable } from "@nestjs/common";
import { StudentQuestion, StudentQuestionEntity } from "src/app/entities/student.question";
import { StudentQuestionRepository } from "src/app/repositories/student.question.repository";

@Injectable()
export class RespondToQuestion {
    constructor(private studentInteractionRepository: StudentQuestionRepository) {}

    async execute(request: StudentQuestionEntity) {
        const { questionId, studentId, inTime, correctlyAnswered } = request;

        const questionTaken = new StudentQuestion({  
            inTime,
            studentId,
            questionId,
            correctlyAnswered,
        });

        await this.studentInteractionRepository.create(questionTaken);

        return { questionTaken };
    }
}