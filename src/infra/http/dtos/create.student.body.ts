import { IsNotEmpty, IsUUID } from "class-validator";

export class CreateStudentBody {
    @IsNotEmpty()
    @IsUUID()
    id: string;

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    password: string;
}