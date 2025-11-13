/*
  Warnings:

  - A unique constraint covering the columns `[userId,emailAddress]` on the table `Account` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Account_userId_emailAddress_key" ON "Account"("userId", "emailAddress");
