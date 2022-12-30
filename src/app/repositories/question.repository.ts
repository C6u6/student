import { QuestionEntity } from '../entities/question';

export abstract class QuestionRepository {
    abstract create(question: QuestionEntity): Promise<void>;
    abstract findQuestionById(id: string): Promise<QuestionEntity | null>;
    abstract findQuestionsByYear(year: number): Promise<QuestionEntity[] | null>;
    abstract findQuestionsByTitle(title: string): Promise<QuestionEntity[] | null>;
    abstract findQuestionsByTopic(topic: string): Promise<QuestionEntity[] | null>;
    abstract findQuestionsBySubject(subject: string): Promise<QuestionEntity[] | null>;
    abstract findQuestionsByInstitution(institution: string): Promise<QuestionEntity[] | null>;
    abstract findQuestionsBySubjectAndTopic(subject: string, topic: string): Promise<QuestionEntity[] | null>;
}