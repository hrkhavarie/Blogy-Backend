/*
  Warnings:

  - The `metaOptions` column on the `Post` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Made the column `staus` on table `Post` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "schema" DROP NOT NULL,
ALTER COLUMN "publishOn" DROP NOT NULL,
ALTER COLUMN "staus" SET NOT NULL,
DROP COLUMN "metaOptions",
ADD COLUMN     "metaOptions" TEXT[];

-- CreateTable
CREATE TABLE "metaOption" (
    "key" TEXT NOT NULL,
    "value" TEXT NOT NULL,

    CONSTRAINT "metaOption_pkey" PRIMARY KEY ("key")
);
