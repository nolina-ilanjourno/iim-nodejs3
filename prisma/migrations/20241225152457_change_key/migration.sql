/*
  Warnings:

  - A unique constraint covering the columns `[language_id,key]` on the table `translations` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `translations_key_key` ON `translations`;

-- CreateIndex
CREATE UNIQUE INDEX `translations_language_id_key_key` ON `translations`(`language_id`, `key`);
