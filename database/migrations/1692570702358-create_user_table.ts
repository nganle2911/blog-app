import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUserTable1692570702358 implements MigrationInterface {
    name = 'CreateUserTable1692570702358'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, 
            \`first_name\` varchar(255) NOT NULL, 
            \`last_name\` varchar(255) NOT NULL, 
            \`pass_word\` varchar(255) NOT NULL, 
            \`status\` int NOT NULL DEFAULT '1', 
            PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`user\``);
    }

}