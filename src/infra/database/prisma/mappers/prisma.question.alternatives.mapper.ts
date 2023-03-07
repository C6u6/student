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

        const tempObjProperties = Object.keys(tempObj);
        alternatives.alternativesSet.forEach((el, index) => {
            tempObj[tempObjProperties[index]] = el; 
        });

        return {
            id: alternatives.id,
            ownedById: alternatives.ownedById,
            ...tempObj,
        };
    };

    static toDomain(raw) {
        return new Alternatives({
            id: raw?.id,
            ownedById: raw?.ownedById,
            alternatives: raw?.alternatives,
        });
    };
};