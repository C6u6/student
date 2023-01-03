import { IsNotEmpty, IsUUID } from "class-validator";

export class CreateQuestionBody {
    @IsNotEmpty()
    @IsUUID()
    id: string;

    @IsNotEmpty()
    year: number;

    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    topic: string;

    @IsNotEmpty()
    subject: string;

    @IsNotEmpty()
    imagepath: string;

    @IsNotEmpty()
    institution: string;

    @IsNotEmpty()
    alternatives: string;
}