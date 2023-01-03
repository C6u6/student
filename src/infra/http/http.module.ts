import { CreateQuestion } from "@app/use-cases/question/create.question";
import { RespondToQuestion } from "@app/use-cases/student-and-question/respond.to.question";
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
        RespondToQuestion
    ]
})

export class HttpModule {}