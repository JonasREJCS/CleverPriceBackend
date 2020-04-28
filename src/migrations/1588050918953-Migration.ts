import {MigrationInterface, QueryRunner} from "typeorm";

export class Migration1588050918953 implements MigrationInterface {
    name = 'Migration1588050918953'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `produto` (`produtoId` int UNSIGNED NOT NULL AUTO_INCREMENT, `nomeProduto` varchar(255) NOT NULL, `ean` varchar(255) NOT NULL, `created` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`produtoId`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `preco` (`precoId` int UNSIGNED NOT NULL AUTO_INCREMENT, `valor` int NOT NULL, `created` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `produtoId` int UNSIGNED NOT NULL, PRIMARY KEY (`precoId`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("ALTER TABLE `preco` ADD CONSTRAINT `FK_da3598cb89773a3300a3f2a875b` FOREIGN KEY (`produtoId`) REFERENCES `produto`(`produtoId`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `preco` DROP FOREIGN KEY `FK_da3598cb89773a3300a3f2a875b`", undefined);
        await queryRunner.query("DROP TABLE `preco`", undefined);
        await queryRunner.query("DROP TABLE `produto`", undefined);
    }

}
