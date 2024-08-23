-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "postType" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "staus" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "schema" TEXT NOT NULL,
    "featuredImageUrl" TEXT NOT NULL,
    "publishOn" TIMESTAMP(3) NOT NULL,
    "tags" TEXT NOT NULL,
    "metaOptions" JSONB NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Post_slug_key" ON "Post"("slug");
