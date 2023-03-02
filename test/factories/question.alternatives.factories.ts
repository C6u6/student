import { Alternatives, AlternativesEntity } from "@app/entities/question.alternatives";
import { randomUUID } from "crypto";

type Override = Partial<AlternativesEntity>

export function makeQuestionAlternatives(override: Override) {
    return new Alternatives({
        id: randomUUID(),
        alternatives: ['A','B','C','D','E'],
        ownedById: randomUUID(),
        ...override,
    })
}