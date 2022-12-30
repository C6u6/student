import { Injectable } from "@nestjs/common";
import { StudentEntity } from "src/app/entities/student";
import { StudentRepository } from "src/app/repositories/student.repository";
import { StudentNotFound } from "../errors/errors";

@Injectable()
export class ChangePassword {
    constructor(private studentRepository: StudentRepository) {}

    async execute(request: Partial<StudentEntity>): Promise<void> {
        const { id, password } = request;

        const student = await this.studentRepository.findById(id);

        if (!student) throw new StudentNotFound();

        // Hashing the password

        // Including crypto module
        var crypto = require('crypto');
        const salt = new Uint32Array(7);
        let passwordHash;
        
        // Calling scrypt method with some of its parameter
        crypto.scrypt(password, salt,  16, (err, derivedKey) => {
            if (err) throw err;
            // Defining the hashed password
            passwordHash = derivedKey;
        });

        student.password = passwordHash;
    }
}