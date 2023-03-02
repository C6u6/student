import { Alternatives } from "@app/entities/question.alternatives";
import { makeQuestionAlternatives } from "@test/factories/question.alternatives.factories";

describe('Alternatives question', () => {
    it('should be able to create a alternatives', () => {
        const alternatives = new Alternatives({
            ownedById: "b62c05c5-7592-4780-ba03-fc8f4042dc73",
            alternatives: ["A", "B", "C", "D", "E"],
        });

        expect(alternatives).toBeTruthy();
        expect(alternatives.alternativesSet.length).toEqual(5);
    });

    it('should be able to access the alternatives and its properties', () => {
        const alternativeEntity = makeQuestionAlternatives({});
        expect(alternativeEntity.alternativesSet.length).toEqual(5);
    });
});