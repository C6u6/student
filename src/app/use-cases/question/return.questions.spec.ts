import { makeQuestion } from "@test/factories/question.factories";
import { InMemoryQuestionRepository } from "@test/repositories/in.memory.repository.question";
import { CreateQuestion } from "./create.question";
import { ReturnQuestions } from "./return.questions";

describe('return question', () => {
    it('should be able to return any question that has properties that match the props', () => {
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
        const createQuestion = new CreateQuestion(questionRepository);
        
        // Generate many similar questions
        info.forEach( props => {
            let question = makeQuestion({...props});
            createQuestion.execute(question);
        });
        
        expect(returnQuestions.execute(info[0])).toBeTruthy();

        // With this props, an empty object will be retrived
        let nonExistingQuestion = {
            topic: 'Does not exist',
            year: 1000,
            institution: 'No question with this'
        };

        // Expected an empty object
        let keys = Object.keys(returnQuestions.execute(nonExistingQuestion));

        expect(keys.length).toEqual(0);
    });
});