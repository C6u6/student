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

    image: string | null | undefined;

    @IsNotEmpty()
    subject: string;

    @IsNotEmpty()
    institution: string;

    @IsNotEmpty()
    alternatives: string;
}