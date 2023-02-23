/*
  Warnings:

  - A unique constraint covering the columns `[ownedById]` on the table `QuestionRecordHelperForAlternatives` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "QuestionRecordHelperForAlternatives_ownedById_key" ON "QuestionRecordHelperForAlternatives"("ownedById");
