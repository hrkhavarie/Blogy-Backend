/*
  Warnings:

  - Changed the type of `staus` on the `Post` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "postStatus" AS ENUM ('draft', 'scheduled', 'review', 'published');

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "staus",
ADD COLUMN     "staus" "postStatus" NOT NULL;

-- DropEnum
DROP TYPE "postStaus";
