import {MigrationInterface, QueryRunner} from "typeorm";

export class Migration1588051696463 implements MigrationInterface {
    name = 'Migration1588051696463'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `unidade_de_medida` (`unidadeDeMedidaId` int UNSIGNED NOT NULL AUTO_INCREMENT, `nomeUnidadeDeMedida` int NOT NULL, `created` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`unidadeDeMedidaId`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("ALTER TABLE `preco` ADD `quantidade` int NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `preco` ADD `unidadeDeMedidaId` int UNSIGNED NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `preco` DROP FOREIGN KEY `FK_da3598cb89773a3300a3f2a875b`", undefined);
        await queryRunner.query("ALTER TABLE `produto` CHANGE `produtoId` `produtoId` int UNSIGNED NOT NULL AUTO_INCREMENT", undefined);
        await queryRunner.query("ALTER TABLE `preco` CHANGE `precoId` `precoId` int UNSIGNED NOT NULL AUTO_INCREMENT", undefined);
        await queryRunner.query("ALTER TABLE `preco` CHANGE `produtoId` `produtoId` int UNSIGNED NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `preco` ADD CONSTRAINT `FK_9508b15b46d7c653edaa6f91e98` FOREIGN KEY (`unidadeDeMedidaId`) REFERENCES `unidade_de_medida`(`unidadeDeMedidaId`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `preco` ADD CONSTRAINT `FK_da3598cb89773a3300a3f2a875b` FOREIGN KEY (`produtoId`) REFERENCES `produto`(`produtoId`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `preco` DROP FOREIGN KEY `FK_da3598cb89773a3300a3f2a875b`", undefined);
        await queryRunner.query("ALTER TABLE `preco` DROP FOREIGN KEY `FK_9508b15b46d7c653edaa6f91e98`", undefined);
        await queryRunner.query("ALTER TABLE `preco` CHANGE `produtoId` `produtoId` int(10) UNSIGNED NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `preco` CHANGE `precoId` `precoId` int(10) UNSIGNED NOT NULL AUTO_INCREMENT", undefined);
        await queryRunner.query("ALTER TABLE `produto` CHANGE `produtoId` `produtoId` int(10) UNSIGNED NOT NULL AUTO_INCREMENT", undefined);
        await queryRunner.query("ALTER TABLE `preco` ADD CONSTRAINT `FK_da3598cb89773a3300a3f2a875b` FOREIGN KEY (`produtoId`) REFERENCES `produto`(`produtoId`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `preco` DROP COLUMN `unidadeDeMedidaId`", undefined);
        await queryRunner.query("ALTER TABLE `preco` DROP COLUMN `quantidade`", undefined);
        await queryRunner.query("DROP TABLE `unidade_de_medida`", undefined);
    }

}
