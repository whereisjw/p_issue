-- AlterTable
ALTER TABLE `issue` ADD COLUMN `charger` VARCHAR(255) NULL;

-- AddForeignKey
ALTER TABLE `Issue` ADD CONSTRAINT `Issue_charger_fkey` FOREIGN KEY (`charger`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
