/*
  Warnings:

  - The `staus` column on the `Post` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "postStaus" AS ENUM ('draft', 'scheduled', 'review', 'published');

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "staus",
ADD COLUMN     "staus" "postStaus",
ALTER COLUMN "content" DROP NOT NULL;
