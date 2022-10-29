-- CreateTable
CREATE TABLE "films" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "banner" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "director" TEXT NOT NULL,
    "producer" TEXT NOT NULL,

    CONSTRAINT "films_pkey" PRIMARY KEY ("id")
);
