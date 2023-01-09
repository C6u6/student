import { Question, QuestionEntity } from "@app/entities/question";
import { makeQuestion } from "@test/factories/question.factories";
import { InMemoryQuestionRepository } from "@test/repositories/in.memory.repository.question";
import { ReturnQuestions } from "./return.questions";

describe('return all question', () => {
    it('should be able to return as many questions as possible', () => {
        // specific info for creating some questions
        const info = [
            {
                title: "This is a silly title",
                topic: "No criativity",
                alternatives: "A) Cry B) Not to Cry"
            }, {
                title: "This is a silly title",
                topic: "No criativity",
                alternatives: "A) Cry B) Not to Cry"
            }, {
                title: "This is a silly title",
                topic: "No criativity",
                alternatives: "A) Cry B) Not to Cry"
            }, {
                title: "How many legs does a human has?",
                topic: "Human body",
                alternatives: "A) 2 B) 4"
            }, {
                title: "How many legs does a human has?",
                topic: "Human body",
                alternatives: "A) 2 B) 6"
            }, {
                title: "How many eyes does a human has?",
                topic: "Human body",
                alternatives: "A) 2 B) 4"
            }, {
                title: "How many eyes does a human has?",
                topic: "Human body",
                alternatives: "A) 2 B) 4"
            }, {
                title: "Where is located the Himalia?",
                topic: "Geografy",
                alternatives: "A) Asia B) Australia"
            }
        ];
        
        const questionRepository = new InMemoryQuestionRepository();
        const returnQuestions = new ReturnQuestions(questionRepository);
        
        // Generate many similar questions
        info.forEach( props => {
            let question = makeQuestion({...props});
            new Question(question);
        });

        // Check question in returnQuestions
        function findQuestionsThathaveThatPropeties(props: Partial<QuestionEntity>) {
            return returnQuestions.execute(props);
        };
        
        expect(findQuestionsThathaveThatPropeties(info[0])).toEqual(3);

    });
});