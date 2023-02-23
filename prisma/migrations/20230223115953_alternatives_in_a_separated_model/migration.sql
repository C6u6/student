/*
  Warnings:

  - You are about to drop the column `alternatives` on the `QuestionRecord` table. All the data in the column will be lost.
  - Added the required column `secondsToAnswer` to the `StudentQuestionRecord` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "QuestionRecordHelperForAlternatives" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "alternative1" TEXT NOT NULL,
    "alternative2" TEXT NOT NULL,
    "alternative3" TEXT NOT NULL,
    "alternative4" TEXT NOT NULL,
    "alternative5" TEXT NOT NULL,
    "ownedById" TEXT NOT NULL,
    CONSTRAINT "QuestionRecordHelperForAlternatives_ownedById_fkey" FOREIGN KEY ("ownedById") REFERENCES "QuestionRecord" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_QuestionRecord" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "year" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "topic" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "imagepath" TEXT NOT NULL,
    "institution" TEXT NOT NULL
);
INSERT INTO "new_QuestionRecord" ("id", "imagepath", "institution", "subject", "title", "topic", "year") SELECT "id", "imagepath", "institution", "subject", "title", "topic", "year" FROM "QuestionRecord";
DROP TABLE "QuestionRecord";
ALTER TABLE "new_QuestionRecord" RENAME TO "QuestionRecord";
CREATE TABLE "new_StudentQuestionRecord" (
    "id" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    "questionId" TEXT NOT NULL,
    "correctlyAnswered" BOOLEAN NOT NULL,
    "inTime" BOOLEAN NOT NULL,
    "secondsToAnswer" TEXT NOT NULL,
    CONSTRAINT "StudentQuestionRecord_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "StudentRecord" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "StudentQuestionRecord_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "QuestionRecord" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_StudentQuestionRecord" ("correctlyAnswered", "id", "inTime", "questionId", "studentId") SELECT "correctlyAnswered", "id", "inTime", "questionId", "studentId" FROM "StudentQuestionRecord";
DROP TABLE "StudentQuestionRecord";
ALTER TABLE "new_StudentQuestionRecord" RENAME TO "StudentQuestionRecord";
CREATE UNIQUE INDEX "StudentQuestionRecord_id_key" ON "StudentQuestionRecord"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
