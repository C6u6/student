-- CreateTable
CREATE TABLE "StudentRecord" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "QuestionRecord" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "institution" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "imagepath" TEXT,
    "alternatives" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "topic" TEXT NOT NULL,
    "year" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "StudentQuestionRecord" (
    "id" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    "questionId" TEXT NOT NULL,
    "correctlyAnswered" BOOLEAN NOT NULL,
    "inTime" BOOLEAN NOT NULL,
    CONSTRAINT "StudentQuestionRecord_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "StudentRecord" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "StudentQuestionRecord_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "QuestionRecord" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "StudentRecord_email_key" ON "StudentRecord"("email");

-- CreateIndex
CREATE UNIQUE INDEX "StudentQuestionRecord_id_key" ON "StudentQuestionRecord"("id");
