/*
  Warnings:

  - Changed the type of `postType` on the `Post` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `metaOptions` on the `Post` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "postType" AS ENUM ('post', 'page', 'stroy', 'series');

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "postType",
ADD COLUMN     "postType" "postType" NOT NULL,
DROP COLUMN "metaOptions",
ADD COLUMN     "metaOptions" JSONB NOT NULL;
