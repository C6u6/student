import { Alternatives } from "@app/entities/question.alternatives";
import { QuestionRecordHelperForAlternatives } from "@prisma/client";

export abstract class QuestionAlternativesRepository {
    abstract create(props: Alternatives): Promise<void>;
    abstract findAlternatives(id: string): Promise<QuestionRecordHelperForAlternatives | Alternatives | null>;
}