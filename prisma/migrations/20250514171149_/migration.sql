-- AlterTable
ALTER TABLE "User" ADD COLUMN     "specialtyId" INTEGER;

-- CreateTable
CREATE TABLE "Speciality" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Speciality_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_specialtyId_fkey" FOREIGN KEY ("specialtyId") REFERENCES "Speciality"("id") ON DELETE SET NULL ON UPDATE CASCADE;
