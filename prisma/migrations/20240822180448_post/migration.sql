/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Post";

-- CreateTable
CREATE TABLE "posts" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "postType" "postType" NOT NULL,
    "slug" TEXT NOT NULL,
    "status" "postStatus" NOT NULL,
    "content" TEXT,
    "schema" TEXT,
    "featuredImageUrl" TEXT,
    "publishOn" TIMESTAMP(3),
    "tags" TEXT[],

    CONSTRAINT "posts_pkey" PRIMARY KEY ("id")
);
