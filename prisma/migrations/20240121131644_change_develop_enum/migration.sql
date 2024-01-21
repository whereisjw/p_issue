/*
  Warnings:

  - You are about to alter the column `develop` on the `issue` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(1))` to `Enum(EnumId(1))`.

*/
-- AlterTable
ALTER TABLE `issue` MODIFY `develop` ENUM('FRONTEND', 'BACKEND', 'ETC') NOT NULL DEFAULT 'FRONTEND';
