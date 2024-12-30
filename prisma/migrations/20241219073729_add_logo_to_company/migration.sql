/*
  Warnings:

  - Added the required column `logo` to the `websites` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `websites` ADD COLUMN `logo` VARCHAR(191) NOT NULL;
