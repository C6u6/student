import { Alternatives } from "@app/entities/question.alternatives";

describe('Return of alternatives', () => {
    it('should return the proper alternative, accordingly to the id provided.', () => {
        const alternatives = new Alternatives({
            ownedById: "b62c05c5-7592-4780-ba03-fc8f4042dc73",
            alternatives: ["A", "B", "C", "D", "E"],
        });

        const alternativesReturned = returnQuestionAlternatives
    })
});