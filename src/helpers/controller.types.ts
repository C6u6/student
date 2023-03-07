import { QuestionEntity } from "@app/entities/question"
import { Alternatives } from "@app/entities/question.alternatives";
import { QuestionRecordHelperForAlternatives } from "@prisma/client";

export type QuestionAndAlternatives = {
    question: QuestionEntity | QuestionEntity[] | null;
    alternatives: Promise<QuestionRecordHelperForAlternatives | Alternatives | null>
};

export interface Add_id_Property {
    _id: string,
}