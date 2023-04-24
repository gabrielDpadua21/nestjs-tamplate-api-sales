import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateTableCity1682310785244 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            CREATE TABLE public.tb_city (
                id integer NOT NULL,
                state_id integer NOT NULL,
                name character varying NOT NULL,
                created_at timestamp without time zone DEFAULT now() NOT NULL,
                updated_at timestamp without time zone DEFAULT now() NOT NULL,
                primary key (id),
                foreign key (state_id) references public.tb_state(id)
            );

            CREATE SEQUENCE public.city_id_seq
                AS integer
                START WITH 1
                INCREMENT BY 1
                NO MINVALUE
                NO MAXVALUE
                CACHE 1;
                
            ALTER SEQUENCE public.city_id_seq OWNED BY public.tb_city.id;
            ALTER TABLE ONLY public.tb_city ALTER COLUMN id SET DEFAULT nextval('public.city_id_seq'::regclass);
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            DROP TABLE public.tb_city;
        `);
    }

}
