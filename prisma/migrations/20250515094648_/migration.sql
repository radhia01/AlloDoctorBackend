/*
  Warnings:

  - You are about to drop the column `country` on the `Address` table. All the data in the column will be lost.
  - You are about to drop the column `number` on the `Address` table. All the data in the column will be lost.
  - You are about to drop the column `postalCode` on the `Address` table. All the data in the column will be lost.
  - Made the column `street` on table `Address` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Address" DROP COLUMN "country",
DROP COLUMN "number",
DROP COLUMN "postalCode",
ALTER COLUMN "street" SET NOT NULL,
ALTER COLUMN "city" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "description" TEXT,
ALTER COLUMN "phone" DROP DEFAULT;
