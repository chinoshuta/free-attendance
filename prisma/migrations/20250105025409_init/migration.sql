/*
  Warnings:

  - You are about to drop the column `userId` on the `projects` table. All the data in the column will be lost.
  - Added the required column `user_id` to the `projects` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "projects" DROP CONSTRAINT "projects_userId_fkey";

-- AlterTable
ALTER TABLE "projects" DROP COLUMN "userId",
ADD COLUMN     "user_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "projects" ADD CONSTRAINT "projects_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
