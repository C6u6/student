import { Question, QuestionEntity } from "src/app/entities/question";
import { QuestionRepository } from "src/app/repositories/question.repository";

export class InMemoryQuestionRepository implements QuestionRepository {
    public questions: Question[];

    async create(question: Question): Promise<void> {
        this.questions.push(question)
    }

    async findQuestionById(questionId: string): Promise<Question | null> {
        const question = this.questions.find(
            (item) => (item.id === questionId)
        );

        if (!question) {
            return null;
        }

        return question;
    }

    async findQuestionsByInstitution(institution: string): Promise<Question[] | null> {
        const questions = this.questions.filter(
            (item) => (item.institution === institution)
        );

        if (!questions) {
            return null;
        }

        return questions;
    }

    async findQuestionsByTitle(title: string): Promise<Question[] | null> {
        const questions = this.questions.filter(
            (item) => (item.title === title)
        );

        if (!questions) {
            return null;
        }

        return questions;
    }

    async findQuestionsBySubject(subject: string): Promise<Question[] | null> {
        const questions = this.questions.filter(
            (item) => (item.subject === subject)
        );

        if (!questions) {
            return null;
        }

        return questions;
    }

    async findQuestionsByTopic(topic: string): Promise<Question[] | null> {
        const questions = this.questions.filter(
            (item) => (item.topic === topic)
        );

        if (!questions) {
            return null;
        }

        return questions;
    }

    async findQuestionsByYear(year: number): Promise<Question[] | null> {
        const questions = this.questions.filter(
            (item) => (Number(item.year) === year)
        );

        if (!questions) {
            return null;
        }

        return questions;
    }

    async findQuestionsBySubjectAndTopic(subject: string, topic: string): Promise<Question[] | null> {
        const questions = this.questions.filter(
            (item) => (
                (item.subject === subject) && (item.topic === topic) 
            )
        );

        if (!questions) {
            return null;
        }

        return questions;
    }    
}