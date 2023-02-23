import { Alternatives, AlternativesEntity } from "@app/entities/question.alternatives";

export class PrismaQuestionAlternativesMappper {
    static toPrisma(alternatives: Alternatives) {
        let tempObj = {
            alternative1: '',
            alternative2: '',
            alternative3: '',
            alternative4: '',
            alternative5: '',
        };

        alternatives.alternativesSet.forEach((el, index) => {
            tempObj[alternatives[index + 1]] = el; 
        });

        return {
            id: alternatives.id,
            ownedById: alternatives.ownedBy,
            ...tempObj,
        };
    };

    static toDomain(raw: AlternativesEntity) {
        return new Alternatives({
            id: raw.id,
            ownedById: raw.ownedById,
            alternatives: raw.alternatives,
        });
    };
};