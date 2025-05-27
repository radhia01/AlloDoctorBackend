/*
  Warnings:

  - You are about to drop the column `adressId` on the `User` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "User_adressId_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "adressId";
