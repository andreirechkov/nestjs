import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateWizardAnswerTable1728810757083 implements MigrationInterface {
    name = 'CreateWizardAnswerTable1728810757083'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "wizard" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "position" integer NOT NULL, "description" character varying, "type" character varying NOT NULL DEFAULT 'text', CONSTRAINT "PK_a76ea112bf9f5e6d42ad720fb71" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "answer" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "wizardId" uuid NOT NULL, CONSTRAINT "PK_9232db17b63fb1e94f97e5c224f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "answer" ADD CONSTRAINT "FK_727e4cab992a50c2c61e20cb0b6" FOREIGN KEY ("wizardId") REFERENCES "wizard"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "answer" DROP CONSTRAINT "FK_727e4cab992a50c2c61e20cb0b6"`);
        await queryRunner.query(`DROP TABLE "answer"`);
        await queryRunner.query(`DROP TABLE "wizard"`);
    }

}
