/*
  Warnings:

  - You are about to drop the column `bookId` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `externalId` on the `Booking` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_bookId_fkey";

-- AlterTable
ALTER TABLE "Booking" DROP COLUMN "bookId",
DROP COLUMN "externalId";
