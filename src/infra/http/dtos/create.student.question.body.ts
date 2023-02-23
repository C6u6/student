import { IsNotEmpty, IsUUID } from "class-validator";

export class CreateStudentQuestionBody {
    @IsNotEmpty()
    @IsUUID()
    id: string;

    @IsNotEmpty()
    inTime: boolean;

    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    studentId: string;

    @IsNotEmpty()
    questionId: string;

    @IsNotEmpty()
    secondsToAnswer: number;

    @IsNotEmpty()
    correctlyAnswered: boolean;
}