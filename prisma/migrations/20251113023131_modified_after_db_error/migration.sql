-- DropIndex
DROP INDEX "Account_accessToken_key";

-- DropIndex
DROP INDEX "User_email_key";

-- AlterTable
ALTER TABLE "Account" ALTER COLUMN "nextDeltaToken" DROP NOT NULL;
