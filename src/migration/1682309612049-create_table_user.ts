import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateTableUser1682309612049 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            CREATE TABLE IF NOT EXISTS public.tb_users
            (
                id integer NOT NULL,
                nick_name character varying COLLATE pg_catalog."default" NOT NULL,
                email character varying COLLATE pg_catalog."default" NOT NULL,
                phone character varying COLLATE pg_catalog."default",
                cpf character varying COLLATE pg_catalog."default" NOT NULL,
                password character varying COLLATE pg_catalog."default" NOT NULL,
                created_at timestamp without time zone NOT NULL DEFAULT now(),
                updated_at timestamp without time zone NOT NULL DEFAULT now(),
                deleted_at timestamp without time zone,
                CONSTRAINT "PK_a2c23e0679749c22ffa6c2be910" PRIMARY KEY (id)
            );

            CREATE SEQUENCE public.user_id_seq
                AS integer
                START WITH 1
                INCREMENT BY 1
                NO MINVALUE
                NO MAXVALUE
                CACHE 1;

            ALTER SEQUENCE public.user_id_seq OWNED BY public.tb_users.id;

            ALTER TABLE ONLY public.tb_users ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            drop table tb_users;
        `)
    }

}
