import { IsNotEmpty, IsUUID, Length } from "class-validator";

export class CreateQuestionBody {
    @IsNotEmpty()
    @IsUUID()
    id: string;

    @IsNotEmpty()
    questionYear: string;

    @IsNotEmpty()
    questionTitle: string;

    @IsNotEmpty()
    questionTopic: string;

    @IsNotEmpty()
    questionInstitution: string;

    @IsNotEmpty()
    questionAlternatives: string;
}