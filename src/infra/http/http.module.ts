import { CreateQuestion } from "@app/use-cases/question/create.question";
import { ReturnQuestions } from "@app/use-cases/question/return.questions";
import { RespondToQuestion } from "@app/use-cases/student-and-question/respond.to.question";
import { ChangeEmail } from "@app/use-cases/student/change.student.email";
import { ChangePassword } from "@app/use-cases/student/change.student.password";
import { Module } from "@nestjs/common";
import { CreateStudent } from "src/app/use-cases/student/create.user";
import { DatabaseModule } from "../database/database.module";
import { AppController } from "./controllers/app.controller";

@Module({
    imports: [DatabaseModule],
    controllers: [ AppController ],
    providers: [
        CreateStudent,
        CreateQuestion,
        RespondToQuestion,
        ChangeEmail,
        ChangePassword,
        ReturnQuestions,
    ]
})

export class HttpModule {}