import { Module } from "@nestjs/common";
import { CreateStudent } from "src/app/use-cases/student/create.user";
import { DatabaseModule } from "../database/database.module";
import { AppController } from "./controllers/app.controller";

@Module({
    imports: [DatabaseModule],
    controllers: [ AppController ],
    providers: [
        CreateStudent,
    ]
})

export class HttpModule {}