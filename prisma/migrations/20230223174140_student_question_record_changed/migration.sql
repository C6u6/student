/*
  Warnings:

  - You are about to alter the column `secondsToAnswer` on the `StudentQuestionRecord` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_StudentQuestionRecord" (
    "id" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    "questionId" TEXT NOT NULL,
    "correctlyAnswered" BOOLEAN NOT NULL,
    "inTime" BOOLEAN NOT NULL,
    "secondsToAnswer" INTEGER NOT NULL,
    CONSTRAINT "StudentQuestionRecord_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "StudentRecord" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "StudentQuestionRecord_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "QuestionRecord" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_StudentQuestionRecord" ("correctlyAnswered", "id", "inTime", "questionId", "secondsToAnswer", "studentId") SELECT "correctlyAnswered", "id", "inTime", "questionId", "secondsToAnswer", "studentId" FROM "StudentQuestionRecord";
DROP TABLE "StudentQuestionRecord";
ALTER TABLE "new_StudentQuestionRecord" RENAME TO "StudentQuestionRecord";
CREATE UNIQUE INDEX "StudentQuestionRecord_id_key" ON "StudentQuestionRecord"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
