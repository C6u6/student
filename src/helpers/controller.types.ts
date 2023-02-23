import { QuestionEntity } from "@app/entities/question"
import { QuestionRecordHelperForAlternatives } from "@prisma/client";

export type QuestionAndAlternatives = {
    question: QuestionEntity | QuestionEntity[] | null;
    alternatives: Promise<QuestionRecordHelperForAlternatives | null>
};