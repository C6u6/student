import { checkValuesInProps } from "@helpers/filter.array.accordingly.to.props";
import { Question, QuestionEntity } from "src/app/entities/question";
import { QuestionRepository } from "src/app/repositories/question.repository";

export class InMemoryQuestionRepository implements QuestionRepository {
    public questions: Question[];

    async create(question: Question): Promise<void> {
        this.questions?.push(question);
    }
    
    async findQuestions(props: Partial<QuestionEntity>): Promise<QuestionEntity | QuestionEntity[] | null> {        
        if (!this.questions) return null;

        // Return the whole array
        if ((Object.keys(props)).length === 0) {
            return this.questions;
        }

        // Filter in order to get those who props properties matches with its own
        const questions = this.questions.filter(item => 
            checkValuesInProps(props, item)
        );

        if (!questions) return null;

        return questions;
    }
}