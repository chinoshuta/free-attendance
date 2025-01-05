/*
  Warnings:

  - You are about to drop the column `end_at` on the `attendances` table. All the data in the column will be lost.
  - You are about to drop the column `start_at` on the `attendances` table. All the data in the column will be lost.
  - Added the required column `endAt` to the `attendances` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startAt` to the `attendances` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "attendances" DROP COLUMN "end_at",
DROP COLUMN "start_at",
ADD COLUMN     "endAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "startAt" TIMESTAMP(3) NOT NULL;
