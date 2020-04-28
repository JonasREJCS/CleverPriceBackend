import {MigrationInterface, QueryRunner} from "typeorm";

export class Migration1588051231950 implements MigrationInterface {
    name = 'Migration1588051231950'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `produto` DROP COLUMN `ean`", undefined);
        await queryRunner.query("ALTER TABLE `preco` DROP FOREIGN KEY `FK_da3598cb89773a3300a3f2a875b`", undefined);
        await queryRunner.query("ALTER TABLE `produto` CHANGE `produtoId` `produtoId` int UNSIGNED NOT NULL AUTO_INCREMENT", undefined);
        await queryRunner.query("ALTER TABLE `preco` CHANGE `precoId` `precoId` int UNSIGNED NOT NULL AUTO_INCREMENT", undefined);
        await queryRunner.query("ALTER TABLE `preco` CHANGE `produtoId` `produtoId` int UNSIGNED NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `preco` ADD CONSTRAINT `FK_da3598cb89773a3300a3f2a875b` FOREIGN KEY (`produtoId`) REFERENCES `produto`(`produtoId`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `preco` DROP FOREIGN KEY `FK_da3598cb89773a3300a3f2a875b`", undefined);
        await queryRunner.query("ALTER TABLE `preco` CHANGE `produtoId` `produtoId` int(10) UNSIGNED NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `preco` CHANGE `precoId` `precoId` int(10) UNSIGNED NOT NULL AUTO_INCREMENT", undefined);
        await queryRunner.query("ALTER TABLE `produto` CHANGE `produtoId` `produtoId` int(10) UNSIGNED NOT NULL AUTO_INCREMENT", undefined);
        await queryRunner.query("ALTER TABLE `preco` ADD CONSTRAINT `FK_da3598cb89773a3300a3f2a875b` FOREIGN KEY (`produtoId`) REFERENCES `produto`(`produtoId`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `produto` ADD `ean` varchar(255) NOT NULL", undefined);
    }

}
