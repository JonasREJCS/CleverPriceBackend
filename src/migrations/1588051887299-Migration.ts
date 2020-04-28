import {MigrationInterface, QueryRunner} from "typeorm";

export class Migration1588051887299 implements MigrationInterface {
    name = 'Migration1588051887299'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `preco` DROP FOREIGN KEY `FK_da3598cb89773a3300a3f2a875b`", undefined);
        await queryRunner.query("ALTER TABLE `produto` CHANGE `produtoId` `produtoId` int UNSIGNED NOT NULL AUTO_INCREMENT", undefined);
        await queryRunner.query("ALTER TABLE `preco` DROP FOREIGN KEY `FK_9508b15b46d7c653edaa6f91e98`", undefined);
        await queryRunner.query("ALTER TABLE `unidade_de_medida` CHANGE `unidadeDeMedidaId` `unidadeDeMedidaId` int UNSIGNED NOT NULL AUTO_INCREMENT", undefined);
        await queryRunner.query("ALTER TABLE `preco` CHANGE `precoId` `precoId` int UNSIGNED NOT NULL AUTO_INCREMENT", undefined);
        await queryRunner.query("ALTER TABLE `preco` DROP COLUMN `valor`", undefined);
        await queryRunner.query("ALTER TABLE `preco` ADD `valor` decimal(8,2) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `preco` CHANGE `unidadeDeMedidaId` `unidadeDeMedidaId` int UNSIGNED NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `preco` CHANGE `produtoId` `produtoId` int UNSIGNED NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `preco` ADD CONSTRAINT `FK_9508b15b46d7c653edaa6f91e98` FOREIGN KEY (`unidadeDeMedidaId`) REFERENCES `unidade_de_medida`(`unidadeDeMedidaId`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `preco` ADD CONSTRAINT `FK_da3598cb89773a3300a3f2a875b` FOREIGN KEY (`produtoId`) REFERENCES `produto`(`produtoId`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `preco` DROP FOREIGN KEY `FK_da3598cb89773a3300a3f2a875b`", undefined);
        await queryRunner.query("ALTER TABLE `preco` DROP FOREIGN KEY `FK_9508b15b46d7c653edaa6f91e98`", undefined);
        await queryRunner.query("ALTER TABLE `preco` CHANGE `produtoId` `produtoId` int(10) UNSIGNED NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `preco` CHANGE `unidadeDeMedidaId` `unidadeDeMedidaId` int(10) UNSIGNED NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `preco` DROP COLUMN `valor`", undefined);
        await queryRunner.query("ALTER TABLE `preco` ADD `valor` int NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `preco` CHANGE `precoId` `precoId` int(10) UNSIGNED NOT NULL AUTO_INCREMENT", undefined);
        await queryRunner.query("ALTER TABLE `unidade_de_medida` CHANGE `unidadeDeMedidaId` `unidadeDeMedidaId` int(10) UNSIGNED NOT NULL AUTO_INCREMENT", undefined);
        await queryRunner.query("ALTER TABLE `preco` ADD CONSTRAINT `FK_9508b15b46d7c653edaa6f91e98` FOREIGN KEY (`unidadeDeMedidaId`) REFERENCES `unidade_de_medida`(`unidadeDeMedidaId`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `produto` CHANGE `produtoId` `produtoId` int(10) UNSIGNED NOT NULL AUTO_INCREMENT", undefined);
        await queryRunner.query("ALTER TABLE `preco` ADD CONSTRAINT `FK_da3598cb89773a3300a3f2a875b` FOREIGN KEY (`produtoId`) REFERENCES `produto`(`produtoId`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

}
