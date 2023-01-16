import { QuestionEntity } from '../entities/question';

export abstract class QuestionRepository {
    abstract create(question: QuestionEntity): Promise<void>;
    abstract findQuestions(props: Partial<QuestionEntity>): Promise<QuestionEntity | QuestionEntity[] | null>;
}