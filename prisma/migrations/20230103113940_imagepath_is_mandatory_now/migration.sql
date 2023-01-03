/*
  Warnings:

  - Made the column `imagepath` on table `QuestionRecord` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_QuestionRecord" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "institution" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "imagepath" TEXT NOT NULL,
    "alternatives" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "topic" TEXT NOT NULL,
    "year" INTEGER NOT NULL
);
INSERT INTO "new_QuestionRecord" ("alternatives", "id", "imagepath", "institution", "subject", "title", "topic", "year") SELECT "alternatives", "id", "imagepath", "institution", "subject", "title", "topic", "year" FROM "QuestionRecord";
DROP TABLE "QuestionRecord";
ALTER TABLE "new_QuestionRecord" RENAME TO "QuestionRecord";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
